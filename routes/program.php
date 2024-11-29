<?php


use App\Http\Controllers\Program\DashboardController;
use App\Http\Controllers\Program\TransactionController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth'])->prefix('/program')->name('program.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('/show/{slug}', [DashboardController::class, 'show'])->name('show');
    Route::post('/transaction', [TransactionController::class, 'store'])->name('transaction.store');
});

Route::get('/', [DashboardController::class, 'index'])->name('index')->middleware('auth');
