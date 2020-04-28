@component('mail::message')
# Introduction

<h3>Hi,{{ $data['name'] }}</h3>
<p>Reset your GB International password by clicking on this link : 
 <a href="{{ $data['link'] }}">{{ $data['link'] }}</a>
</p>



Thanks,<br>
{{ config('app.name') }}
@endcomponent
