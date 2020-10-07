<?php

namespace App\Http\Controllers\Admin\Post;
use App\Http\Controllers\Controller;
use App\Model\Post\Category;
use App\Http\Requests\Post\CategoryRequest;
use Illuminate\Http\Request;
use App\Traits\ImageTrait;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;
    public function index()
    {
        return response()->json(Category::get());
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
    public function store(CategoryRequest $request)
    {
        $data = $request->all();
        $data['image'] = $this->verifyAndUpload($request,'image','/images/post/');
        Category::create($data);
        return response()->json('succesfull created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Post\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        return response()->json($category);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Post\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        return response()->json($category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Post\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryRequest $request, Category $category)
    {
        $data = $request->all();
        if($request->image != $category->image){
            $path = '/images/post/'.$category->image;
            $this->deleteImg($path);
            $data['image'] = $this->verifyAndUpload($request,'image','/images/post/');
        }
        $category->update($data);
        return response()->json('succesfull created');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Post\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $path = '/images/post/'.$category->image;
        $this->deleteImg($path);
        $category->delete();
        return response()->json('successfully deleted');
    }
}
