<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Myuser;
use App\Models\Permission;
use Response;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::all();
        return response()->json($roles);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:roles,name',
        ]);

        $role = Role::create([
            'name' => $request->name,
        ]);

        return response()->json($role, 201);
    }

    public function show(Role $role)
    {
        return response()->json($role);
    }

    public function update(Request $request, Role $role)
    {
        $request->validate([
            'name' => 'required|unique:roles,name,'.$role->id,
        ]);

        $role->update([
            'name' => $request->name,
        ]);

        return response()->json($role);
    }

    public function destroy(Role $role)
    {
        $role->delete();

        return response()->json(null, 204);
    }
    public function toggleRoleToUser(Request $request)
    {
        $user = Myuser::findOrFail($request->user);
        $role = Role::findOrFail($request->role);
        $user->roles()->toggle($role);
        return response()->json(['message' => $user,$role]);
    }
    public function toggleRoleToPermission(Request $request)
    {
        $permission = Permission::findOrFail($request->permission);
        $role = Role::findOrFail($request->role);
        $role->permissions()->toggle($permission);
        return response()->json(['message' => $permission,$role->permissions]);
    }
    public function retrieveRoles($id)
    {
        $user = Myuser::findOrFail(1);
        $roles = $user->roles()->get();

        return response()->json(['roles' => $roles]);
    }
}

