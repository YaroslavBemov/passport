<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\JournalsRequest;
use App\Models\Journal;
use App\Models\Program;
use Illuminate\Http\Request;

class JournalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param JournalsRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $id = $request->post('id');

        $journal = Journal::find($id);
        $journal->fill($request->only('chip', 'remark'))->save();

//        $id = $request->post('id');
//        $news = $id ? News::find($id) : new News();
//        $news->fill($request->all())->save();
    }

    /**
     * Display the specified resource.
     *
     * @param Program $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Journal::where('program_id', $id)->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Journal  $journal
     * @return \Illuminate\Http\Response
     */
    public function edit(Journal $journal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Journal  $journal
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Journal $journal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Journal  $journal
     * @return \Illuminate\Http\Response
     */
    public function destroy(Journal $journal)
    {
        //
    }
}
//TODO Journal controller
