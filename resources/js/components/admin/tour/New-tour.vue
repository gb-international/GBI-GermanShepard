<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <section class="content">
    <div class="container-fluid">
      <!--************************************************
        Template Type: Adding New Hotel
        Author:@Ajay

        ****************************************************-->
      <div class="row justify-content-around">
          <!-- left column -->
        <div class="col-md-12">
          
          <form role="form" enctype="multipart/form-data" @submit.prevent="AddSchool()">
              <div class="row">        
                  <div class="col-sm-4">
                    <div class="form-group">
                        <label for="tour_id">Tour Code</label>
                        <input type="text" class="form-control" v-model="form.tour_id" :class="{ 'is-invalid': form.errors.has('tour_id') }"  placeholder="Enter School name">
                        <has-error :form="form" field="tour_id"></has-error>
                    </div>
                  </div>
                  
                  <div class="col-sm-4">
                    <div class="form-group">
                        <label for="itinerary_id">Itinerary</label>

                        <select class="form-control" v-model="form.itinerary_id">
                          <option v-for="data in itinerary_list" :value="data.id">{{ data.title }}</option>
                        </select>
                        <div class="error" v-if="form.errors.has('itinerary_id')">
                          <label class="danger text-danger">{{ form.errors.get("itinerary_id") }}</label>
                        </div>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="form-group">
                        <label for="itinerary_id">School</label>

                        <select class="form-control" v-model="form.school_id">
                          <option v-for="data in school_list" :value="data.id">{{ data.school_name }}</option>
                        </select>
                        <div class="error" v-if="form.errors.has('school_id')">
                          <label class="danger text-danger">{{ form.errors.get("school_id") }}</label>
                        </div>
                    </div>
                  </div>


                  <div class="col-sm-4">
                    <div class="form-group">
                        <label for="tour_start_date">Tour Start Date</label>
                        <input type="date" class="form-control"  placeholder="Enter Tour Start Date" v-model="form.tour_start_date" :class="{ 'is-invalid': form.errors.has('tour_start_date') }">
                        <has-error :form="form" field="tour_start_date"></has-error>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="form-group">
                        <label for="tour_end_date">Tour End Date</label>
                        <input type="date" class="form-control"  placeholder="Enter Enter Date" v-model="form.tour_end_date" :class="{ 'is-invalid': form.errors.has('tour_end_date') }">
                        <has-error :form="form" field="tour_end_date"></has-error>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="form-group">
                        <label for="tour_price">Tour Price</label>
                        <input type="text" class="form-control"  placeholder="Enter Tour Price" v-model="form.tour_price" :class="{ 'is-invalid': form.errors.has('tour_price') }">
                        <has-error :form="form" field="tour_price"></has-error>
                    </div>
                  </div>                                           
                
              </div>

              <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                  <div class="form-group text-center">
                    <button type="submit" class="btn btn-primary btn-block itrn_add_btn">SUBMIT</button>
                  </div>
                </div>
                <div class="col-sm-4"></div>
              </div>


          </form>

        </div>
      </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
  </section>
</template>

<script>
export default {
  name: "New",
  data(){
    return {
      // Create a new form instance
      itinerary_list:[],
      school_list:[],
      tours:[],
      form: new Form({
        tour_id: '',
        itinerary_id:'',
        school_id: '',
        tour_start_date: '',
        tour_end_date: '',
        tour_price: '',
      })
    }
  },
  created(){
    this.tourData();
    this.schoolData();
    this.itineraryData();

    
  },
  methods:
  {
    schoolData(){
      axios.get(`/api/school`).then(response => {
        if(response.data){
          this.school_list = response.data.data;
        }
      });
    },
    
    itineraryData(){
      axios.get(`/api/itinerary`).then(response => {
        if(response.data){
          this.itinerary_list = response.data.data;
        }
      });
    },

    tourData(){
      axios.get(`/api/tour`).then(response => {
        if(response.data){
          this.tours = response.data.data;
          if(this.tours.length >= 1){
            var last_id = this.tours[this.tours.length-1].id;
            last_id++;
            var javaScriptRelease = 'TOURCODE000' + last_id;
            this.form.tour_id = javaScriptRelease;              
          }
        }
      });

    },

    AddSchool()
    {
      // Submit the form via a itinerary request
      this.form.post('/api/tour').then((response)=>{
        this.$router.push(`/tours/`)
        toast({
            type: 'success',
            title: 'School Added successfully'
        })
        }).catch(()=>{

      })
    }
  }
}
</script>

<style scoped>

</style>  