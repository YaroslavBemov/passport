<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Api\Auth\ApiAuthController;
use \App\Http\Controllers\Api\ArticleController;

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

        Route::group([
            'prefix' => 'programs',
            'as' => 'programs::'
        ], function () {
            //TODO Program routes
            //Route::get('/', [ArticleController::class, 'index'])->name('index');
        });
    });
});
