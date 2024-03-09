<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
<section>
  <form-layout v-if="!loading">
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="UpdateTour()"
      >
        <div class="row" v-if="form.tour_id">
          <div class="col-sm-4 d-hidden">
            <div class="form-group">
              <label for="tour_id">Tour Code</label>
              <input
                type="text"
                class="form-control"
                readonly
                v-model="form.tour_id"
                :class="{ 'is-invalid': form.errors.has('tour_id') }"
                placeholder="Enter Tour name"
              />
              <has-error :form="form" field="tour_id"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="travel_code">Travel Code</label>
              <input
                type="text"
                class="form-control"
                v-model="form.travel_code"
                :class="{ 'is-invalid': form.errors.has('travel_code') }"
                placeholder="Enter Travel Code to share with client"
              />
              <has-error :form="form" field="travel_code"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="tour_type">Tour Type</label>
              <select class="form-control customSelect" @change="onTourTypeChange" v-model="form.tour_type">
                <option value="National">National</option>
                <option value="International">International</option>
              </select>
              <has-error :form="form" field="tour_type"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="room_sharing">Room Sharing</label>
              <select @change="onRoomSharingChange" class="form-control customSelect" v-model="form.room_sharing">
                <!-- <option value="Single">Single</option>
                <option value="Double">Double</option> -->
                <option value="Triple">Triple</option>
                <option value="Quad">Quad</option>
              </select>
              <has-error :form="form" field="room_sharing"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="meal_plan_type">Meal plan type</label>
              <select class="form-control customSelect" v-model="form.meal_plan_type">
                <option value="ep">ep</option>
                <option value="cpai">cpai</option>
                <option value="mapai">mapai</option>
                <option value="apai">apai</option>
              </select>
              <has-error :form="form" field="meal_plan_type"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="no_of_adults">No of adults</label>
              <input
                type="number"
                min="0"
                class="form-control"
                placeholder="Enter No of adults"
                v-model="form.no_of_adults"
                :class="{ 'is-invalid': form.errors.has('no_of_adults') }"
              />
              <has-error :form="form" field="no_of_adults"></has-error>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="itinerary_id">Itinerary</label>

              <dropdown-filter 
                class="mb-2" :itemList="itinerary_list" 
                v-model="form.itinerary_id"
              />

              <div class="error" v-if="form.errors.has('itinerary_id')">
                <label class="danger text-danger">{{
                  form.errors.get("itinerary_id")
                }}</label>
              </div>
            </div>
          </div>

          <div class="col-sm-6" v-if="form.customer_type == 'school'">
            <div class="form-group">
              <label for="itinerary_id">School</label>

              <dropdown-filter class="mb-2" 
                :itemList="school_list" 
                v-model="form.school_id"
              />

              <div class="error" v-if="form.errors.has('school_id')">
                <label class="danger text-danger">{{
                  form.errors.get("school_id")
                }}</label>
              </div>
            </div>
          </div>

          <div class="col-sm-6" v-if="form.customer_type == 'corporate'">
            <div class="form-group">
              <label for="itinerary_id">Company</label>

              <dropdown-filter class="mb-2" 
                :itemList="company_list" 
                v-model="form.company_id"
              />

              <div class="error" v-if="form.errors.has('company_id')">
                <label class="danger text-danger">{{
                  form.errors.get("company_id")
                }}</label>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="tour_start_date">Tour Start Date</label>
              <input
                type="date"
                class="form-control"
                placeholder="Enter Tour Start Date"
                :min="minDate"
                v-model="form.tour_start_date"
                :class="{ 'is-invalid': form.errors.has('tour_start_date') }"
              />
              <has-error :form="form" field="tour_start_date"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="tour_end_date">Tour End Date</label>
              <input
                type="date"
                class="form-control"
                placeholder="Enter Enter Date"
                :min="form.tour_start_date"
                v-model="form.tour_end_date"
                :class="{ 'is-invalid': form.errors.has('tour_end_date') }"
              />
              <has-error :form="form" field="tour_end_date"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="tour_price">Tour Price</label>
              <input
                type="number"
                min="0"
                class="form-control"
                placeholder="Enter Tour Price"
                v-model="form.tour_price"
                :class="{ 'is-invalid': form.errors.has('tour_price') }"
              />
              <has-error :form="form" field="tour_price"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="meal_plan_price">Meal plan price</label>
              <input
                type="number"
                min="0"
                class="form-control"
                placeholder="Enter meal plan price"
                v-model="form.meal_plan_price"
                :class="{ 'is-invalid': form.errors.has('meal_plan_price') }"
              />
              <has-error :form="form" field="meal_plan_price"></has-error>
            </div>
          </div>

          <div class="col-sm-3" v-if="gst_list.length">
            <div class="form-group">
                <label for="gst_fee">Gst fee(%)</label>
                <select v-model="form.gst_fee" class="form-control customSelect">
                    <option v-for="{key,value} in gst_list" :value="key"  :key="key">{{value}}</option>
                </select>
            </div>
          </div>
          <div class="col-sm-3" v-if="tcs_list.length>0&& form.tour_type == 'International'">
            <div class="form-group">
                <label for="tcs_fee">Tcs fee(%)</label>
                  <select v-model="form.tcs_fee" class="form-control customSelect">
                    <option v-for="{key,value} in tcs_list" :value="key"  :key="key">{{value}}</option>
                  </select>
            </div>
          </div>
        </div>

        <form-buttons />
      </form>
    </template>
  </form-layout>
  <div class="LoaderDiv" v-show="loading">
    <img class="loaderLogo" src="/loader/logo_gif.gif">
    <p style="padding-left: 33px; margin-top: 12px; font-weight: 500;">Loading..</p>
  </div>
