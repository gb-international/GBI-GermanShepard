<template>
  <!-- Remove this dummy_height when you add some data to this page -->
  <div class="State"  v-if="state_data">
    <section class="banner-block">
      <img id="traveleduimg" class="top-img" :src="getImgUrl(state_data.banner_image)">
    </section> 
    <div class="container state_body mt-30">
      <div class="row">
        <div class="col-sm-8">
          <h4 class="state_name mb-20">{{ state_data.state_name }}</h4>
          <div class="state_description" v-html="state_data.description"></div>          
        </div>        
        <div class="col-sm-4">
          <div class="card state_card">
            <div class="map_show" v-html="state_data.map_link"></div>
          </div>

          <div class="card state_images">
            <div class="row">
              <div class="col-6">
                <img :src="getImgUrl(state_data.image_one)">
              </div>
              <div class="col-6">
                <img :src="getImgUrl(state_data.image_two)">
              </div>
              <div class="col-6">
                <img :src="getImgUrl(state_data.image_three)">
              </div>
              <div class="col-6">
                <img :src="getImgUrl(state_data.image_four)">
              </div>
              <div class="col-6">
                <img :src="getImgUrl(state_data.image_five)">
              </div>
              <div class="col-6">
                <img :src="getImgUrl(state_data.image_six)">
              </div>
              <div class="col-6">
                <img :src="getImgUrl(state_data.image_seven)">
              </div>
              <div class="col-6">
                <img :src="getImgUrl(state_data.image_eight)">
              </div>
            </div>
          </div>
          <div class="card state_card">
            <p class="link" v-for="pdf in state_data.itinerarypdfs" data-toggle="modal" data-target="#pdf_modal" @click="pdfShow(pdf.name)">
              {{ pdf.name | pdfFilter  }}
            </p>
            <!-- <router-link class="text-right" :to="`/explore-list`">View More</router-link> -->
          </div>
        </div>
      </div>

      <!-- State Crasoul -->

      <div class="row">
        <div class="col-sm-12">
          <div class="state_list" v-if="state_list.length">
            <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
              <div class="card_scroll states_card" v-for="state in state_list">
                <p>
                  <div class="card">
                    <img class="card-img-top" :src="getImgUrl(state.thumbnail)" alt="Card image">
                    <div class="card-img-overlay text-center">
                       <p class="card-text text-white"><router-link :to="`/encyclopedia/${state.slug}`">
                       {{state.state_name}}</router-link></p>
                    </div>
                  </div>
                </p>
              </div>
            </VueSlickCarousel>
          </div>
        </div>

        <!-- end state scroll -->
        
        <div class="col-sm-12">
          <div class="col-md-8">
            <div class="comment_section">
              <div class="container mt-3">
                <h4>Reviews</h4>

                <form class="form" @submit.prevent="addComment()">
                  <div class="form-group">
                    <textarea class="form-control" rows="3" v-model="form.body" placeholder="Share your experiences and insights with us" :class="{ 'is-invalid': form.errors.has('body') }"></textarea>
                    <has-error :form="form" field="body"></has-error>
                    <div class="row">
                      <div class="col text-right">
                        <button type="submit" class="btn btn-info profile_button comment_btn">Submit</button>                      
                      </div>
                    </div>
                  </div>
                </form>

                <div class="comment_section" v-for="comment in comment_data">
                  <div class="media p-3" v-if="comment.parent_id == null">
                    <img :src="getProfileImage(comment.user.information.photo)" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;">
                    <div class="media-body">
                      <h4>{{ comment.user.name }} <small class="text-small"><i>{{ comment.created_at }}</i></small>
                        <button class="btn btn-outline-dark float-right" @click="ReplyModal(comment.id)"> Reply</button>
                      </h4>
                      <p>{{ comment.body }}</p>

                      <!-- <div class="my-4 pt-1 d-flex justify-content-between">
                        <div>
                          <i class="far fa-thumbs-up text-action text-success mr-3" data-toggle="tooltip" data-placement="top" aria-hidden="true"></i><span class="font-small font-weight-light">4 likes</span>
                        </div>

                      </div> -->

                      <!-- Reply form -->
    
                      <div v-if="reply_modal == true && comment_id == comment.id">
                        <form class="form" @submit.prevent="ReplySubmit()">
                          <div class="form-group">
                            <textarea class="form-control" rows="3" v-model="reply_input" placeholder="Type here..."></textarea>
                            <div class="row">
                              <div class="col text-right">
                                <button type="submit" class="btn btn-info profile_button comment_btn">Submit</button>                      
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>

                      <!-- end of reply button -->

                      <div class="media p-3" v-for="reply in state_data.comments" v-if="reply.parent_id == comment.id">
                        <img :src="getProfileImage(comment.user.information.photo)" alt="Jane Doe" class="mr-3 mt-3 rounded-circle" style="width:45px;">
                        <div class="media-body">
                          <h4>{{ comment.user.name }} <small class="text-small"><i>{{ comment.created_at }}</i></small></h4>
                          <p>{{ reply.body }} </p>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>

              <!-- -->
  
            </div>
            </div>
          </div>
        </div>
      </div>

      <!-- The Modal -->
      <div class="modal fade" id="pdf_modal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content" v-if="show">

            <!-- Modal Header -->
            <div class="modal-header">
              <button type="button" @click="show = !show" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
              <!-- <iframe style="width: 100%; height: 800px" id="myFrame" ></iframe> -->
              <span  class="loading" v-if="loadedRatio != 1"></span>
              <pdf 
                v-if="show" 
                ref="pdf" 
                :src="src" 
                :page="page" 
                 @password="password" 
                @progress="loadedRatio = $event" 
                @error="error" 
                @num-pages="numPages = $event" 
                @link-clicked="page = $event">
              
            </pdf>
            </div>
            <!-- Modal footer -->
            <div class="modal-footer">
              <div id="pagination">
               Page : <a href="#" class="btn btn-default" v-for="page_num in numPages" @click="updateCurrent(page_num)">
                  {{ page_num }}
                </a>
              </div>
              <button type="button"  @click="show = !show" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <!-- end modal -->
    </div>
  </div>
