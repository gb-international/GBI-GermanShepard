<?php

use Illuminate\Database\Seeder;
use App\City;
class CityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $html_city = "  
		  <item>Agartala,India</item>
		  <item>Agra,India</item>
		  <item>Agumbe,India</item>
		  <item>Ahmedabad,India</item>
		  <item>Aizawl,India</item>
		  <item>Ajmer,India</item>
		  <item>Alappuzha Beach,India</item>
		  <item>Allahabad,India</item>
		  <item>Alleppey,India</item>
		  <item>Almora,India</item>
		  <item>Amarnath,India</item>
		  <item>Amritsar,India</item>
		  <item>Anantagir,India</item>
		  <item>Andaman and Nicobar Islands,India</item>
		  <item>Araku valley,India</item>
		  <item>Aurangabad,India</item>
		  <item>Ayodhya,India</item>
		  <item>Badrinath,India</item>
		  <item>Bangalore,India</item>
		  <item>Baroda,India</item>
		  <item>Bastar,India</item>
		  <item>Bhagalpur,India</item>
		  <item>Bhilai,India</item>
		  <item>Bhimtal,India</item>
		  <item>Bhopal,India</item>
		  <item>Bhubaneswar,India</item>
		  <item>Bhuj,India</item>
		  <item>Bidar,India</item>
		  <item>Bilaspur,India</item>
		  <item>Bodh Gaya,India</item>
		  <item>Calicut,India</item>
		  <item>Chail,India</item>
		  <item>Chamba,India</item>
		  <item>Chandigarh,India</item>
		  <item>Chennai,India</item>
		  <item>Chennai Beaches,India</item>
		  <item>Cherai,India</item>
		  <item>Cherrapunji,India</item>
		  <item>Chidambaram,India</item>
		  <item>Chikhaldara Hills,India</item>
		  <item>Chopta,India</item>
		  <item>Coimbatore,India</item>
		  <item>Coonoor,India</item>
		  <item>Coorg,India</item>
		  <item>Corbett National Park,India</item>
		  <item>Cotigao Wild Life Sanctuary,India</item>
		  <item>Cuttack,India</item>
		  <item>Dadra and Nagar Haveli,India</item>
		  <item>Dalhousie,India</item>
		  <item>Daman and Diu,India</item>
		  <item>Darjeeling,India</item>
		  <item>Dehradun,India</item>
		  <item>Delhi,India</item>
		  <item>Devikulam,India</item>
		  <item>Dhanaulti,India</item>
		  <item>Dharamashala,India</item>
		  <item>Dindigul,India</item>
		  <item>Dudhwa National Park,India</item>
		  <item>Dwaraka,India</item>
		  <item>Faridabad,India</item>
		  <item>Gandhinagar,India</item>
		  <item>Gangotri,India</item>
		  <item>Gangtok,India</item>
		  <item>Gir Wildlife Sanctuary,India</item>
		  <item>Goa,India</item>
		  <item>Great Himalayan National Park,India</item>
		  <item>Gulmarg,India</item>
		  <item>Gurgaon,India</item>
		  <item>Guruvayoor,India</item>
		  <item>Guwahati,India</item>
		  <item>Gwalior,India</item>
		  <item>Hampi,India</item>
		  <item>Haridwar,India</item>
		  <item>Hogenakkal,India</item>
		  <item>Horsley Hills,India</item>
		  <item>Hyderabad,India</item>
		  <item>Idukki,India</item>
		  <item>Imphal,India</item>
		  <item>Indore,India</item>
		  <item>Itangar,India</item>
		  <item>Jabalpur,India</item>
		  <item>Jaipur,India</item>
		  <item>Jaisalmer,India</item>
		  <item>Jalandhar,India</item>
		  <item>Jammu,India</item>
		  <item>Jamshedpur,India</item>
		  <item>Jodhpur,India</item>
		  <item>Kanchipuram,India</item>
		  <item>Kanha National Park,India</item>
		  <item>Kanpur,India</item>
		  <item>Kanyakumari,India</item>
		  <item>Kargil,India</item>
		  <item>Karwar,India</item>
		  <item>Kausani,India</item>
		  <item>Kedarnath,India</item>
		  <item>Keoladeoghana National Park,India</item>
		  <item>Khajuraho,India</item>
		  <item>Kochi,India</item>
		  <item>Kodaikanal,India</item>
		  <item>Kolkata,India</item>
		  <item>Kollam,India</item>
		  <item>Konark,India</item>
		  <item>Kotagiri,India</item>
		  <item>Kottakkal and Ayurveda,India</item>
		  <item>Kovalam,India</item>
		  <item>Kovalam and Ayurveda,India</item>
		  <item>Kudremukh,India</item>
		  <item>Kullu,India</item>
		  <item>Kumaon,India</item>
		  <item>Kumarakom,India</item>
		  <item>Kumarakom and Ayurveda,India</item>
		  <item>Kumarakom Bird Sanctuary,India</item>
		  <item>Kurukshetra,India</item>
		  <item>Lakshadweep,India</item>
		  <item>Lucknow,India</item>
		  <item>Ludhiana,India</item>
		  <item>Madurai,India</item>
		  <item>Mahabalipuram,India</item>
		  <item>Malpe Beach,India</item>
		  <item>Manas National Park,India</item>
		  <item>Mangalore,India</item>
		  <item>Maravanthe Beach,India</item>
		  <item>Margoa,India</item>
		  <item>Mount Abu,India</item>
		  <item>Mumbai,India</item>
		  <item>Munnar,India</item>
		  <item>Mussoorie,India</item>
		  <item>Mysore,India</item>
		  <item>Nahsik,India</item>
		  <item>Nalanda,India</item>
		  <item>Nanda Devi National Park,India</item>
		  <item>Nandi Hills,India</item>
		  <item>Netravali Wild Life Sanctuary,India</item>
		  <item>Ooty,India</item>
		  <item>Orchha,India</item>
		  <item>Pahalgam,India</item>
		  <item>Palakkad,India</item>
		  <item>Panchgani,India</item>
		  <item>Patna,India</item>
		  <item>Patnitop,India</item>
		  <item>Pattadakkal,India</item>
		  <item>Periyar Wildlife Sanctuary,India</item>
		  <item>Pithoragarh,India</item>
		  <item>Pondicherry,India</item>
		  <item>Pune,India</item>
		  <item>Puri,India</item>
		  <item>Pushkar,India</item>
		  <item>Raipur,India</item>
		  <item>Rajaji National Park,India</item>
		  <item>Rajgir,India</item>
		  <item>Rameshwaram,India</item>
		  <item>Ranchi,India</item>
		  <item>Ranganthittu Bird Sanctuary,India</item>
		  <item>Ranikhet,India</item>
		  <item>Ranthambore,India</item>
		  <item>Rishikesh,India</item>
		  <item>Rourkela,India</item>
		  <item>Sanchi,India</item>
		  <item>Saputara,India</item>
		  <item>Sariska Wildlife Sanctuary,India</item>
		  <item>Shillong,India</item>
		  <item>Shimla,India</item>
		  <item>Sohna_Hills,India</item>
		  <item>Srinagar,India</item>
		  <item>Sunderbans,India</item>
		  <item>Surat,India</item>
		  <item>Tezpur,India</item>
		  <item>Thanjavur,India</item>
		  <item>Thiruvananthapuram,India</item>
		  <item>Thrissur,India</item>
		  <item>Tirunelveli,India</item>
		  <item>Tirupati,India</item>
		  <item>Trichy,India</item>
		  <item>Udaipur,India</item>
		  <item>Ujjain,India</item>
		  <item>Vaishali,India</item>
		  <item>Valley of Flowers,India</item>
		  <item>Varanasi,India</item>
		  <item>Varkala and Ayurveda,India</item>
		  <item>Vijayawada,India</item>
		  <item>Vishakhapatnam,India</item>
		  <item>Vrindhavan,India</item>
		  <item>Warangal,India</item>
		  <item>Wayanad,India</item>
		  <item>Wayanad Wildlife Sanctuary,India</item>
		  <item>Yercaud,India</item>
		  <item>Zanskar,India</item>";
		//echo strip_tags($html_city);

		$html_city = str_replace("</item>",",,",$html_city);
		$html_city = strip_tags($html_city);
		$html_array = explode(",,",$html_city);
		foreach ($html_array as $city) {
			if($city != NULL){
				City::create(['name'=>$city]);
			}
		}
		// UPDATE `cities` SET `name` = REPLACE(`name`, '\n', '')
    }
}
