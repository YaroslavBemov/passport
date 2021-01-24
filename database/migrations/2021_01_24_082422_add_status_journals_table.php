<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStatusJournalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('journals', function (Blueprint $table) {
            $table->unsignedBigInteger('status_id')->default(1);
            $table->foreign('status_id')
                ->references('id')
                ->on('statuses')
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
        Schema::table('journals', function (Blueprint $table) {
            $table->dropColumn('status_id');
        });
    }
}
