<?php
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Post\Post;
use App\Model\Post\Category;
class BlogController extends Controller
{
    public function list(){
        return response()->json(Post::with('category','tags')->paginate(8));
    }
    
    public function view($slug){
        return response()->json(Post::with('category','tags')->where('slug',$slug)->first());
    }

    public function relatedPost($category_id){
        return response()->json(Post::where('category_id',$category_id)->get());
    }

}