</section>
</template>

<script>
import { Form, HasError } from "vform";
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import DropdownFilter from "@/admin/components/form/DropdownList.vue";
export default {
  name: "EditTour",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "dropdown-filter": DropdownFilter,
  },
  data() {
    return {
      itinerary_list: [],
      client_type:'eduInstitute',
      tour_type:'National',
      school_list: [],
      company_list: [],
      gst_list:[],
      tcs_list:[],
      tours: [],
      minDate: '',
      form: new Form({
        customer_type: "school",
        room_sharing:"Quad",
        meal_plan_type:"ep",
        tour_type:"National",
        tour_id: "",
        travel_code: "",
        itinerary_id: "",
        school_id: "",
        company_id: "NA",
        customer_type: "",
        tour_start_date: "",
        tour_end_date: "",
        tour_price: "",
        tcs_fee:5,
        gst_fee:5,
        meal_plan_price:0,
        no_of_adults:0,
      }),
      loading: false
    };
  },
  created(){
    this.gst_list=[
      {
      "key":5,
      "value":"5%"
      },
      {
      "key":12,
      "value":"12%"
      },
      {
      "key":18,
      "value":"18%"
      }
    ],
    this.tcs_list=[
      {
        "key":5,
        "value":"5%"
        },
        {
        "key":10,
        "value":"10%"
        },
        {
        "key":20,
        "value":"20%"
        }
    ]
  },
  mounted() {
    this.tourData();
    this.schoolData();
    this.companyData();
    this.itineraryData();
  },
  methods: {
    tourData() {
      axios.get(`/api/tour/${this.$route.params.id}/edit`).then((response) => {
        this.form.fill(response.data);
        this.minDate = response.data.tour_start_date;
      });
    },
    schoolData() {
      axios.get(`/api/school`).then((response) => {
        if (response.data) {
          for(let i = 0;i<response.data.length;i++){
            this.school_list.push({
              name:response.data[i].school_name,
              id:response.data[i].id
            });
          }
        }
      });
    },
    itineraryData() {
      this.itinerary_list=[],
      axios.get(`/api/itinerary/${this.client_type}/${this.tour_type}`).then((res) => {
        if (res.data) {
          for(let i = 0;i<res.data.length;i++){
            this.itinerary_list.push({
              name:res.data[i].title + ` (${res.data[i].id})`,
              id:res.data[i].id
            });
          }
        }
      });
    },
    onItineraryChange(){
    },
    onTourTypeChange(){
      this.tour_type = this.form.tour_type
      this.itineraryData()
      this.form.tour_price = 0;
      this.form.meal_plan_price = 0;
      this.form.tcs = 0;
      this.form.gst = 0;
    },
    priceChange($itinerary_id){
      axios.get(`/api/price-per-itinerary/${$itinerary_id}`).then((res) => {
        if (res.data) {       
          if(this.form.room_sharing == "Triple"){
            this.form.tour_price = res.data.triple_sharing_base_price;
            if(this.form.meal_plan_type == 'ep'){
              this.form.meal_plan_price = res.data.ep_price;
            }
            else if(this.form.meal_plan_type == 'cpai'){
              this.form.meal_plan_price = res.data.cpai_price;
              
            }
            else if(this.form.meal_plan_type == 'mapai'){
              this.form.meal_plan_price = res.data.mapai_price;
              
            }
            else if(this.form.meal_plan_type == 'apai'){
              this.form.meal_plan_price = res.data.apai_price;
            }
          }
          else if(this.form.room_sharing == "Quad"){ 
            this.form.tour_price = res.data.quad_sharing_base_price;
            if(this.form.meal_plan_type == 'ep'){
              this.form.meal_plan_price = res.data.ep_price;
            }
            else if(this.form.meal_plan_type == 'cpai'){
              this.form.meal_plan_price = res.data.cpai_price;
              
            }
            else if(this.form.meal_plan_type == 'mapai'){
              this.form.meal_plan_price = res.data.mapai_price;
              
            }
            else if(this.form.meal_plan_type == 'apai'){
              this.form.meal_plan_price = res.data.apai_price;
            }
          }
          this.form.gst_fee = res.data.gst_fee
          if(this.form.tour_type == "International"){
            this.form.tcs_fee = res.data.tcs_fee
          }
        }
      })
    },
    onRoomSharingChange(){
      this.priceChange(this.form.itinerary_id);
    },
    onMealPlanType(){
      this.priceChange(this.form.itinerary_id);
    },
    companyData() {
      axios.get(`/api/company`).then((response) => {
        if (response.data) {
          for(let i = 0;i<response.data.length;i++){
            this.company_list.push({
              name:response.data[i].company_name,
              id:response.data[i].id
            });
          }
        }
      });
    },

    UpdateTour() {
      this.form
        .put(`/api/tour/${this.$route.params.id}`)
        .then((response) => {
          this.loading = true
          // this.$router.push(`/tours/`);
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated",
          });
          this.loading = false
        })
        .catch(() => {});
    },
    schoolUpdate(value){
      this.form.school_id = value.id;
    },

    companyUpdate(value){
      this.form.company_id = value.id;
    },
    
    itineraryUpdate(value){
      this.form.itinerary_id = value.id;
    },
  },
};
</script>
 