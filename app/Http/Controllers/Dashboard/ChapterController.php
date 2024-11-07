<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreChapterRequest;
use App\Http\Requests\UpdateChapterRequest;
use App\Models\Chapter;
use App\Models\Classroom;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ChapterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Classroom $classroom): Response
    {
        return Inertia::render('Dashboard/Chapter/Index', [
            'chapters' => Chapter::query()->where('classroom_id', $classroom->id)->get(),
            'classroom' => $classroom
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Classroom $classroom): Response
    {
        return Inertia::render('Dashboard/Chapter/Create', [
            'classroom' => $classroom
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreChapterRequest $request,Classroom $classroom): RedirectResponse
    {
        $validated = $request->validated();
        $validated['classroom_id'] = $classroom->id;
        Chapter::query()->create($validated);

        return to_route('dashboard.chapter.index', $classroom->id);
    }

    /**
     * Display the specified resource.
     */
    public function show(Chapter $chapter,Classroom $classroom): Response
    {
        return Inertia::render('Dashboard/Chapter/Show', [
            'chapter' => $chapter
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Classroom $classroom, Chapter $chapter): Response
    {
        return Inertia::render('Dashboard/Chapter/Edit', [
            'chapter' => $chapter,
            'classroom' => $classroom
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateChapterRequest $request,Classroom $classroom, Chapter $chapter): RedirectResponse
    {
        $validated = $request->validated();
        $validated['classroom_id'] = $classroom->id;
        $chapter->update($validated);

        return to_route('dashboard.chapter.index',$classroom->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Classroom $classroom,Chapter $chapter): RedirectResponse
    {
        $chapter->delete();
        return to_route('dashboard.chapter.index',$classroom->id);
    }
}
