<template>
    <div id="joinOurteam">
    	  <!-- End Header -->
    <main>
  <!-- start banner area -->
    <section class="banner-block">
        <img id="jointeamimg" class="top-img" :src="`assets/front/images/career.jpg`">
    </section>  
  <!-- End banner area -->
  <!-- Start main content --> 
  

    <!-- Start how we work -->
   <section>
     <article class="join-team">
      
      <h1>JOIN OUR BRILLIANT MINDS</h1>
      <form method="post" >
        
        <div class="form-input">
        <input type="text" id="fname" name="firstname" placeholder="First Name" >
          
        </div>
        <div class="form-input">
        <input type="text" id="lname" name="lastname" placeholder="Last Name" >
        </div>
        <div class="form-input">
        <input type="text" id="email" name="email" placeholder="E-Mail" >
        
        </div>
        <div class="form-input">
            <input type="text" id="contactno" name="contactno" placeholder="Contact Number" >
        </div>
        <div class="form-input">
            <input type="text" id="address" name="address" placeholder="Address" >
        </div>
        <div class="form-input">
            <input type="text" id="state" name="state" placeholder="State" >
        </div>
        <div class="form-input">
            <input type="text" id="city" name="city" placeholder="City" >
        </div>
        <div class="form-input">
            <input type="text" id="zipcode" name="zipcode" placeholder="ZipCode" >
        </div>
         <div class="form-input">
            <select id="postvancy" name="postvancy" >
              <option value="">Select Post</option>
              <option value="Business Development Executive">Business Development Executive (Delhi)</option>
              <option value="Business Development Executive">Business Development Executive (Panjab)</option>
              <option value="Business Development Executive">Business Development Executive (Hyderabad)</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Business Lead Generation Executive">Business Lead Generation Executive</option>
            </select>
          </div>
           <div class="form-fullwidth">
            <div class="upload-btn-wrapper">
              <button class="btn">Upload a file</button>
              <input type="file" name="resume" />
            </div>
          </div>
         <div class="form-fullwidth">
            <textarea id="messagescon" name="messagescon"  placeholder="Write something.."></textarea>
          </div>
           <div class="form-fullwidth alignbtn">
          <input type="submit" value="Submit">
        </div>
       </form>
      </article>
   </section>
    <!-- <section class="bgimg" style="background-image: url(`assets/front/images/team.png`) }}');"></section> -->
    <!-- End how we work -->
  <div class="clear"></div>
 </main>
    </div>
</template>

<script>
    export default {
        name: "JoinOurTeam",
    }
</script>

<style scoped>

</style>