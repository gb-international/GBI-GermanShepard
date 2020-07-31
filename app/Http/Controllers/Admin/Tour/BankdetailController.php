<?php
/* created by : Ajay yadav 
Purpose : Manage bankdetail of gbi  */
namespace App\Http\Controllers\Admin\Tour;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Model\Tour\Bankdetail;
use Auth;

class BankdetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Bankdetail::get();
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $this->validateBankdetail($request);
        $data['user_id'] = 26;
        Bankdetail::create($data);
        return response()->json(['Message'=> 'Successfully Added...']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Bankdetail  $bankdetail
     * @return \Illuminate\Http\Response
     */
    public function show(Bankdetail $bankdetail)
    {
        return $bankdetail;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bankdetail  $bankdetail
     * @return \Illuminate\Http\Response
     */
    public function edit(Bankdetail $bankdetail)
    {
        return response()->json($bankdetail);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bankdetail  $bankdetail
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bankdetail $bankdetail)
    {
        
        $bankdetail->update($this->validateBankdetail($request));
        return response()->json(['message'=>'Successfully Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bankdetail $bankdetail)
    {
        $bankdetail->delete();
        return response()->json('successfully deleted');
    }

    // Validate Escort
    public function validateBankdetail($request)
    {
      return $this->validate($request, [
            'name' => 'required',
            'bank_name' => 'required',
            'account_number' => 'required',
            'account_type' => 'required',
            'ifsc_code' => 'required',
      ]);
    }
}
