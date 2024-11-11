<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Student/Dashboard/Index', []);
    }

    public function show()
    {
        return Inertia::render('Student/Dashboard/Show', []);
    }
}
