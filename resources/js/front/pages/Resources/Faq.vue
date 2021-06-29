<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div id="faq">

    <div class="faq_banner text_on_image banner_bg explore_bg_img">
      <div class="content">
        <div class="row">
          <div class="col-sm-8 mb-3">
            <h1 class="heading mb-3">Frequently Asked Questions (FAQ)</h1>
            <div class="input-group p-2 bg-skyblue">
              <input
                type="text"
                class="form-control"
                v-model="searchQuery"
                placeholder="Got a question? Shoot at us"
                title="Type in a name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text_on_image">
      <section class="banner-block faq_banner"></section>
      <div class="content"></div>
    </div>
    <!-- Start how we work -->
    <section class="faq-question">
      <heading class="text-center mb-3" text="Confused? Need not worry, we have answers to your queries." />
      <div class="container">
        <div class="mb-2" v-for="(data,i) in resultQuery" :key="i">
          <div class="row mt-1">
            <div class="col-1 text-right">
              <b>Que. </b>
            </div>
            <div class="col-11">
              {{ data.question }}
            </div>
          </div>
          
          <div class="row mt-1">
            <div class="col-1 text-right">
              <b>Ans.</b>
            </div>
            <div class="col-11">
              <div v-html="data.answer"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Heading from '@/front/components/layout/Heading.vue';
