<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Api\JournalController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//Route::post('/journals/{id}', [JournalController::class, 'store'])->middleware('json.response');

Route::any('{query}',
    function() { return redirect('/'); })
    ->where('query', '.*');
