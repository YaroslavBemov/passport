<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Journal extends Model
{
    use HasFactory;

    protected $fillable = [
        'program_id',
        'chip',
        'remark',
        'creator_id',
        'fixer_id'
    ];

    public function program() {
        return $this->belongsTo(Program::class);
    }

    public function user() {
        return $this->belongsToMany(User::class);
    }
}
