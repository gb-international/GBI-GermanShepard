<?php
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Post\Post;
use App\Model\Post\Comment;
use App\Model\Post\Category;
use App\Model\Post\Tag;
class BlogController extends Controller
{
    public function list($count=3)
    {
        return response()->json(Post::with('category','tags')->paginate($count));
    }

    public function recents()
    {
        return response()->json(Post::with('category','tags')->paginate(3));
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

    public function keywordList()
    {
        $keyword = Tag::get();
        return response()->json($keyword);
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
        if($request->title != ''){
            $data = Post::with('category','tags')
            ->where('title','like',"%$request->title%")
            ->orWhere('category_id',$request->category_id)
            ->whereIn('meta_keyword', $request->tag_id)
            ->get();
        }else{
            $data = Post::with('category','tags')
            ->where('category_id',$request->category_id)
            ->where('title','like',"%$request->title%")
            ->get();
        }
        return response()->json($data);
    }

    public function addComment(Request $request)
    {
        $comment = Comment::create($request->all());
        return response()->json($comment);
    }

}
