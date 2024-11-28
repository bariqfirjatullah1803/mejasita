<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMaterialRequest;
use App\Http\Requests\UpdateMaterialRequest;
use App\Models\Chapter;
use App\Models\Material;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class MaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Chapter $chapter): Response
    {
        $chapter->load('classroom:id,name');

        return Inertia::render('Dashboard/Material/Index', [
            'materials' => Material::query()->where('chapter_id', $chapter->id)->get(),
            'chapter' => $chapter,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Chapter $chapter): Response
    {
        $chapter->load('classroom:id,name');

        return Inertia::render('Dashboard/Material/Create', [
            'chapter' => $chapter,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMaterialRequest $request, Chapter $chapter): RedirectResponse
    {
        $validated = $request->validated();
        $validated['chapter_id'] = $chapter->id;
        $validated['classroom_id'] = $chapter->classroom_id;

        if ($validated['type'] === 'media' && $request->hasFile('media')) {
            $file = Storage::disk('public')->put('media/material', $request->file('media'), 'public');

            $validated['media'] = $file;
        }

        Material::query()->create($validated);

        return to_route('dashboard.material.index', $chapter->id);
    }

    /**
     * Display the specified resource.
     */
    public function show(Chapter $chapter, Material $material): Response
    {
        return Inertia::render('Dashboard/Material/Show', [
            'material' => $material,
            'chapter' => $chapter,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chapter $chapter, Material $material): Response
    {
        $chapter->load('classroom:id,name');

        return Inertia::render('Dashboard/Material/Edit', [
            'material' => $material,
            'chapter' => $chapter,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMaterialRequest $request, Chapter $chapter, Material $material): RedirectResponse
    {
        $validated = $request->validated();

        $material->update($validated);

        return to_route('dashboard.material.index', $chapter->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chapter $chapter, Material $material): RedirectResponse
    {
        $material->delete();

        return to_route('dashboard.material.index', $chapter->id);
    }
}
