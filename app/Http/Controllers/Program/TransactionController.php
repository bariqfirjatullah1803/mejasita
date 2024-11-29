<?php

namespace App\Http\Controllers\Program;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTransactionRequest;
use App\Http\Requests\UpdateTransactionRequest;
use App\Models\Classroom;
use App\Models\ClassroomCode;
use App\Models\StudentCourse;
use App\Models\Transaction;
use Illuminate\Http\RedirectResponse;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTransactionRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        $classroomCode = ClassroomCode::query()->where('code', $validated['code'])->first();
        $classroom = Classroom::query()->find($classroomCode->classroom_id);

        Transaction::query()->create([
            'classroom_code_id' => $classroomCode->id,
            'classroom_id' => $classroom->id,
            'user_id' => auth()->id()
        ]);

        StudentCourse::query()->create([
            'user_id' => auth()->id(),
            'classroom_id' => $classroom->id,
        ]);

        return to_route('program.show', $classroom->slug);
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTransactionRequest $request, Transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        //
    }
}
