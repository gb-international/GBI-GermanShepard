<?php

namespace App\Http\Middleware;

use Closure;
use App\Model\RoleAndPermission\Roles as Role;
use App\User;
use Auth;

class RolesAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $userid = unserialize(base64_decode($request->header('authorization')));
        $user = User::where('id',$userid)->first();
        if($user){
            $role_id = $user->user_role;
            // Get child role of user
            $rolePermissions = collect([]); 
            $childrole = User::distinct()->select('user_role')
                                         ->where('parent_role_id',$role_id)
                                         ->get();
            foreach($childrole as $user){
                $rolePermissions = $rolePermissions->merge($user->role->permissions);   
            }
            // get user role permissions
            $role = Role::findOrFail($role_id);
            $permissions = $rolePermissions->merge($role->permissions);
            // get requested action
            $actionName = class_basename($request->route()->getActionname());
            // check if requested action is in permissions list
            foreach ($permissions as $permission)
            {
             $_namespaces_chunks = explode('\\', $permission->controller);
             $controller = end($_namespaces_chunks);
             if ($actionName == $controller . '@' . $permission->method)
             {
               // authorized request
               return $next($request);
             }
            }
        }
        //none authorized request
        return response('Unauthorized Action', 403);
        //return $next($request);
    }
}
