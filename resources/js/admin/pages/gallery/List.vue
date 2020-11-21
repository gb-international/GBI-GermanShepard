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
        <div class="container container_admin_body">
          <div class="top_btn mb-4">
            <router-link :to="`/gallery-add`">Add Gallery</router-link>
          </div>
          <table
            id="example"
            class="display table table-striped table-bordered nowrap"
            style="width: 100%"
          >
            <thead>
              <tr>
                <th>TITLE <i class="fas fa-sort"></i></th>
                <th>CATEGORY NAME <i class="fas fa-sort"></i></th>
                <th>SCHOOL NAME <i class="fas fa-sort"></i></th>
                <th><i class="fas fa-cog"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="post in posts"
                role="row"
                v-bind:class="{ odd: oddclass, even: evenclass }"
                class="row_list"
                :key="post.id"
              >
                <td>{{ post.title }}</td>
                <td>{{ post.school.school_name }}</td>
                <td>{{ post.category }}</td>

                <td class="edit_section">
                  <router-link
                    :to="`/gallery/${post.id}`"
                    class="edit_link"
                  >
                    <span class="badge badge-primary"
                      ><i class="fas fa-pencil-alt"></i
                    ></span>
                  </router-link>
                  <a
                    href=""
                    class="delete_link"
                    @click.prevent="deleteGallery(post.id)"
                    ><span class="badge badge-danger"
                      ><i class="far fa-trash-alt"></i></span
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      oddclass: false,
      evenclass: true,
      posts: [],
    };
  },
  mounted() {
    this.getposts();
  },
  methods: {
    getposts() {
      axios.get("/api/gallery").then((response) => {
        setTimeout(() => $("#example").DataTable(), 1000);
        this.posts = response.data;
      });
    },

    deleteGallery(id) {
      var uri = "api/gallery/" + id;
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