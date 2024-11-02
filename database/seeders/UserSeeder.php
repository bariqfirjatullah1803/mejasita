<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::query()->create([
            'name' => 'Admin',
            'email' => 'admin@local.com',
            'password' => Hash::make('admin123123'),
            'email_verified_at' => now(),
        ]);
        $admin->assignRole('admin');
        $mentor = User::query()->create([
            'name' => 'mentor',
            'email' => 'mentor@local.com',
            'password' => Hash::make('mentor123123'),
            'email_verified_at' => now(),
        ])->assignRole('mentor');
        $mentor->assignRole('mentor');
    }
}
