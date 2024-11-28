<?php


use App\Http\Controllers\Program\DashboardController;
use Illuminate\Support\Facades\Route;


Route::prefix('/program')->name('program.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('/show/{slug}', [DashboardController::class, 'show'])->name('show');
});

Route::get('/',[DashboardController::class,'index'])->name('index');
