<!-- Edit itinerary template -->
<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row justify-content-around">
        <!-- left column -->
        <div class="col-md-12">
          <form role="form" enctype="multipart/form-data" @submit.prevent="updateItinerary()">
            <div class="row mb-30">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="sourceId">Source</label>
                  <!-- <input type="text" class="form-control" name="source" v-model="form.source" :class="{ 'is-invalid': form.errors.has('source') }" placeholder="Enter Source" > -->
                     <model-select :options="options"
                        v-model="sources"
                        placeholder="From">
                    </model-select>
                    {{ sources.value }}
                   <has-error :form="form" field="source"></has-error>

                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-group">
                    <label for="destinationId">Destination</label>
                    <!-- <input type="text" class="form-control" v-model="form.destination" :class="{ 'is-invalid': form.errors.has('destination') }"  placeholder="Enter Destination" name="destination"> -->

                    <model-select :options="options"
                        v-model="destinations"
                        placeholder="To">
                    </model-select>
                    {{ destinations.value }}
                    <has-error :form="form" field="destination"></has-error>

                </div>
              </div>
              <div class="col-sm-4">
                <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="noofdaysId">Number Of Days</label>
                        <input type="text" readonly="readonly" class="form-control" v-model="form.noofdays" :class="{ 'is-invalid': form.errors.has('noofdays') }"  placeholder="Enter Number Of Days" name="noofdays" min="1">
                        <has-error :form="form" field="noofdays"></has-error>
                      </div>                                
                    </div>
                    <div class="col-sm-3">
                      <button type="button" class="btn btn_plus text-white mt-35" @click="addRow()"><i class="fas fa-plus"></i></button>
                    </div>
                    <div class="col-sm-3">
                      <button type="button" class="btn btn_plus text-white mt-35" @click="removeRow()"><i class="fas fa-minus"></i></button>
                    </div>
                    
                  </div>
              </div>
            </div>
            <div class="row  mb-30">

              <div class="col-sm-4">
                <div class="form-group">
                 <label for="tourtypeId">Tour Type</label>   
                     <div>
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input" id="NationalId" value="National" name="tourtype" v-model="form.tourtype">
                          <label class="custom-control-label" for="NationalId">National</label>
                        </div>

                        <!-- Default inline 2-->
                        <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input" value="International" id="InternationalId" name="tourtype" v-model="form.tourtype">
                          <label class="custom-control-label" for="InternationalId">International</label>
                        </div>
                     </div>
                    
                    <div class="error" v-if="form.errors.has('tourtype')">
                      {{ form.errors.get("tourtype") }}
                    </div>
                </div>
                
              </div>
                
              <div class="col-sm-5">
                  <div class="form-group aligen_top_input">
                    <label for="hotel_type">Hotel Type</label><br>

                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input" id="nohotelRadio" value="0" name="hotel_type" v-model="form.hotel_type" :class="{ 'is-invalid': form.errors.has('hotel_type') }">
                      <label class="custom-control-label" for="nohotelRadio">No Hotel</label>
                    </div>

                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input" id="hotelRadio" value="3" name="hotel_type" v-model="form.hotel_type" :class="{ 'is-invalid': form.errors.has('hotel_type') }">
                      <label class="custom-control-label" for="hotelRadio">3 Star</label>
                    </div>

                    

                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input" id="hotelRadio1" name="hotel_type"  v-model="form.hotel_type" :class="{ 'is-invalid': form.errors.has('hotel_type') }" value="4">
                      <label class="custom-control-label" for="hotelRadio1">4 Star</label>
                    </div>

                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input" id="hotelRadio2" name="hotel_type"  v-model="form.hotel_type" :class="{ 'is-invalid': form.errors.has('hotel_type') }" value="5">
                      <label class="custom-control-label" for="hotelRadio2">5 Star</label>
                    </div> 
                    <has-error :form="form" field="hotel_type"></has-error>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <label for="mode_of_transport">Mode of Transport</label><br>
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input type="checkbox" class="custom-control-input" id="transport" v-model="form.flight" true-value="1" false-value="0">
                      <label class="custom-control-label" for="transport">Flight</label>
                    </div>

                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input type="checkbox" class="custom-control-input" id="transport1" v-model="form.bus" true-value="1" false-value="0">
                      <label class="custom-control-label" for="transport1">Bus</label>
                    </div>

                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input type="checkbox" class="custom-control-input" id="transport2" v-model="form.train" true-value="1" false-value="0">
                      <label class="custom-control-label" for="transport2">Train</label>
                    </div>
                    <div class="error" v-if="form.errors.has('transport')">
                      <lable class="danger text-danger">{{ form.errors.get("transport") }}</lable>
                    </div>
                  </div>
                </div>
              </div>


              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="mode_of_transport">Tour category</label><br>

                    <multiselect
                      v-model="form.tourtypes"
                      :options="tour_type_list"
                      :multiple="true"
                      :close-on-select="true"
                      placeholder="Pick some"
                      label="name"
                      track-by="name">
                    </multiselect>

                  </div>
                </div>
              </div>






              <div class="row  mb-30">  
                <div class="col-sm-8">
                  <div class="form-group">
                      <label for="titleId">Title</label>
                      <input type="text" class="form-control"  placeholder="Enter Title"  name="title" v-model="form.title" :class="{ 'is-invalid': form.errors.has('title') }">
                      <has-error :form="form" field="title"></has-error>
                  </div>
                </div>

                <div class="col-sm-4">
                <div class="form-group">
                 <label for="tourtypeId">Food</label>   
                     <div>
                       <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input" id="food_yes" value="1" name="food" v-model="form.food">
                          <label class="custom-control-label" for="food_yes">Yes</label>
                        </div>

                        <!-- Default inline 2-->
                        <div class="custom-control custom-radio custom-control-inline">
                          <input type="radio" class="custom-control-input" value="0" id="food_no" name="food" v-model="form.food">
                          <label class="custom-control-label" for="food_no">No</label>
                        </div>
                     </div>
                    
                      <div class="error" v-if="form.errors.has('food')">
                        {{ form.errors.get("food") }}
                      </div>
                    </div>
                  </div>                          
                </div>
              <div class="form-group  mb-30">
                <label for="descriptionId">Description</label>

                 <ckeditor :editor="editor" class="form-control" id="description" v-model="form.description" :config="editorConfig"  :class="{ 'is-invalid': form.errors.has('description') }"></ckeditor>

                <has-error :form="form" field="description"></has-error>
              </div>
            <div class="row  mb-30">
                <div class="col-sm-6">
                  <div class="form-group" >
                    <input @change = "changePhoto($event)" name="photo" type="file" :class="{ 'is-invalid': form.errors.has('photo') }">
                    <img :src="img_photo" alt="" width="80" height="80">
                    <has-error :form="form" field="photo"></has-error>
                </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <input @change = "changeDetailPhoto($event)" name="detail_photo" type="file" :class="{ 'is-invalid': form.errors.has('detail_photo') }">
                      <img :src="img_detail_photo" alt="" class="detail_photo">
                      <has-error :form="form" field="detail_photo"></has-error>
                  </div>
                </div>
            </div>

            <hr>

              <div class="card"  v-for="(data,index) in itinerarydays">
                <h4>Day {{ data.day }}</h4>
                <div class="row">
                  <div class="col-sm-6">
                    <label>Source</label>

                    <model-select :options="options"
                        v-model="data.day_source"
                        placeholder="From">
                    </model-select>
                    {{ data.day_source.value }}

                    <!-- <input type="text" class="form-control" v-model="data.day_source"> -->
                  </div>
                  <div class="col-sm-6">
                    <label>Destination</label>
                    <model-select :options="options"
                        v-model="data.day_destination"
                        placeholder="To">
                    </model-select>

                    {{ data.day_destination.value }}
                  </div>

                  <div class="col-sm-12">
                    <label>Description</label>
                    <ckeditor :editor="editor" class="form-control" id="description" v-model="data.day_description" :config="editorConfig"  :class="{ 'is-invalid': form.errors.has('description') }"></ckeditor>
                  </div>
                  
                </div>
              </div>

            <div class="row mb-30">
              <div class="col-sm-12 text-center">
                <button type="submit" class="btn btn-primary itrn_add_btn">Update</button>
              </div>
            </div>                
          </form>
        </div>
      </div>
        <!-- /.row -->
    </div>

  </section>
