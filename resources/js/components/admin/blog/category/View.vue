<!-- 

This template helps us to create a View Category it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <section class="content">
    <div class="container-fluid">
      <!--************************************************
        Template Type: Adding View Category
        Author:@Ajay
        ****************************************************-->
        <h2 class="text-center">
          Category View
        </h2>
        <hr />
      <div class="row">
        <div class="col-sm-12">
          <h5>Title</h5>
          <p>{{categories.title }}</p>
        </div>

        <div class="col-sm-4">
          <h5>Banner image </h5>
          <img :src="imagePath(categories.image)" />
        </div>

        <div class="col-sm-12">
          <h5>Description</h5>
          <p v-html="categories.description"></p>
        </div>

        
        <div class="col-sm-4">
          <h5>Slug </h5>
          <p>{{ categories.slug }}</p>
        </div>
        
        <div class="col-sm-4">
          <h5>Meta Title </h5>
          <p>{{ categories.meta_title }}</p>
        </div>

        <div class="col-sm-4">
          <h5>Meta Keyword </h5>
          <p>{{ categories.meta_keyword }}</p>
        </div>
        
        <div class="col-sm-4">
          <h5>Created At </h5>
          <p>{{ categories.created_at }}</p>
        </div>


        <button @click="goBack()" class="btn btn-primary itrn_add_btn back_btn">Back</button>

      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "ViewCategories",
  data() {
    return {
      categories:[]
    };
  },
  created() {
    this.categoryView();
  },
  methods: {
    categoryView() {
      axios.get(`/api/categories/${this.$route.params.id}`).then((response) => {
        this.categories = response.data;
      });
    },

    imagePath(img){
        return '/images/post/'+ img;
    },
    goBack(){
        this.$router.push('/categories');
    }
  },
};
</script> 