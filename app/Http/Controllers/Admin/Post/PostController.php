<?php
/* 
Created by : Ajay yadav 
Purpose : GBI Post (Blog ) manage here

Edited by: Manas
Added: Notification controller to send notifications on new blog upload.

*/

namespace App\Http\Controllers\Admin\Post;

use App\Http\Controllers\Admin\Notification\NotificationController;
use App\Http\Controllers\Controller;
use App\Http\Requests\Post\PostRequest;
use Illuminate\Http\Request;
use App\Traits\ImageTrait;
use App\Model\Post\Post;
use App\Model\Post\Category;
use App\Model\Post\Tag;
use Session;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;
    public function all($size)
    {
        return response()->json(Post::select([
            'id','status','title','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
    
    public function index()
    {
        return response()->json(Post::select([
            'id','status','title','updated_at'
            ])
            ->latest('updated_at')
            ->get());
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request)
    {
        $data = $request->except('meta_keyword');
        $tag_id= array();
        $meta_keyword="";   
        foreach ($request->tags as $tag) {
            if($tag['id'] == ''){
                $tag = Tag::create($tag);
            }
            array_push($tag_id,$tag['id']);
            if($meta_keyword ==""){
                $meta_keyword = $meta_keyword . $tag['title'];
            } else {
                $meta_keyword = $meta_keyword .' '. $tag['title'];
            }
        }
        if($request->image){
            $imagename = explode('.',$request->image[0]['name'])[0];

            $data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.post_image'),$imagename);
            $data['alt'] = $imagename;
        }

        $post = Post::create($data);
        $post->meta_keyword = $meta_keyword;
        $post->save();
        $post->tags()->sync($tag_id);
        $data2 = array();
        $data[] = (array)[
            'notification_type' => 'posts',
            'client_type' => $post->client_type,
            'category' => 'blog',
            'category_id' => $post->id,
            'contentData' => [
                'title' => $post->title,
                'description' => $post->summery,
            ]
        ];
        //return redirect()->route('notifRoute', $data);
        //return response()->json('succesfull created');
        setcookie('gbi_notification_type', 'posts', time() + 3600, "/");
        setcookie('gbi_notif_clientType', $post->client_type, time() + 3600, "/");
        setcookie('gbi_notif_category', 'blog', time() + 3600, "/");
        setcookie('gbi_notif_categoryId', $post->id, time() + 3600, "/");
        setcookie('gbi_notif_title', $post->title, time() + 3600, "/");
        setcookie('gbi_notif_description', $post->summery, time() + 3600, "/");

        $notif = (new NotificationController)->store();
        return response()->json('succesfull created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Post\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        $category = Category::find($post->category_id);
        $post->category = $category->title;
        $post->tags;
        return response()->json($post);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Post\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        $post->category;
        $post->tags;
        return response()->json($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Post\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {


        $data = $request->except('meta_keyword');
        $tag_id= [];
        $meta_keyword="";   
        foreach ($request->tags as $tag) {
            if($tag['id'] == ''){
                $tag = Tag::create($tag);
            }
            array_push($tag_id,$tag['id']);
            if($meta_keyword ==""){
                $meta_keyword = $meta_keyword . $tag['title'];
            } else {
                $meta_keyword = $meta_keyword .' '. $tag['title'];
            }
        }
        if($request->image){
            $imagename = explode('.',$request->image[0]['name'])[0];

            $data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.post_image'),$imagename);
            $data['alt'] = $imagename;
        }else{
            unset($data['image']);
        }

        $post->update($data);
        $post->meta_keyword = $meta_keyword;
        $post->save();
        $post->tags()->sync($tag_id);

        return $data;
    }

    public function sendNotif($data){
        return redirect()->route('notifRoute', $data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Post\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $this->AwsDeleteImage($post->image);
        $post->delete();
        return response()->json('successfully deleted');
    }
}
