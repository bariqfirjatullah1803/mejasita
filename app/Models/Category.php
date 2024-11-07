<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    protected static function boot(): void
    {
        parent::boot();

        static::creating(function($item) {
            $slug = Str::slug($item->name);

            $originalSlug = $slug;
            $count = 1;
            while (self::query()->where('slug', $slug)->exists()) {
                $slug = $originalSlug . '-' . $count;
                $count++;
            }

            $item->slug = $slug;
        });
    }
}
