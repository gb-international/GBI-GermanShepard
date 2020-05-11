<template>
  <div id="contactus">
    <vue-headful
        title="GBI Contact Us "
        description="Connect With GB International for organizing your educational travel plans any where any time"
        keyword="@GoWithGBI,GB International,Connect With GB International,Email Us,Talk To Us,Need a travel solution"
        url="https://www.gowithgbi.com/contact-us"
        ogLocale="en_US"
        lang="en_US,en_UK"
    />

    <!-- start banner area -->
    <div class="text_on_image">
      <section class="banner-block contact_us_banner"></section>  
      <div class="content">
        <p class="heading">CONTACT US</p>             
      </div>      
    </div>
  <!-- End banner area -->
    <main>

    <!-- Start how we work -->
      <div class="row">
      <div class="col-lg-12 pa-t-15">

     <article class="container contactus">
     <div class="row">
           <div class="col-lg-6">
         <div class="col-lg-12">
          <h2>HEAD OFFICE</h2>
          <table class="table">
              <tbody>
                <tr>
                  <td><img :src="`assets/front/images/address_icon.png`"></td>
                  <td>G-32,DDA Commercial Complex, Sheikh Sarai Phase-1, New Delhi 110017</td>
                 </tr>
                <tr>
                  <td><img :src="`assets/front/images/phone_icon.png`"></td>
                  <td>011-26017120, 26011683 ,<br> +91 9810055102</td>
                 </tr>
                 <tr>
                  <td><img class="ic-mail" :src="`assets/front/images/email_icon.png`"></td>
                  <td>info@gbinternational.in<br>reservations@gbinternational.in</td>
                 </tr>
                 </tbody>
            </table>
            <div class="headline"><h2>REGIONAL OFFICE</h2></div>
             <table class="table">
              <tbody>
                <tr>
                  <td><img class="ic-add" :src="`assets/front/images/address_icon.png`"></td>
                  <td>302, Zeenath Residency Srinagar Colony, Plot #29, Hyderabad - 500073 Andhra Pradesh</td>
                 </tr>
                <tr>
                  <td><img class="ic-cal-re" :src="`assets/front/images/phone_icon.png`"></td>
                  <td>+91 9717922240,<br> +91 9810055102</td>
                 </tr>
               
                 </tbody>
            </table>
            </div>

         <div class="col-lg-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1110823555123!2d77.22139051508042!3d28.536380682455928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2214a7825c5%3A0xbef6ae1702026f1c!2sGB+International!5e0!3m2!1sen!2sin!4v1554198180729!5m2!1sen!2sin" width="100%" height="190" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
      </div>

       <div class="col-lg-6">
       <article class="contact-form">
       <div class="title-contact"><h2>Contact Us</h2></div>
         <!--form contact us-->
        
         <form role="form" enctype="multipart/form-data" @submit.prevent="sendmail()">
         
         <div class="form-fullwidth">
          <label class="lable-title">Name</label>
         <input type="text" class="form-control" id="name" placeholder="Name" v-model="form.name" name="name" :class="{ 'is-invalid': form.errors.has('name') }">
       <!--  <has-error :form="form" field="name"></has-error> -->
         
        </div>
       <div class="form-fullwidth">
        <label class="lable-title">E-Mail</label>
        <input type="text" class="form-control" id="email" placeholder="Email" v-model="form.email" name="email" :class="{ 'is-invalid': form.errors.has('email') }">
       
          
        </div>
        <div class="form-fullwidth">
          <label class="lable-title">Mobile</label>
        <input type="text" class="form-control" id="mobile" placeholder="Mobile" v-model="form.mobile" name="mobile" :class="{ 'is-invalid': form.errors.has('mobile') }">
        
        </div>
        <div class="form-fullwidth">
          <label class="lable-title">Message</label>
            <textarea id="messagecon" v-model="form.messagecon" name="messagecon" rows="5" cols="40" class="form-control { 'is-invalid': form.errors.has('messagecon') }" placeholder="Message....."></textarea>
            
            
          </div>
           <div class="form-fullwidth alignbtn">

          <input type="submit" value="Submit" name="submit">
        </div>
       </form>
       
     </article>
      </div>
      </div>
     </article>
   </div>
 </div>
    <!-- End how we work -->

<div class="clear"></div>
 </main>
    </div>
</template>

<script>
export default {
  name: "ContactUs",
  data(){
    return{
       form: new Form({
          name:'',
          email:'',
          mobile:'',
          messagecon:'',         
      })
    }
  },
  methods:{
   	sendmail(){
     	this.form.post('/api/contact-us/send').then((response)=>{
            swal({ text: 'Thank you for contacting us!', width: 300, })
      }).catch(()=>{ })
    }
  }
}
</script>

<style scoped>

</style>
