<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $guarded = ['id'];

    protected static function boot(): void
    {
        parent::boot();

        static::creating(function ($transaction) {
            $invoice = 'INV-' . strtoupper(uniqid());

            $transaction->invoice = $invoice;
        });
    }
}
