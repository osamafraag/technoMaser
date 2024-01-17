<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PermissionController;
use App\Models\Myuser;
use App\Models\Token;


Route::prefix('admin')->group(function () {
    Route::apiResource('users', UserController::class)->middleware('role:admin');
    Route::apiResource('roles', RoleController::class)->middleware('role:admin');
    Route::apiResource('permissions', PermissionController::class)->middleware('role:admin');
    Route::post('role', [RoleController::class, 'toggleRoleToUser'])->middleware('role:admin');
    Route::post('permission', [RoleController::class, 'toggleRoleToPermission'])->middleware('role:admin');
    Route::get('userRoles/{id}', [RoleController::class, 'retrieveRoles']);
    
});

Route::prefix('client')->group(function () {
    Route::apiResource('users', UserController::class)->only('index', 'show', 'update')->middleware('role:client');
});





Route::post('login', function (Request $request) {
    if  ($request->emailOrPhone){
        $user = Myuser::where('email', $request->emailOrPhone)->first();
        if  (!$user){
            $user = Myuser::where('phone', $request->emailOrPhone)->first();
        }
    }
    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json(['error' => 'Invalid credentials'], 401);
    }
    $token = $user->createToken('login-api')->plainTextToken;
    $tokenModel = new App\Models\Token();
    $tokenModel->token = $token;
    $tokenModel->myuser_id = $user->id;
    $tokenModel->save();
    $role = $user->roles->first();
    return response()->json(['token' => $token,'role'=>$role], 200);
})->name('login');

Route::post('logout', function (Request $request) {
    $token = Token::where('token', $request->header('Authorization'))->first();

    if (!$token) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    $token->delete();
    return response()->json(['logout' => 'logout successfully'], 200);
})->name('logout');