export default {
  name: "Faq",
  components:{
    Heading
  },
   metaInfo: {
    title: 'GBI Frequently Asked Question',
    meta:[
      { name: 'description', content: '@GoWithGBI helps you answer all your queries  regarding your travel program by just one click of a button' },
      { name: 'keywords', content: '@GoWithGBI,have a question,search for your answer,FAQ,Travel bookings queries,customer service,support helpdesk' },
      { name: 'url', content: 'https://www.gowithgbi.com/resources/faq' },
    ]
  },
  data(){
    return{
      searchQuery:null,
      questions_list:[
        {
          question:'Why should I trust you?',
          answer: "<p>With an experience of about 40 yrs and a reputable name in the travel industry, lead by our CEO Mr. Jasbir Singh Rikhi who is a passionate traveler himself, with a background in Hospitality sector, we have an enormous experience both internationally and domestically catering to young and passionate travelers worldwide through our well-trained management team. GBI has sent more than 1 lakh students to different destinations across the globe.</p>"
        },
        {
          question:"What are the products and services offered by GBI?",
          answer:"<p>GBI’s USP is to educate passionate travelers and young minds while they are on their journey with us, so we provide customised and well-planned travel programs for educational institutions, corporates and passionate travelers.</p><p>GBI hand picks various aspects of the Itinerary such as hotel, restaurant, airline, train, coach, shipping company, sightseeing etc. and does not have any control over operating of the same.We have a good reachability within India and across the globe. So reach out to us to book your journey today!</p>"
        },
        {
          question:"What are the supported modes of payment you accept ?",
          answer:"<p>One should inform GBI for any payment made by them to GBI bank account through net or payment gateway, within 24 hours with valid proof of payment by payment copy / email. Payment receipt will be issued only after intimation by the guest to GBI.</p><p>GBI has created a web platform for the convenience of the guests to submit the payment online in an easy and faster manner.</p>"
        },
        {
          question:"What can be the minimum number of passengers that can travel as a group?",
          answer:"<p>Domestic Travel: - at least 16 Pax per group.</p><p>International Travel: at least 10 Pax per group.</p><p>For Corporate Travelers/ Families : Minimum group size 2-10 passengers up to any number.</p>",
  
        },
        {
          question:"What are the type of accommodations offered by GBI?",
          answer:"<p>For International & Domestic Travelers : Stay in 3 star or above categorized hotels on double/triple/quad sharing basis.</p>"
        },
        {
          question:"Where are GB International branch locations?",
          answer:"<p>GBI has its Head Office in Delhi with regional branches in Hyderabad, Ludhiana, Ahmedabad and USA.</p>"
        },
        {
          question:"What are the Travel documents required for each type of travel?",
          answer:"<p>Domestic Travel-<br/>It is mandatory for the travelers who are travelling with GBI to carry educational institution/ employee photo identification id ; in addition to the above said Identification proof; the said wanderer can carry the Government Issued Identification such as Aadhar Card, Passport, driver license, pan card etc.</p><p>International Travel-<br/>Passport is an official document required whenever a traveler intends to travel abroad and in addition the wanderer should have a visa of that particular country which the guest/s wants to visit.<br/>Before submission of the passport to GBI for obtaining visa, one has to ensure that passport validity should be at least 6 months to 1 year from the arrival / conclusion date of the tour in India and it has sufficient blank pages, which should not be damaged/stapled/torn etc.In addition to the above documents, one should have medical certificates and travel insurance with forex card if needed.</p><p>Students/ Teachers- Children below the age of 18 years require NOC, Custody Certificate, adoption certificate etc. on case to case basis as required by the destination country authority.</p>"
        },
        {
          question:"What are the travel documents required for Foreign Nationals?",
          answer:"<p>Foreign nationals shall ensure the valid VISA when the tour commences from India & concludes in India. Such Foreign nationals shall solely be responsible for any contingency in respect of the same. Non-Resident Indian (NRI) shall compulsorily hold a Person of Indian origin (POI) or Overseas citizen of India (OCI) card while traveling to India and / or gap of minimum 2 months between two visits to avoid deportation entry problem through immigration authorities.</p>"
        },
        {
          question:"Is the registration amount refundable by GBI?",
          answer:"<p>The registration amount paid at the time of booking, is not refundable and interest free. Balance payments by the guests shall be made at the time of booking or 45 days before departure whichever is earlier. The bookings shall be processed by GBI only after the registration amount is paid in full.</p>"
        },
        {
          question:"What are the package Inclusions and Exclusions for International tours offered by GBI?",
          answer:"<p>International Tour Package Inclusions: Stay in 3 star or above categorized hotels on double/triple/quad sharing basis. All meals (Veg/Non Veg) Included, Sightseeing/Guide Charges, All transfers, All Taxes. Travel by air/train/A/c Coach (depending on the agreement between the educational institution and GBI)</p><p>Package Exclusions:<br/>Personal expenses such as Laundry, Tips, Porterage charges etc Cold drinks and all other expenses not mentioned above.</p>"
        },
        {
          question:"What are the Package Inclusions & Exclusions for Domestic travelers?",
          answer:"<p>Package Inclusions: Stay in 3 star or above categorized hotels on double/triple/quad sharing basis, All meals (Veg/Non Veg) Included, Sightseeing/Guide Charges, All transfers, All Taxes Travel by air/train/A/c Coach (depending on the agreement between the educational institution and GBI)</p><p>Package Exclusions:<br/> Personal expenses such as Laundry, Tips, Porterage charges. Cold drinks and all other expenses not mentioned above.</p>"
        },
        {
          question:"How are the travel details by GBI made available to guests? ",
          answer:'<p>We at GBI endeavour to update our guests from time to time by sending the guests tour related instructions through sms (on registered mobile no) / emails from (info@gbinternational.in) / telephone or by any other mode of communication solely based on the convenience of the guests. Guests can also visit the website www.gbinternational.in to keep themselves updated.</p>'
        },
        {
          question:"How much does GBI charge for an International tour?",
          answer:"The cost of the tour depends on the destination and the number of days planned by the client."
        },
        {
          question:"Is travel insurance included or available as per the request?",
          answer:"<p>Travel insurance is always provided by GBI and if additional services are needed, they can be added.</p><p>Insurance for General Travelers/Corporate Travelers <br/>The travel Insurance is made available to the guest/s personal based on the request issued to GBI by the guest/s who has initiated the booking. Unless explicitly provided by GBI in any specific service or deliverable, obtaining sufficient insurance coverage is the obligation of the guest/s. In no case GBI shall accept any claims arising out of such scenarios. Insurance, if any provided as a part of the service or product by GBI shall be as per the terms and conditions of the third-party insurance company. GBI merely acts as a facilitator in connecting the User with insurance company. The User shall contact the insurance company directly for any claims or disputes. GBI shall not be held liable in case of partial acceptance or denial of the claims by the insurance company. </p><p>Insurance for Educational travelers<br/>The travel Insurance is made available to the student/teacher based on the request issued to GBI by the signing authority who has initiated the booking.Insurance, if any provided as a part of the service or product by GBI shall be as per the terms and conditions of the third-party insurance company. GBI merely acts as a facilitator in connecting the User with the insurance company. The User shall contact the insurance company directly for any claims or disputes. GBI shall not be held liable in case of partial acceptance or denial of the claims by the insurance company.</p><p>Insurance for International Travelers<br/>The tour cost may not include insurance charges unless it is mandatory as per the prevailing rules of the respective countries. Guest/s are advised and recommended to acquire adequate Insurance Policy and Overseas Travel Insurance cover as per requirement of Government of the Country concerned to meet expenses including medical, legal hospitalization, accident etc. during the tour. Presently for most of the European countries, it is mandatory to obtain an Overseas Travel Insurance policy for the tour. In Europe, United States, Canada ,Egypt and Dubai Tours, GBI facilitates the insurance for guest/s. It is obligatory for the guest/s to make full disclosure to the Insurance Company of guest/s’ medical condition that may affect his ability to take up and complete the full tour. Insurance Company and / or service provider reserves the right to call for any written certification of guest/s’ medical fitness before departure.</p>"
        },
        {
          question:"Does GBI take responsibility for valuables and medical emergencies?",
          answer:"<p>GBI is an insurance facilitator and is not liable / responsible for any reason whatsoever, for settlement of insurance claims and it is a matter solely between the concerned insurance company and the guest/s. Insurance companies do not insure baggage. Guest/s is / are advised not to carry valuables or money on tour and keep any valuables in cargo baggage.</p><p>In case of any unfortunate event while on tour like hospitalization and / or unfortunate demise, it shall be the sole responsibility of the guest/s and / or relative of the hospitalized person/deceased to contact and submit the necessary claim to insurance authorities for further processing of the claim.</p>"
        },
        {
          question:"What are Cancellation and Refunds policies for International Tour (For Groups) , Domestic Tours, Corporate & Educational Tours?",
          answer:"<p>(For Groups)<br/>From the day 1 of reservation if you wish to cancel any reason whatsoever till;</p><ul><li>30 days prior to departure charges would be ………………………35%</li><li>20 Days Prior to departure charges would be……………………….45%</li><li>14 Days Prior to departure charges would be……………………...65%</li><li>06 Days Prior to departure charges would be……………………...80%</li><li>03 Days Prior to departure charges would be……………………..100%</li></ul>"
        }
      ],
      /*questions_list:[
        {
          question:'What is GB International? How does it function?',
          answer: "<p>GB International is an educational specialist that has been serving the academic sector since last 35 years. GBI has successfully served more than hundred educational institutions through organized educational tours.</p><p>GBI helps students gain practical knowledge by bringing them closer to different technological innovations, culture while imparting them more knowledge of what they get to learn in textbooks also provide learnings outside them.</p>"
        },
        {
          question:"Cancellation and Refunds for International Tour (For Groups) , Cancellation and Refunds for International Tour (For Groups)",
          answer:"<p>If the tour is cancelled by any reason post reservation then 50 % of the total amount will be fortified.</p>                <p>If student cancels his/her trip 30 days prior to departure, 25% of the total amount is to be fortified; if 25-15 days prior to departure than 50% of the total amount and if cancellation is announced 7 days before departure than 100% of the balance amount will be fortified.</p>"
        },
        {
          question:"Cancellation and Refunds for Domestic Tour (For Groups)",
          answer:"<p>If the tour is cancelled by any reason, the 50% of the amount is to be fortified.</p><p>If the student cancels his/her trip post reservation 30 days prior to departure then 35% of the total amount is to be fortified.</p><p>30 days prior to departure charges would be 35%</p><p>20 days prior to departure charges would be 45%</p><p>14 days prior to departure charges would be 65%</p><p>06 days prior to departure charges would be 80%</p><p>days prior to departure charges would be 100%</p>"
        },
        {
          question:"What are the various mode of payment available?",
          answer:"<p>Student or school authority can make the payment through Cheque or Demand Draft. They can also do online payment through NEFT or RTGS but that has to be a one-time payment.</p>",
  
        },
        {
          question:"What are the basic amenities that GB International provide on a tour?",
          answer:"<p>GB International’s services include - Transportation fare, stay in the hotel, meals, 24/7 presence of reliable travel guide, full-time tour director, free entrances/shows and guided sightseeing.</p>"
        },
        {
          question:"What are the goods and services that GB International does not include in its basic amenities?",
          answer:"<p>In case of increase in the cost of the land arrangements due to the fluctuations, in exchange rates, the passengers shall have to pay the difference before the departure of the tour. Apart from this, students has to bear their own personal expenses.</p>"
        },
        {
          question:"What are the documents required for an International tour?",
          answer:"<p>For an International tour, GBI requires a Valid Passport (minimum valid period required is 6 months), recent colored passport size photograph and students should have a valid photo Identity card of the school they study.</p>"
        },
        {
          question:"What are the documents required for a domestic tour?",
          answer:"<p>For a domestic tour, GBI requires a valid student Identity card and recent colored Passport size photograph.</p>"
        },
        {
          question:"How old do I have to be to travel on GB International journey?",
          answer:"<p>GBI takes students of any age provided that the school authority has no objection to send its students on an educational tour.</p>"
        },
        {
          question:"How is GB International different from any other educational tour company?",
          answer:"<p>GBI believes in imparting true educational value. Adventure and fun activities are considered to be a part of practical learning. On every tours, GBI strive to deliver well-defined learning objective.</p><p>GBI follows a personalized customer-centric approach, therefore, it provides informative learning shared memories safety and comfort all at a competitive rate. Maintenance of quality is set priority of GB International.</p>"
        },
        {
          question:"How does GBI address on-going safety and security?",
          answer:"<p>GBI is a government recognized company with stringent practices when it comes to student’s safety and security. Students are accompanied by experienced and sensitive travel guide who looks after the safety of the students 24/7, during the tour.</p>"
        },
        {
          question:"Does GBI have any consumer privacy policy? If yes, what are those?",
          answer:'<p>Yes, GBI has consumer privacy policy for it believe in keeping its customers safe and worry-free.</p><p>Keeping in mind the comfort zone of the client, GBI try to take as limited information as possible, as permitted by the law. If any information needs to be shared internationally, GBI ensure that client’s privacy is maintained.</p><p class="td-font">GBI avert its client on a timely basis, in regard to the personal information used.</p>'
        },
        {
          question:"How much does GBI charge for an International tour?",
          answer:"The cost of the tour depends on the destination and the number of days planned by the client."
        },
        {
          question:"What are rights reserved under GBI?",
          answer:"<p>Tour itineraries are subject to change without any prior notice. GBI reserves the right to accept, retain and decline any person as a member of a tour at any time of the scheduled trip without any notice.</p><p>No refund is provided to a person, if he/she does not show up during the actual conduct of the tour.</p>"
        }
  
      ]*/
    }
  },
  computed: {
    resultQuery() { 
      if (this.searchQuery) {
        return this.questions_list.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.question.toLowerCase().includes(v));
        });
      } else {
        return this.questions_list;
      }
    }
  }
};
</script>
