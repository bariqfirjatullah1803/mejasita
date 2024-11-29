<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreClassroomCodeRequest;
use App\Http\Requests\UpdateClassroomCodeRequest;
use App\Models\Classroom;
use App\Models\ClassroomCode;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;
use Inertia\ResponseFactory;

class ClassroomCodeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Classroom $classroom): Response
    {
        $codes = ClassroomCode::query()->where('classroom_id', $classroom->id)->paginate(10);
        return inertia("Dashboard/Classroom/Code/Index", [
            "classroom" => $classroom,
            "codes" => $codes,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Classroom $classroom): Response
    {
        return inertia("Dashboard/Classroom/Code/Create", [
            "classroom" => $classroom,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClassroomCodeRequest $request, Classroom $classroom): RedirectResponse
    {
        $validated = $request->validated();
        $validated['classroom_id'] = $classroom->id;

        ClassroomCode::query()->create($validated);

        return to_route('dashboard.code.index', [
            'classroom' => $classroom->id,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(ClassroomCode $code, Classroom $classroom)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Classroom $classroom, ClassroomCode $code): Response|ResponseFactory
    {
        return inertia("Dashboard/Classroom/Code/Edit", [
            "classroom" => $classroom,
            "code" => $code,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClassroomCodeRequest $request, Classroom $classroom, ClassroomCode $code): RedirectResponse
    {
        $validated = $request->validated();

        $code->update($validated);

        return to_route('dashboard.code.index', [
            'classroom' => $classroom->id,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Classroom $classroom, ClassroomCode $code)
    {
        $code->delete();

        return to_route('dashboard.code.index', [
            'classroom' => $classroom->id,
        ]);
    }
}