</template>

<script>

import 'vue-search-select/dist/VueSearchSelect.css'
import { ModelSelect } from 'vue-search-select'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Multiselect from 'vue-multiselect'


export default {
  name: "Edit",
    components: {
      ModelSelect,Multiselect
    },
  data(){
    return {
    // Create a new form instance
     editor: ClassicEditor,
      editorConfig: {
          // The configuration of the editor.
      },
      options: [],
      sources: {value: '',text: ''},
      destinations: {value: '',text: ''},
      itinerarydays:[],
      img_photo:'',
      img_detail_photo:'',
      tour_type_list:[],

      selected: null,

      form: new Form({
        source: '',
        destination: '',
        noofdays: '',
        title: '',
        description: '',
        tourtype: '',
        hotel_type: '',
        photo:'',
        detail_photo:'',
        food:'',
        train:'',
        bus:'',
        flight:'',
        transport:'',
        tourtypes:[],
        itinerarydays:[{ day:1,day_source:'',day_destination:'',day_description:'' },],
        })
      }
  },


  created(){
    this.itineraryList();
    this.cityList();
    this.tourTypeData();
  },
  watch:{
    'sources.value':function(){
      this.form.source = this.sources['value'];
    },
    'destinations.value':function(){
      this.form.destination = this.destinations['value'];
    },
    
  },
  methods:
  {

    itineraryList(){
      axios.get(`/api/itinerary/${this.$route.params.itineraryid}/edit`).then((response)=>{
        setTimeout(() => $('#example').DataTable(), 1000);
        this.form.fill(response.data);
        console.log(this.form);
        var day_data = response.data.itinerarydays;

        this.sources.value = this.form.source;
        this.sources.text = this.form.source;

        this.destinations.value = this.form.destination;
        this.destinations.text = this.form.destination;


        for(var i=0;i<day_data.length;i++){
          if(this.itinerarydays.length != day_data.length){
            this.itinerarydays.push({day:day_data[i].day,day_source:{'value':day_data[i].day_source,'text':day_data[i].day_source},day_destination:{'value':day_data[i].day_destination,'text':day_data[i].day_destination},day_description:day_data[i].day_description});
          }
        }
        this.img_photo = '/uploadimage/'+this.form.photo;
        this.img_detail_photo = '/uploadimage/'+this.form.detail_photo;
 

      });
    },

    cityList(){
      axios.get('/api/city').then(response => {
        for(var i=0;i<response.data.data.length;i++){
          this.options.push({value:response.data.data[i].name,text:response.data.data[i].name})
        }
      });
    },

    tourTypeData(){
      axios.get('/api/tourtype').then((response)=>{
        this.tour_type_list = response.data;
      })
    },

    changePhoto(event){
        let file = event.target.files[0];

         if(file.size>10048576){
             swal({
                 type: 'error',
                 title: 'Oops...',
                 text: 'Something went wrong!',
                 footer: '<a href>Why do I have this issue?</a>'
             })
         }else{
             let reader = new FileReader();
             reader.onload = event => {
                 this.form.photo = event.target.result;
                 this.img_photo = this.form.photo;
             };
             reader.readAsDataURL(file);
         }
    },
    changeDetailPhoto(event){
      let file = event.target.files[0];
         if(file.size>10048576){
             swal({
                 type: 'error',
                 title: 'Oops...',
                 text: 'Something went wrong!',
                 footer: '<a href>Why do I have this issue?</a>'
             })
         }else{
             let reader = new FileReader();
             reader.onload = event => {
                 this.form.detail_photo = event.target.result
                 this.img_detail_photo = this.form.detail_photo;
             };
             reader.readAsDataURL(file);
         }
    },
    updateItinerary()
    {
        // Set noofdays in the local storage to make it avaliable to the daypage....
        localStorage.setItem("noofdays",this.form.noofdays);
        if((this.form.bus == 1) || (this.form.train == 1) || (this.form.flight == 1)){
          this.form.transport = '1';
        }
        
        // check if all the no of days fields are filled out
        for(var i=0; i< this.itinerarydays.length;i++){
          if((this.itinerarydays[i]['day_source'] == '') || (this.itinerarydays[i]['day_destination'] == '') || (this.itinerarydays[i]['day_description'] == '')){
            toast({
                type: 'error',
                title: 'Make sure you fill all the fields'
            })
            return false;
          }

          this.form.itinerarydays[i]['day_source'] = this.itinerarydays[i]['day_source'].value;;
          this.form.itinerarydays[i]['day_destination'] = this.itinerarydays[i]['day_destination'].value;
          this.form.itinerarydays[i]['day_description'] = this.itinerarydays[i]['day_description'];

        }

        // Submit the form via a itinerary request
        this.form.put(`/api/itinerary/${this.$route.params.itineraryid}`)
          .then((response)=>{
              this.$router.push(`/itinerary-list`)
                toast({
                    type: 'success',
                    title: 'Itinerary Updated successfully'
                })
            })
            .catch(()=>{
            })
    },

    addRow(){
      this.form.noofdays += 1;
      var index = this.form.itinerarydays.length;
      this.itinerarydays.push({day:index+1,day_source:{'value':'','text':''},day_destination:{'value':'','text':''},day_description:''});
      this.form.itinerarydays.push({day:index+1,day_source:'',day_destination:'',day_description:''});
      
    },
    removeRow(){
      if(this.form.noofdays == 0){
        return false;
      }
      this.form.noofdays -= 1;
      var index = this.form.itinerarydays.length-1;
      this.itinerarydays.splice(index, 1);
    },

  }
}
</script>

<style>
input[type='file']{
  width: 200px;
}
.detail_photo{
  height: 80px;
  width: 250px;
}
.ck-editor__editable {
  min-height: 200px !important;
 }


</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
