<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Myuser extends Authenticatable
{
    use HasFactory,HasApiTokens;
    protected $fillable = [
        'name', 'email', 'phone', 'photo', 'password'
    ];

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
    protected $table = "myusers";
}
