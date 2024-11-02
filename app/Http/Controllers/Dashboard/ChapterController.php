<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreChapterRequest;
use App\Http\Requests\UpdateChapterRequest;
use App\Models\Chapter;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ChapterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Dashboard/Chapters/Index', [
            'chapters' => Chapter::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Dashboard/Chapters/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreChapterRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        Chapter::query()->create($validated);

        return to_route('dashboard.chapter.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Chapter $chapter): Response
    {
        return Inertia::render('Dashboard/Chapters/Show', [
            'chapter' => $chapter
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chapter $chapter): Response
    {
        return Inertia::render('Dashboard/Chapters/Edit', [
            'chapter' => $chapter
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateChapterRequest $request, Chapter $chapter): RedirectResponse
    {
        $validated = $request->validated();

        $chapter->update($validated);

        return to_route('dashboard.chapter.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chapter $chapter): RedirectResponse
    {
        $chapter->delete();
        return to_route('dashboard.chapter.index');
    }
}
