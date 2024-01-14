<?php

namespace App\Http\Controllers;
use App\Models\Myuser;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        return Myuser::all();
    }
    public function store(Request $request)
    {
        $user = Myuser::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'photo' => $request->photo,
            'password' => bcrypt($request->password)
        ]);

        return response()->json($user, 201);
    }
    public function show(Myuser $user)
    {
        return $user;
    }
    public function update(Request $request, Myuser $user)
    {
        if  ($request->user->id != 1 && $user->id == 1){
            return response()->json('notAllowed');
        }
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'photo' => $request->photo,
            'password' => bcrypt($request->password)
        ]);

        return response()->json($user);
    }
    public function destroy(Myuser $user)
    {
        if  ($user->id == 1){
            return response()->json('notAllowed');
        }
        $user->delete();

        return response()->json(null, 204);
    }
}
