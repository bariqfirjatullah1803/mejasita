<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Chapter extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = ['id'];

    protected static function boot(): void
    {
        parent::boot();

        static::creating(function ($chapter) {
            $slug = Str::slug($chapter->title);

            $originalSlug = $slug;
            $count = 1;
            while (self::query()->withTrashed()->where('slug', $slug)->exists()) {
                $slug = $originalSlug . '-' . $count;
                $count++;
            }

            $chapter->slug = $slug;
            $chapter->chapter_order = self::query()->where('classroom_id', $chapter->classroom_id)->max('chapter_order') + 1;

        });

        static::deleting(function ($chapter) {
            self::query()->where('classroom_id', $chapter->classroom_id)
                ->where('chapter_order', '>', $chapter->chapter_order)
                ->decrement('chapter_order');
        });
        static::updating(function ($chapter) {
            if ($chapter->isDirty('title')) {
                $slug = Str::slug($chapter->title);

                $originalSlug = $slug;
                $count = 1;
                while (self::query()->withTrashed()->where('slug', $slug)->where('id', '!=', $chapter->id)->exists()) {
                    $slug = $originalSlug . '-' . $count;
                    $count++;
                }

                $chapter->slug = $slug;
            }

            if ($chapter->isDirty('chapter_order')) {
                $oldOrder = $chapter->getOriginal('chapter_order');
                $newOrder = $chapter->chapter_order;

                if ($oldOrder > $newOrder) {
                    self::query()->where('classroom_id', $chapter->classroom_id)
                        ->whereBetween('chapter_order', [$newOrder, $oldOrder - 1])
                        ->increment('chapter_order');
                } else {
                    self::query()->where('classroom_id', $chapter->classroom_id)
                        ->whereBetween('chapter_order', [$oldOrder + 1, $newOrder])
                        ->decrement('chapter_order');
                }
            }
        });
    }
}
