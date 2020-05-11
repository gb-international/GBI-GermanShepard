  <template>
      <div id="joinOurteam">
                <vue-headful
      title="Join Our Team"
    description="@GoWithGBI Lets travel together and make the world a better place .Join our brilliant minds "
    keywords="@GoWithGBI,join our team,explore Your career with GBI,exciting journey,research oriented process,challenges,explore your travel instinct,discover ,travel passion,learn,explore,discover"
    image=""
    lang="en_US"
    ogLocale="en_US,en_UK"
    url="https://www.gowithgbi.com/about-us/join-our-team"
     />
     <div class="text_on_image">
      <section class="banner-block career_banner"></section>  
      <div class="content">
        <p class="heading">JOIN OUR TEAM</p>             
      </div>      
    </div>

        <main>
        <!-- End banner area -->
        <section>
         <article class="join-team">          
          <div class="container">
            <h1>JOIN OUR BRILLIANT MINDS</h1>
            <form role="form" method="POST" @submit.prevent="sendmailResume()" enctype="multipart/form-data">            
              <div class="form-input">
               <input type="text" class="form-control" v-model="form.firstname" :class="{ 'is-invalid': form.errors.has('firstname') }"  placeholder="Enter firstname" name="firstname">
                  <has-error :form="form" field="firstname"></has-error>  
              </div>

              <div class="form-input">
                <input type="text" class="form-control" v-model="form.lastname" :class="{ 'is-invalid': form.errors.has('lastname') }"  placeholder="Enter lastname" name="lastname">
                  <has-error :form="form" field="lastname"></has-error> 
              </div>

              <div class="form-input">
                <input type="email" class="form-control" v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }"  placeholder="Enter Email" name="email">
                  <has-error :form="form" field="email"></has-error>   
              </div>

              <div class="form-input">
                <input type="text" class="form-control" v-model="form.contactno" :class="{ 'is-invalid': form.errors.has('contactno') }"  placeholder="Enter contactno" name="contactno">
                  <has-error :form="form" field="contactno"></has-error> 
              </div>

              <div class="form-input">
                <input type="text" class="form-control" v-model="form.address" :class="{ 'is-invalid': form.errors.has('address') }"  placeholder="Enter address" name="address">
                  <has-error :form="form" field="address"></has-error> 
              </div>

              <div class="form-input">
                <input type="text" class="form-control" v-model="form.state" :class="{ 'is-invalid': form.errors.has('state') }"  placeholder="Enter state" name="state">
                  <has-error :form="form" field="state"></has-error> 
              </div>

              <div class="form-input">
                <input type="text" class="form-control" v-model="form.city" :class="{ 'is-invalid': form.errors.has('city') }"  placeholder="Enter city" name="city">
                  <has-error :form="form" field="city"></has-error> 
              </div>

              <div class="form-input">
                <input type="text" class="form-control" v-model="form.zipcode" :class="{ 'is-invalid': form.errors.has('zipcode') }"  placeholder="Enter zipcode" name="zipcode">
                  <has-error :form="form" field="zipcode"></has-error> 
              </div>

               <div class="form-input">
                  <select id="postvancy" name="postvancy" v-model="form.postvancy"  :class="{ 'is-invalid': form.errors.has('postvancy') }">
                    <option value="">Select Post</option>
                    <option value="Business Development Executive">Business Development Executive (Delhi)</option>
                    <option value="Business Development Executive">Business Development Executive (Panjab)</option>
                    <option value="Business Development Executive">Business Development Executive (Hyderabad)</option>
                    <option value="Software Developer">Software Developer</option>
                    <option value="Business Lead Generation Executive">Business Lead Generation Executive</option>
                  </select>
                  <has-error :form="form" field="postvancy"></has-error> 
                </div>

               <div class="form-fullwidth">
                <div class="upload-btn-wrapper">
                  <button class="btn button3">Select File</button>
                  <input  name="resume" type="file"  @change="onFileChange" :class="{ 'is-invalid': form.errors.has('resume') }" accept=".pdf,.doc,.docx">
                  <has-error :form="form" field="resume"></has-error> 
                  <span v-if="filename">{{ filename }}</span>
                </div>
                <p><span>Please uplod PDF file only</span></p>
              </div>

              <div class="form-fullwidth">
                <textarea id="messagescon" v-model="form.messagescon" :class="{ 'is-invalid': form.errors.has('messagescon') }" name="messagescon"  placeholder="Write something.."></textarea>
                <has-error :form="form" field="messagescon"></has-error> 
              </div>

              <div class="text-center">
                <button type="submit" class="btn profile_button" value="Submit">Submit</button>
              </div>

            </form>
          </div>
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
  data(){
    return{
      filename:'',
        form: new Form({
          firstname:'',
          lastname:'',
          email:'',
          contactno:'',
          address:'',
          state:'',
          city:'',
          zipcode:'',
          postvancy:'',
          resume:'',
          messagescon:'',
      })
    }
  },
    methods:{
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if(files[0].size > 2097152){
          swal.fire(
            'Alert!',
            'Resume size should not be more than 2 MB',
            'warning'
          );
          
          return false;
        }
        if (!files.length)
          return;

        this.createImage(files[0]);
        var fileData =  event.target.files[0];
        this.filename=fileData.name;
      },
      createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;
        reader.onload = (e) => {
          vm.form.resume = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      
      sendmailResume(){
        this.form.post('/api/join-our-team/send')
        .then((response)=>{
            this.form.reset();
            this.filename = '';
            // this.$router.push('/home')
            swal.fire(
            'Successfully Submited!',
            'Your resume has been sent to HR Deparment..',
            'success'
          )
        })

      .catch(()=>{

      })

      }// end sendmailResume
    }
}
</script>

  <style scoped>
  button:hover{

    background-color: #eee;
  }
  input[type="submit"]:hover{

      background-color: #3490dc;
      color: white;
      padding: 12px 35px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      border: solid 0px white;


  }
  </style>