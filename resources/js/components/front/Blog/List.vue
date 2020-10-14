<template>
  <!--*****    Author:@Ajay  **********-->
  <div id="BlogList">
    <div class="howwework_banner text_on_image banner_bg">
      <div class="content-blog-banner">
        <h1 class="text-center blog-heading">Travel Blog</h1>
        <div class="search-blog-form">
          <form method="post" novalidate="novalidate">
            <div class="col-lg-12">
              <div class="row justify-content-center">
                <div class="col-lg-9 col-md-6 col-sm-12 p-0">
                  <input
                    type="text"
                    v-model="searchQuery"
                    class="form-control search-slt"
                    placeholder="Enter the place"
                  />
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                  <div class="select-cat">
                    <select
                      class="form-control search-slt"
                      id="exampleFormControlSelect1"
                    >
                      <option>Select Vehicle</option>
                      <option>Example one</option>
                      <option>Example one</option>
                    </select>
                    <i class="fas fa-caret-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <p class="text-center"><button type="submit" class="btn btn-defalt btn-lg center-block profile_button">Search</button></p>
      </div>
    </div>

    <div class="blog-list mt-3">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4 mb-4 border-radius-0" v-for="post in resultQuery" :key="post.id">
            <blog-card :post="post" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from './BlogCard';
export default {
  name: "BlogList",
  components:{ BlogCard },
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

  data() {
    return {
      posts:[],
      posts_list:[],
      searchQuery:'',
    };
  },
  mounted(){
    this.blogList();
  },
  methods:{
    blogList(){
      this.$axios.get("/api/blog-list").then(response => {
        this.posts = response.data;
        this.posts_list = this.posts.data;
      });
    },
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.posts_list.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.posts_list;
      }
    }
  }
};
</script>
