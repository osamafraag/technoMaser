<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Token;
use App\Models\Myuser;
use Illuminate\Support\Facades\Auth;

class CheckRole
{
    public function handle(Request $request, Closure $next, ...$roles)
    {
        $token = $request->header('Authorization');

        if (!$token) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $tokenModel = Token::where('token', $token)->first();

        if (!$tokenModel) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $user = Myuser::where('id', $tokenModel->myuser_id)->first();

        $request->merge(['user' => $user]);
        if (!in_array($request->user->roles->first()->name, $roles)) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        return $next($request);
    }
}