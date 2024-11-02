<?php

use App\Http\Controllers\Dashboard\AnswerController;
use App\Http\Controllers\Dashboard\CategoryController;
use App\Http\Controllers\Dashboard\ChapterController;
use App\Http\Controllers\Dashboard\ClassroomController;
use App\Http\Controllers\Dashboard\MaterialController;
use App\Http\Controllers\Dashboard\QuizController;
use Illuminate\Support\Facades\Route;

Route::prefix('dashboard')->name('dashboard')->group(function () {
    Route::resource('category', CategoryController::class);
    Route::resource('classroom', ClassroomController::class);
    Route::resource('chapter', ChapterController::class);
    Route::resource('material', MaterialController::class);
    Route::resource('quiz', QuizController::class);
    Route::resource('answer', AnswerController::class);
});
