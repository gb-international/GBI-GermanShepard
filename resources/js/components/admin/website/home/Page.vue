<!--
This Template is for listing for the encyclopedia profile using function to get the 
data from the api to display the data about the encyclopedia from the backend .
-->
<template>
    <section class="content">
<!--************************************************
      Template Type: encyclopedias List
      Author:@Ajay
 ****************************************************-->
        <div class="card">
          <div class="row content-justify-around" >
            <div class="col-sm-7">
              <div class="card" v-if="video_data[0]">
                <!-- <video width="100%" controls controlsList="nodownload">
                  <source :src="`/assets/front/`+video_data[0].video" type="video/mp4">
                  Your browser does not support HTML5 video.
                </video> -->

               <p v-html="video_data[0].video"></p>

              </div>
            </div>
            <div class="col-sm-5">
              <form class="form" role="form" enctype="multipart/form-data" @submit.prevent="UpdateVideo()">


                  <div class="form-group itinerary_video">
                    <label class="label" for="video">Please upload video !</label><br>
                      <textarea v-model="form.video" rows="6" :class="{ 'is-invalid': form.errors.has('video') }" accept=".mp4" class="select_video"></textarea>
                      <has-error :form="form" field="video"></has-error>
                  </div>


                  <div class="row content-justify-center" style="margin:0 auto;">
                    <div class="col-sm-4">
                      <div class="form-group">
                        <button type="submit" class="btn btn-primary itrn_add_btn">UPDATE</button>
                      </div>
                    </div>
                  </div>


              </form>
            </div>

          </div>
        </div>
    </section>
    <!-- /.content -->
</template>

<script>
export default {
  name: "List",
  data(){
    return{
      oddclass:false,
      evenclass:true,
      video_data:[],
      form: new Form({
        video:'',
      })
    }
  },
  created(){
    this.videoData();
  },

   methods:{
    videoData(){
      axios.get('/api/website').then((response)=>{
        setTimeout(() => $('#example').DataTable(), 1000);
        this.video_data = response.data;
        console.log(this.video_data);
      })
    },
    UpdateVideo()
    {
       var api = `/api/website/${this.video_data[0].id}`;
       this.form.put(api).then((response)=>{
             console.log(response);
             this.video_data = '';
             this.videoData();
              toast({
                  type: 'success',
                  title: 'Itinerary Updated successfully'
              })
           }).catch(()=>{})
    },

    deletetourprogram(id){
      var uri = '/api/tourprogram/'+id;
      swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          axios.delete(uri).then((response)=>{
            console.log(response);
            this.encyclopediaData();
                
          })
          swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
           
        }
      });
    }

   } 
}


</script>

<style scoped="">
  img{
    width: 60px;
  }
</style>