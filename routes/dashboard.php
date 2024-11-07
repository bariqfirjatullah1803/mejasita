<?php

use App\Http\Controllers\Dashboard\AnswerController;
use App\Http\Controllers\Dashboard\CategoryController;
use App\Http\Controllers\Dashboard\ChapterController;
use App\Http\Controllers\Dashboard\ClassroomController;
use App\Http\Controllers\Dashboard\MaterialController;
use App\Http\Controllers\Dashboard\QuizController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->prefix('dashboard')->name('dashboard.')->group(function () {
    Route::resource('category', CategoryController::class);
    Route::resource('classroom', ClassroomController::class);
    Route::resource('{classroom}/chapter', ChapterController::class);
    Route::resource('{chapter}/material', MaterialController::class);
    Route::resource('{material}/quiz', QuizController::class);
    Route::resource('{quiz}/answer', AnswerController::class);
});