</template>
<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import pdf from 'vue-pdf'

export default {
  name:"State",
  components: { VueSlickCarousel,pdf },
  data() {
    return {
      settings:{
        "dots": true,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "initialSlide": 0,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "infinite": true,
              "dots": true
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "initialSlide": 2
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
      },

      state_data:[],
      comment_data:[],
      state_list:[],
      reply_modal:false,
      comment_id:false,
      encyclopedia_id:'',
      reply_input:'',

      show: false,
      src:'',
      loadedRatio: 0,
      page: 1,
      numPages: 0,

      form: new Form({
        body: '',
        encyclopedia_id:'',
        parent_id:null
        })
    }
  },
  watch:{
    '$route.params.id': function (id) {
      this.stateData();
      this.scrollToTop();
    },
    'loadedRatio':function(){
      console.log(this.loadedRatio);
    },
  },

  created:function(){
    this.stateData();
    this.states();
    this.scrollToTop();
  },
  methods: {

    updateCurrent(page_num){
      this.page = page_num;
    },
    pdfShow(name){
      this.src = '';
      this.show = true;
      this.src = '/encyclopedia/pdf/'+name;
      console.log(this.src);
    },
    password: function(updatePassword, reason) {
 
        updatePassword(prompt('password is "test"'));
    },
    error: function(err) {

        console.log(err);
    },


    stateData(){
      var api = `/api/encyclopedia/${this.$route.params.id}`;
      axios(api).then((response)=>{
        this.state_data = response.data;
        this.form.encyclopedia_id = this.state_data.id;
        this.stateComments();
      });
    },
    stateComments(){
      var url = `/api/ency-comments/${this.form.encyclopedia_id}`;
      axios(url).then((response)=>{
        this.comment_data = response.data;
      });
    },
    states(){
      axios.get('/api/encyclopedia-list').then((response)=>{
        this.state_list = response.data;
      });
    },

    ReplyModal(comment_row){
      if(this.$session.get('login') == undefined){
        $("#loginButton").click();
        return false;
      }
      this.reply_modal = !this.reply_modal;
      this.comment_id = comment_row;
    },
    ReplySubmit(){
      this.reply_modal = !this.reply_modal;
      this.form.parent_id = this.comment_id;
      this.form.body = this.reply_input;
      this.reply_input = '';
      this.addComment();
    },

    getImgUrl(img){
      return '/encyclopedia/'+img;
    },

    getProfileImage(img){
      return '/uploadimage/'+img;
    },

    addComment(){
      if(this.$session.get('login') == undefined){
        $("#loginButton").click();
      }else{
        // add data to the database 
        axios.post("/api/encyclopedia-comments", this.form, {
            headers: {
              Authorization: `Bearer ${this.$session.get('access_token')}`
            }
          })
          .then(response => {
            this.stateData();
            this.stateComments();
            this.form.body = '';
            this.form.parent_id = null;
          });
      }
    },

    goToState(slug){
      var url = `/encyclopedia/`+slug;
      this.$router.push(url);
    },
    scrollToTop() {
      window.scrollTo(0,0);
    }
  },
  filters: {
    pdfFilter: function(string) {
      return string.replace(".pdf",'');
    }
  }
}
</script>



<style scoped="scoped">
.loading {
  height: 0;
  width: 0;
  padding: 15px;
  border: 6px solid #ccc;
  border-right-color: #888;
  border-radius: 22px;
  -webkit-animation: rotate 1s infinite linear;
  /* left, top and position just for the demo! */
  position: absolute;
  left: 50%;
  top: 50%;
}

@-webkit-keyframes rotate {
  /* 100% keyframe for  clockwise. 
     use 0% instead for anticlockwise */
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>