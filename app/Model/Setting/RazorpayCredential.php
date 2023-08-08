<?php
namespace App\Model\Setting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RazorpayCredential extends Model
{
    use HasFactory;
    protected $table = 'razorpay_credentials';
    protected $fillable = [
        'id',
        'key_id',
        'secret_id',
        'created_at',
        'updated_at',
    ];

}
