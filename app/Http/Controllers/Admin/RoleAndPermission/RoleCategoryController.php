<?php
/* 
Created by : Rachana Dhaker 
Purpose : Manage Role Category 

*/
namespace App\Http\Controllers\Admin\RoleAndPermission;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Model\RoleAndPermission\RoleCategory;
use DB;

class RoleCategoryController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    { 
        return response()->json(RoleCategory::select([
            'id','name','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }

    //-------------------------------------------------------------------------

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {      
       return RoleCategory::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $category = RoleCategory::create($this->validateRequest($request));
        return response()->json("Successfully Added");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(RoleCategory $role_category)
    {
        return response()->json($role_category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RoleCategory $category)
    {
        $category->update($this->validateRequest($request));        
        return response()->json(['message'=>'Successfully Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(RoleCategory $category)
    {
        $category->delete();
        return response()->json(['message'=>'Successfully Updated']);
    }

    //-------------------------------------------------------------------------

    private function validateRequest($request)
    {
      return $this->validate($request, [
        'name' => 'required',
      ]);
    }
}
