<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreQuizRequest;
use App\Http\Requests\UpdateQuizRequest;
use App\Models\Quiz;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Dashboard/Quiz/Index', [
            'quizzes' => Quiz::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Dashboard/Quiz/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreQuizRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        Quiz::query()->create($validated);

        return to_route('dashboard.quiz.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Quiz $quiz): Response
    {
        return Inertia::render('Dashboard/Quiz/Show', [
            'quiz' => $quiz
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Quiz $quiz): Response
    {
        return Inertia::render('Dashboard/Quiz/Edit', [
            'quiz' => $quiz
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateQuizRequest $request, Quiz $quiz): RedirectResponse
    {
        $validated = $request->validated();

        $quiz->update($validated);

        return to_route('dashboard.quiz.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Quiz $quiz): RedirectResponse
    {
        $quiz->delete();

        return to_route('dashboard.quiz.index');
    }
}
