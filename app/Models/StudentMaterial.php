<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudentMaterial extends Model
{
    protected $guarded = ['id'];

    public function material(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Material::class);
    }
}
