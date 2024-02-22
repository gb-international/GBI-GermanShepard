
This mail send to admin for itinerary query
Source :: {{ $data['source'] }},
destination :: {{ $data['destination'] }},
Tour type :: {{ $data['client_type'] }},
No of days :: {{ $data['no_of_days'] }},
No of rooms :: {{ $data['no_of_rooms'] }},
@if ($data['client_type'] == "school")
    No of boys = {{$data['no_of_boys']}},
    No of girls= {{$data['no_of_girls']}},
@endif
@if ($data['client_type'] == "family")
    No of adults = {{$data['passenger']}},
    No of childs = {{$data['childs']}},
    No of infants = {{$data['infants']}},
@endif
@if ($data['client_type'] == "company")
    No of adults = {{$data['passenger']}},
@endif


Phone Number :: {{ $data['phone_no'] }},
Email :: {{ $data['email'] }}
