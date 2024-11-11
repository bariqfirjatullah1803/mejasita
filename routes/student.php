<?php


use App\Http\Controllers\Student\DashboardController;
use Illuminate\Support\Facades\Route;


Route::prefix('/program')->name('program.')->group(function () {
    Route::get('/',[DashboardController::class,'index'])->name('index');
    Route::get('/show',[DashboardController::class,'show'])->name('show');
});
