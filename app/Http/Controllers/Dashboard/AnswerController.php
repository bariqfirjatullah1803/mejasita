<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAnswerRequest;
use App\Http\Requests\UpdateAnswerRequest;
use App\Models\Answer;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class AnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Dashboard/Answers/Index', [
            'answers' => Answer::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Dashboard/Answers/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAnswerRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        Answer::query()->create($validated);

        return to_route('dashboard.answers.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Answer $answer): Response
    {
        return Inertia::render('Dashboard/Answers/Show', [
            'answer' => $answer
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Answer $answer): Response
    {
        return Inertia::render('Dashboard/Answers/Edit', [
            'answer' => $answer
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAnswerRequest $request, Answer $answer): RedirectResponse
    {
        $validated = $request->validated();

        $answer->update($validated);

        return to_route('dashboard.answers.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Answer $answer): RedirectResponse
    {
        $answer->delete();

        return to_route('dashboard.answers.index');
    }
}
