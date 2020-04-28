<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Admin home controller 

*/
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Auth;
use Session;
use App\Model\User\UserMoreInfo;
use App\User;
use App\Model\Tour\Tour;
use App\Model\Itinerary\Itinerary;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {         
        // $role = Role::create(['name' => 'account']);
        
        // return $permission = Permission::create(['name' => 'itinerary salesdps']);
        // $role = Role::findById(3);
        // $permission = Permission::findById(24);
        // $role->givePermissionTo($permission);
        
        //auth()->user()->givePermissionTo('edit posts');
        // auth()->user()->assignRole('salesdps');
        
         // return auth()->user()->getDirectPermissions();
         //return auth()->user()->getPermissionsViaRoles();
         // return User::role('writer')->get();
         // return User::permission('write posts')->get();
         // return auth()->user()->revokePermissionTo('edit posts');
         // return auth()->user()->removeRole('writer');
         // return auth()->user()->getAllPermissionsAttribute();

        return view('admin.adminmaster');
    }
}
