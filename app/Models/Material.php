<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Material extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = ['id'];

    protected static function boot(): void
    {
        parent::boot();

        static::creating(function ($material) {
            $slug = Str::slug($material->title);

            $originalSlug = $slug;
            $count = 1;
            while (self::query()->withTrashed()->where('slug', $slug)->exists()) {
                $slug = $originalSlug . '-' . $count;
                $count++;
            }

            $material->slug = $slug;
            $material->material_order = self::query()->where('chapter_id', $material->chapter_id)->max('material_order') + 1;

        });

        static::deleting(function ($material) {
            self::query()->where('chapter_id', $material->chapter_id)
                ->where('material_order', '>', $material->material_order)
                ->decrement('material_order');
        });
        static::updating(function ($material) {
            if ($material->isDirty('title')) {
                $slug = Str::slug($material->title);

                $originalSlug = $slug;
                $count = 1;
                while (self::query()->withTrashed()->where('slug', $slug)->where('id', '!=', $material->id)->exists()) {
                    $slug = $originalSlug . '-' . $count;
                    $count++;
                }

                $material->slug = $slug;
            }

            if ($material->isDirty('material_order')) {
                $oldOrder = $material->getOriginal('material_order');
                $newOrder = $material->material_order;

                if ($oldOrder > $newOrder) {
                    self::query()->where('chapter_id', $material->chapter_id)
                        ->whereBetween('material_order', [$newOrder, $oldOrder - 1])
                        ->increment('material_order');
                } else {
                    self::query()->where('chapter_id', $material->chapter_id)
                        ->whereBetween('material_order', [$oldOrder + 1, $newOrder])
                        ->decrement('material_order');
                }
            }
        });
    }
}
