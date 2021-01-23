<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\RegisterFormRequest;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ApiAuthController extends Controller
{
    public function register(RegisterFormRequest $request)
    {
//        $validator = Validator::make($request->all(), [
//            'name' => 'required|string|max:255',
//            'email' => 'required|string|email|max:255|unique:users',
//            'password' => 'required|string|min:6|confirmed',
//        ]);
//        if ($validator->fails())
//        {
//            return response(['errors'=>$validator->errors()->all()], 422);
//        }

//        $request['password'] = Hash::make($request['password']);
//        $request['remember_token'] = Str::random(10);
//        $user = User::create($request->toArray());
//        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
//        $response = ['token' => $token];
//
//        return response($response, 200);

        $roleId = $request['role_id'] ?? 0;

        $user = User::create(array_merge(
            $request->only('name', 'email'),
            ['role_id' => $roleId],
            ['password' => bcrypt($request->password)]
        ));

        $response = ['message' => 'You were successfully registered. Use your name and password to sign in.'];

        return response($response, 200);
    }

    public function login(Request $request)
    {
//        $validator = Validator::make($request->all(), [
//            'email' => 'required|string|email|max:255',
//            'password' => 'required|string|min:6|confirmed',
//        ]);
//        if ($validator->fails()) {
//            return response(['errors' => $validator->errors()->all()], 422);
//        }

//        $user = User::where('email', $request->email)->first();
//
//        if ($user) {
//            if (Hash::check($request->password, $user->password)) {
//                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
//                $response = ['token' => $token];
//                return response($response, 200);
//            } else {
//                $response = ["message" => "Password mismatch"];
//
//                return response($response, 422);
//            }
//        } else {
//            $response = ["message" => 'User does not exist'];
//
//            return response($response, 422);
//        }

        $credentials = $request->only('name', 'password');

        if (!Auth::attempt($credentials)) {
            $response = [
                'message' => 'You cannot sign with those credentials',
                'errors' => 'Unauthorised'
            ];
            return response($response, 401);
        }

        $token = Auth::user()->createToken('Laravel Password Grant Client');
        $token->token->expires_at = $request->remember_me ?
            Carbon::now()->addMonth() :
            Carbon::now()->addDay();

        $token->token->save();

        $response = [
            'token_type' => 'Bearer',
            'token' => $token->accessToken,
            'expires_at' => Carbon::parse($token->token->expires_at)->toDateTimeString()
        ];

        return response($response, 200);
    }

    public function logout(RegisterFormRequest $request)
    {
        $token = $request->user()->token();
        $token->revoke();
        $response = ['message' => 'You have been successfully logged out!'];

        return response($response, 200);
    }
}
