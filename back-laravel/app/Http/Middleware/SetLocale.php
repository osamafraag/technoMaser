<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class SetLocale
{
    public function handle(Request $request, Closure $next)
    {
        if (in_array($request->header('accept-language'), config('app.locales'))) {
            App::setLocale($request->header('accept-language'));
        } else {
            App::setLocale(config('app.locale'));
        }

        return $next($request);
    }
}
