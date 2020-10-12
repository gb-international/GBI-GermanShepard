<template>
  <!--*****    Author:@Ajay  **********-->
  <div id="BlogDetail">
    <div class="banner-image-parent">
      <img :src="getImgPath(posts.image)" />
      <div class="container">
        <h1 class="text-center blog-heading">{{posts.title }}</h1>
      </div>
    </div>
    

    <div class="container mt-2">
        <div class="blog-detail">
            <p class="text-muted mb-2">GBI-Blog > Travel Blog > Romentic > Blog Details</p>

            <div class="text-left mb-2 author-blog">
              <img src="/assets/front/images/logo-avatar.png" class="img-rounded avatar-author mr-2" />
              <p class="m-0 font-14 text-muted">GBI-Author<br>Last updated : {{ posts.updated_at }}</p>
            </div>
            <div class="description mb-2">
              <!-- Write Description here -->
              <p v-html="posts.description"></p>
              <div class="mt-3">
                <span class="text-dark card-tag mr-2 p-1 pr-2 pl-2" v-for="tag in posts.tags" :key="tag.id">{{ tag.title }}</span>
              </div>
            </div>
            <div class="mt-4">
              Read More : 
              <div class="col-sm-12">
                <div class="posts" v-if="posts.length">
                  <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
                      <div class="card_scroll states_card" v-for="state in posts" :key="state.id">
                      <div class="card">
                          <img
                          class="card-img-top"
                          :src="getImgPath(state.thumbnail)"
                          loading="lazy"
                          :alt="state.state_name"
                          />
                          <div class="card-img-overlay text-center">
                          <p class="card-text text-white">
                              <router-link :to="`/encyclopedia/${state.slug}`">{{state.state_name}}</router-link>
                          </p>
                          </div>
                      </div>
                      </div>
                  </VueSlickCarousel>
                </div>
              </div>
 
            </div>
            <div class="comment-section mt-2">
              <h4 class="">Comment : </h4>
              
              <div class="row">
                <div class="col-sm-8">
                  <form class="form" @submit.prevent="addComment()">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        rows="3"
                        v-model="form.body"
                        placeholder="Type here..."
                        :class="{ 'is-invalid': form.errors.has('body') }"
                      ></textarea>
                      <has-error :form="form" field="body"></has-error>
                      <div class="row">
                        <div class="col text-right">
                          <button type="submit" class="btn btn-info profile_button comment_btn">Submit</button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div class="media border p-3">
                    <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="John Doe" class="avatar-author mr-3 mt-3 rounded-circle">
                    <div class="media-body">
                      <h6>John Doe <small><i>Posted on February 19, 2016</i></small></h6>
                      <p>Lorem ipsum...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import { Form, HasError, AlertError } from "vform";
export default {
  name: "BlogDetail",
    components: { VueSlickCarousel, Form, HasError },
    metaInfo: {
      title: "How We Work",
      meta: [
        {
          name: "description",
          content:
            "@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one",
        },
        {
          name: "keywords",
          content:
            "@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs",
        },
        {
          name: "url",
          content: "https://www.gowithgbi.com/about-us/how-we-work",
        },
        { name: "type", content: "website" },
      ],
    },

  data(){
    return{
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
      },
      posts:[],
      form: new Form({
        body: "",
        encyclopedia_id: "",
        parent_id: null
      }),
    }
  },
  mounted(){
    this.getRelatedBlogs();
  },
  methods:{
    getRelatedBlogs(){
      this.$axios.get(`/api/getpost/${this.$route.params.slug}`).then(response => {
        this.posts = response.data;
        console.log(this.posts);
      });
    },
    getImgPath(img){
      return `/images/post/`+img;
    },
    addComment(){

    },
  }
};
</script>
