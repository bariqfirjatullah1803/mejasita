<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreClassroomRequest;
use App\Http\Requests\UpdateClassroomRequest;
use App\Models\Category;
use App\Models\Classroom;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ClassroomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $classrooms = Classroom::query()->with('categories')->paginate(10);
        return Inertia::render('Dashboard/Classroom/Index', [
            'classrooms' => $classrooms,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $categories = Category::query()->orderBy('name')->get();
        return Inertia::render('Dashboard/Classroom/Create', [
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClassroomRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        $categoryId = $validated['category'];
        unset($validated['category']);

        $classroom = Classroom::query()->create($validated);
        $classroom->categories()->attach($categoryId);

        return to_route('dashboard.classroom.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Classroom $classroom): Response
    {
        return Inertia::render('Dashboard/Classroom/Show', [
            'classroom' => $classroom
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Classroom $classroom): Response
    {
        return Inertia::render('Dashboard/Classroom/Edit', [
            'classroom' => $classroom,
            'categories' => Category::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClassroomRequest $request, Classroom $classroom): RedirectResponse
    {
        $validated = $request->validated();

        $categoryId = $validated['category'];
        unset($validated['category']);

        $classroom->update($validated);
        $classroom->categories()->sync($categoryId);

        return to_route('dashboard.classroom.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Classroom $classroom): RedirectResponse
    {
        $classroom->delete();

        return to_route('dashboard.classroom.index');
    }
}
