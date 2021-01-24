<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Api\Auth\ApiAuthController;
use \App\Http\Controllers\Api\ProgramController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group([
    'middleware' => ['cors', 'json.response']
],
    function () {
    Route::post('/login', [ApiAuthController::class, 'login'])->name('login.api');

    Route::group([
        'middleware' => 'auth:api'
    ],
        function () {
        Route::post('/register', [ApiAuthController::class, 'register'])->name('register.api')
            ->middleware('api.superAdmin');
        Route::post('/logout', [ApiAuthController::class, 'logout'])->name('logout.api');

//TODO Program routes
        Route::group([
            'prefix' => 'programs',
            'as' => 'programs::'
        ], function () {

            Route::get('/', [ProgramController::class, 'index'])->name('index');
        });
//TODO Journal routes
            Route::group([
                'prefix' => 'journals',
                'as' => 'journals::'
            ], function () {

            });
    });
});
