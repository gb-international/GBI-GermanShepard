<template>
  <div id="user_inform_model">
    <div class="row justify-content-center w-100">
      <div class="col-sm-7">
        <div class="user-model card p-20 mt-15">
          <label>Three Step Verification</label>
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
                  <select class="form-control" v-model="institution">
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
    var data = 
      {user_profession : this.profession,
      school_id : this.institution,
      institution_code : this.institution_code};
    axios.post("/api/user-info-update", data, { headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }}).then(response => {
          this.$router.push('/dashboard');
        }).catch(error => {
          this.handleError(error);
        });
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
  } 
}

</script>
<style>

</style>