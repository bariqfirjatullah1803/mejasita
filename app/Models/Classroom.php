<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Classroom extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];

    protected static function boot(): void
    {
        parent::boot();

        static::creating(function($item) {
            $slug = Str::slug($item->name);

            $originalSlug = $slug;
            $count = 1;
            while (self::query()->withTrashed()->where('slug', $slug)->exists()) {
                $slug = $originalSlug . '-' . $count;
                $count++;
            }

            $item->slug = $slug;
        });
        static::updating(function ($item) {
            if ($item->isDirty('name')) {
                $slug = Str::slug($item->name);

                $originalSlug = $slug;
                $count = 1;
                while (self::query()->withTrashed()->where('slug', $slug)->where('id', '!=', $item->id)->exists()) {
                    $slug = $originalSlug . '-' . $count;
                    $count++;
                }

                $item->slug = $slug;
            }
        });
    }

    public function categories(): BelongsToMany{
        return $this->belongsToMany(Category::class,'classroom_categories','classroom_id','category_id');
    }
}
