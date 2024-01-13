<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('role_myuser', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('myuser_id');
            $table->unsignedBigInteger('role_id');
            $table->timestamps();
        
            $table->foreign('myuser_id')->references('id')->on('myusers')->onDelete('cascade');
            $table->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('role_myuser');
    }
};