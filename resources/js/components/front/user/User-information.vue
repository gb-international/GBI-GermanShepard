<template>
  <div class="container" id="user_inform_model">
    <div class="row  justify-content-center">
      <div class="col-sm-7">
        <div class="user-model card">
            <form-wizard @on-complete="onComplete"
                  @on-loading="setLoading"
                  @on-validate="handleValidation"
                  @on-error="handleErrorMessage"
                  shape="circle"
                  color="#1c1650"
                  error-color="#e74c3c">
              <tab-content title="Personal details" :before-change="validateAsync">
                <label>Select Your Profession</label>
                <select class="form-control" v-model="profession">
                  <option value="student">Student</option>
                  <option value="Teacher/Principal/Dean">Teacher/Principal/Dean</option>
                </select>
              </tab-content>

              <tab-content title="Additional Info">

                <div class="form-group">
                  <label>Select Your Educational Institution</label>
                  <select class="form-control" v-mode="institution">
                    <option v-for="school in school_list" :value="school.id">{{ school.school_name }}</option>
                  </select>
                </div>
              </tab-content>

              <tab-content title="Last step" :before-change="validateAsyncLast">
                <div class="form-group">
                  <label v-if="profession == 'student'">Enter Your School/College ID</label>
                  <label v-else>Enter Your Affiliation Number</label>
                  <input type="text" class="form-control" v-model="institution_code" placeholder="Enter Your School/College ID">
                </div>
              </tab-content>

              <div class="loader" v-if="loadingWizard"></div>
              <div v-if="errorMsg">
                <span class="error">{{errorMsg}}</span>
              </div>
            </form-wizard>
        </div>
        
      </div>
    </div>


  </div>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  name: "ProfileEdit",
  components: {
    FormWizard,
    TabContent
  },
  data(){
    return{
      oddclass:false,
      evenclass:true,
      loadingWizard: false,
      errorMsg: null,
      school_list:'',
      profession: '',
      institution:'',
      institution_code:'',
    }
  },
  created() {
    // if(this.$session.get('login') == undefined){
    //   this.$router.push('/')
    // }
    axios.get('/api/school-list').then((response)=>{
      this.school_list = response.data;
      console.log(response);
    })

    var data = [];
    axios.post("/api/user-show", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
        })
        .then(response => {

        })
        .catch(error => {
          this.handleError(error);
        });
    },
 methods:{
  onComplete: function(){
    alert('yo yo');
  },
  setLoading: function(value) {
      this.loadingWizard = value
  },
  handleValidation: function(isValid, tabIndex){
     console.log('Tab: '+tabIndex+ ' valid: '+isValid)
  },
  handleErrorMessage: function(errorMsg){
    this.errorMsg = errorMsg
  },
  validateAsync:function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(this.profession == ''){
            reject('Select your profession')
        }else{
         resolve(true)
        }   
      }, 500)
    })
  },
  validateAsyncLast:function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(this.institution_code);
        if(this.institution_code == ''){
            reject('Enter your institution code')
        }else{
         resolve(true)
        }   
      }, 500)
    })
  },
  
  updateUserData(){

      var data = this.form;
      axios.post("/api/user-update", data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          }
        })
        .then(response => {
          toast({
              type: 'success',
              title: 'Profile Image updated!!'
          }) 
        })
        .catch(error => {
          this.handleError(error);
        });

    }
  } 
}

</script>
<style>
span.error{
  color:#e74c3c;
  font-size:13px;
  display:flex;
}
.wizard-btn{
  background: white !important;
  border-color: gray !important;
  color: grey !important;
  border-radius: 0px !important;
  padding: 10px !important;
  width: 235px !important;
  margin-top: 25px !important;
}
.wizard-header{
  display: none !important;
}
.wizard-nav-pills a{
  padding-top: 16px !important;
}
.wizard-icon-circle{
  width: 35px !important;
  height: 35px !important;
}
.wizard-icon{
  font-size: 15px !important;
}
</style>