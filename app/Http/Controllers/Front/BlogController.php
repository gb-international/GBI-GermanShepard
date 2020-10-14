<?php
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Post\Post;
use App\Model\Post\Comment;
use App\Model\Post\Category;
class BlogController extends Controller
{
    public function list($count=3)
    {
        return response()->json(Post::with('category','tags')->paginate($count));
    }

    public function category($slug)
    {
        $category = Category::where('slug',$slug)->first();
        return response()->json($category);
    }

    public function categoryList()
    {
        $category = Category::get();
        return response()->json($category);
    }
    
    public function view($slug)
    {
        return response()->json(Post::with('category','tags','comments')->where('slug',$slug)->first());
    }

    public function relatedPost($category_id)
    {
        return response()->json(Post::with('category','tags')->where('category_id',$category_id)->get());
    }

    public function searchPost(Request $request)
    {
        return response()->json(Post::with('category','tags')
            ->where('title','like',"%$request->title%")->get());
    }

    public function addComment(Request $request)
    {
        $comment = Comment::create($request->all());
        return response()->json($comment);
    }

}
