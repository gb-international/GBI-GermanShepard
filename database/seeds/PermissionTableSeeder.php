<?php

use Illuminate\Database\Seeder;
use App\Model\RoleAndPermission\Permissions as Permission;
use App\Model\RoleAndPermission\Roles as Role;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permission_ids = [];
        // iterate though all routes
        foreach(\Route::getRoutes()->getRoutes() as $key=>$route){
            if(in_array('role.auth',$route->gatherMiddleware())){
                // get route action
                $action = $route->getActionname();
                // separating controller and method
                $_action = explode('@',$action);
                 
                $controller = $_action[0];
                $method = end($_action);
                $separater ='';
                if(strpos($controller, "Admin") != false){
                     $separater ="Admin";
                }else{
                     $separater ="Front";
                }       
                $name = $method.trim(strtolower(str_replace("Controller","",preg_replace('/[\W\s\/]+/', '-', explode($separater,$controller)[1]))));

                // check if this permission is already exists
                $permission_check = Permission::where(
                         ['controller'=>$controller,'method'=>$method,'name'=>$name]
                     )->first();
                if(!$permission_check){
                    $extract_name = trim(strtolower(str_replace("Controller","",preg_replace('/[\W\s\/]+/', '-', explode($separater,$controller)[1]))));
                    $name = $method.$extract_name;
                    $key_name = explode("-",$extract_name);
                    $key = end($key_name);
                    $permission = Permission::firstOrCreate(['controller'=>$controller,
                                                      'method'=>$method,
                                                      'name'=>$name,
                                                      'key'=>$key
                                                    ]);
                    
                    // add stored permission id in array
                    $permission_ids[] = $permission->id;
                 }
            }     
                 
        }

        // find admin role.
        $admin_role = Role::whereHas('roleCategory',function($query){
             $query->where('name','SuperAdmin'); 
        })->first();
        // atache all permissions to admin role
        $admin_role->permissions()->attach($permission_ids);
    }
}
