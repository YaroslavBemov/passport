<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJournalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('journals', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('program_id');
            $table->string('chip');
            $table->string('remark');
            $table->unsignedBigInteger('creator_id');
            $table->unsignedBigInteger('fixer_id');
            $table->timestamps();
            $table->foreign('program_id')
                ->references('id')
                ->on('programs')
                ->onUpdate('cascade')
                ->onDelete('restrict');
            $table->foreign('creator_id')
                ->references('id')
                ->on('users')
                ->onUpdate('cascade')
                ->onDelete('restrict');
            $table->foreign('fixer_id')
                ->references('id')
                ->on('users')
                ->onUpdate('cascade')
                ->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('journals');
    }
}
