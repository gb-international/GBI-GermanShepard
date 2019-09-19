<template>
    <div id="contactus">
    	<!-- start banner area -->
    <section class="banner-block">
        <img id="contact-us" class="top-img" :src="`assets/front/images/banner_contact.jpg`">
     </section>  
  <!-- End banner area -->
 <main>

  <!-- Start main content --> 
 

    <!-- Start how we work -->
      <div class="row">
      <div class="col-lg-12 pa-t-15">

     <article class="contactus">
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1110823555123!2d77.22139051508042!3d28.536380682455928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2214a7825c5%3A0xbef6ae1702026f1c!2sGB+International!5e0!3m2!1sen!2sin!4v1554198180729!5m2!1sen!2sin" width="100%" height="210" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
      </div>

       <div class="col-lg-6">
       <article class="contact-form">
       <div class="title-contact"><h2>Contact Us</h2></div>
         <!--form contact us-->
        
        <form role="form"  @submit.prevent="sendmail">
         
         <div class="form-fullwidth">
          <label class="lable-title">Name</label>
          <input type="text" id="fname" v-model="form.name" name="name" class="form-control { 'is-invalid': form.errors.has('name') }" placeholder="Name">
           <has-error :form="form" field="name"></has-error>
         
        </div>
       <div class="form-fullwidth">
        <label class="lable-title">E-Mail</label>
         <input type="text" id="email" v-model="form.email" name="email" class="form-control { 'is-invalid': form.errors.has('email') }" placeholder="E-Mail">
         
        </div>
        <div class="form-fullwidth">
          <label class="lable-title">Mobile</label>
          <input type="text" id="contactno" v-model="form.mobile" name="mobile" class="form-control { 'is-invalid': form.errors.has('mobile') }" placeholder="Mobile">
        
        </div>
        <div class="form-fullwidth">
          <label class="lable-title">Message</label>
            <textarea id="subject" v-model="form.messagecon" name="messagecon" rows="3" cols="40" class="form-control { 'is-invalid': form.errors.has('messagecon') }" placeholder="Message....."></textarea>
            
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
                    form:{},
                })
            }
        },
         methods:{
         	 sendmail(){
             	 	this.form.post('/send',
                    {name:this.form.name,email:this.form.email,mobile:this.form.mobile,messagecon:this.form.messagecon})
                   .then(response => {
                     console.log(response);
                       this.success = response.data.success;
                      
                  })

            }
         }
    }
</script>

<style scoped>

</style>