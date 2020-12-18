<!--
This Template is for listing for the Category profile using function to get the 
data from the api to display the data about the Category from the backend .
-->
<template>
  <section class="content">
    <!--************************************************
    Template Type: Category List
    Author:@Ajay
    ****************************************************-->
    <div class="row justify-content-around">
      <div class="col-md-12">
        <div class="container container_admin_body list-section">

          <b-row class="mb-3 mt-1" align-h="between">
              <b-col md="3" cols="4"  class="top_btn p-0">
                <router-link :to="`/posts-add`" class="text-uppercase">Add Post</router-link>
              </b-col>
              <b-col cols="2"></b-col>
              <b-col cols="3" class="p-0">
                <b-form-group
                  label="Per page"
                  label-for="per-page-select"
                  label-cols-sm="6"
                  label-cols-md="4"
                  label-cols-lg="3"
                  label-align-sm="right"
                  label-size="sm"
                  class="mb-0"
                >
                  <b-form-select
                    id="per-page-select"
                    class="radius-0"
                    v-model="perPage"
                    :options="options"
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="3" cols="4" class="p-0">
                <b-form-input v-model="filter" type="search" placeholder="Type to Search" class="radius-0"></b-form-input>
              </b-col>
          </b-row>
          <b-row>
            <b-table
              id="table-transition"
              striped
              hover
              outlined
              sticky-header="405px"
              class="w-100 table-layout"
              :fields="fields"
              :items="posts.data"
              :busy="isBusy"
              :filter="filter"
              primary-key="updated_at"
              :tbody-transition-props="transProps"
            >
            
              <template #table-busy>
                <div class="text-center admin-bg-color my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
                </div>
              </template>

              <template #cell(status)="data">
                <span 
                    v-if="data.item.status == 1" 
                    class="badge badge-success">Publish</span>
                <span class="badge badge-default" v-else>Draft</span>
              </template>
              <template #cell(action)="data">
               
                <router-link
                    :to="`/posts/${data.item.id}`"
                    class="edit_link"
                  >
                    <span class="badge badge-primary"
                      ><i class="fas fa-pencil-alt"></i
                    ></span>
                  </router-link>
                  <a
                    href=""
                    class="delete_link"
                    @click.prevent="deletePost(data.item.id)"
                    ><span class="badge badge-danger"
                      ><i class="far fa-trash-alt"></i></span
                  ></a>

                  <router-link
                    :to="`/posts-view/${data.item.id}`"
                    class="edit_link"
                  >
                    <span class="badge badge-primary" title="View Itinerary"
                      ><i class="fas fa-eye"></i
                    ></span>
                  </router-link>
              </template>
            </b-table> 
            
            <div class="w-100" v-if="posts.data">
              <pagination :data="posts" @pagination-change-page="getposts" :align="`right`">
                <span slot="prev-nav">Previous</span>
                <span slot="next-nav">Next</span>
              </pagination>
            </div>
          </b-row>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import  pagination  from 'laravel-vue-pagination';
export default {
  name: "List",
  components:{
    'pagination':pagination
  },
  data() {
    return {
      transProps: {
        // Transition name
        name: 'flip-list'
      },
      oddclass: false,
      evenclass: true,
      fields: [
        {key:'title',label:'TITLE',sortable:true,thClass: 'table-head'},
        {key:'status',label:'STATUS',sortable:true,thClass: 'table-head'},
        {key:'updated_at',label:'LAST UPDATE',sortable:true,thClass: 'table-head'},
        {key:'action',label:'ACTION',thClass: 'table-head'}
      ],
      posts: [],
      filter:'',
      perPage:7,
      options:[7,25,50,100],
      isBusy: false,
    };
  },
  mounted() {
    this.getposts();
  },
  watch:{
    perPage:function(){
      
      this.getposts(1,this.perPage);

      console.log(this.perPage);
    }
  },

  methods: {

    getposts(page=1,size= this.perPage) {
      this.isBusy = true;
      axios.get('/api/posts/all/'+size+'?page='+page).then((response) => {
        this.isBusy = !this.isBusy
        this.posts = response.data;
      });
    },

    deletePost(id) {
      var uri = "api/posts/" + id;
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.value) {
            axios.delete(uri).then((response) => {
              this.getposts();
            });
            this.$swal.fire(
              "Deleted!",
              "Category has been deleted.",
              "success"
            );
          }
        });
    },
  },
};
</script>