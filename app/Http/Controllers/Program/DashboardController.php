<?php

namespace App\Http\Controllers\Program;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use App\Models\Material;
use App\Models\StudentMaterial;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        if (auth()->user()) {
            $classrooms = Classroom::query()->whereHas('studentCourses' , function ($query) {
                $query->where('user_id', auth()->id());
            })->get();
        }else{
            $classrooms = [];
        }
        return Inertia::render('Program/Dashboard/Index', [
            'classrooms' => $classrooms
        ]);
    }

    public function show(Request $request, $slug): Response
    {
        $classroom = Classroom::query()->where('slug', $slug)
            ->with(['chapters' => function ($query) {
                $query->with(['materials' => function ($query) {
                    $query->orderBy('material_order');
                }])->orderBy('chapter_order');
            }])
            ->firstOrFail();

        $materialId = $request->query('material_id');


        if (!$materialId) {
            $material = StudentMaterial::query()->join('materials', 'materials.id', '=', 'student_materials.material_id')->join('chapters', 'materials.chapter_id', '=', 'chapters.id')->where('user_id', auth()->id())->where('chapters.classroom_id', $classroom->id)->select('materials.*')->first();


            if (!$material) {
                $material = Material::query()->join('chapters', 'chapters.id', '=', 'materials.chapter_id')->where('chapters.classroom_id', $classroom->id)->select('materials.*')->orderBy('material_order')->first();
            }
        } else {
            $material = Material::query()->where('id', $materialId)->first();
        }

        return Inertia::render('Program/Dashboard/Show', [
            'classroom' => $classroom,
            'material' => $material,
        ]);
    }
}
