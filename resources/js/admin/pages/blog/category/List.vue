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
            <router-link :to="`/categories-add`">Add Category</router-link>
          </div>
          <table
            id="example"
            class="display table table-striped table-bordered nowrap"
            style="width: 100%"
          >
            <thead>
              <tr>
                <th>NAME <i class="fas fa-sort"></i></th>
                <th>Description <i class="fas fa-sort"></i></th>
                <th><i class="fas fa-cog"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="category in categories"
                role="row"
                v-bind:class="{ odd: oddclass, even: evenclass }"
                class="row_list"
                :key="category.id"
              >
                <td>{{ category.title }}</td>
                <td v-html="category.description"></td>
                <td class="edit_section">
                  <router-link
                    :to="`/categories/${category.id}`"
                    class="edit_link"
                  >
                    <span class="badge badge-primary"
                      ><i class="fas fa-pencil-alt"></i
                    ></span>
                  </router-link>
                  <a
                    href=""
                    class="delete_link"
                    @click.prevent="deleteCategory(category.id)"
                    ><span class="badge badge-danger"
                      ><i class="far fa-trash-alt"></i></span
                  ></a>

                  <router-link
                    :to="`/categories-view/${category.id}`"
                    class="edit_link"
                  >
                    <span class="badge badge-primary" title="View Itinerary"
                      ><i class="fas fa-eye"></i
                    ></span>
                  </router-link>
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
      categories: [],
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      axios.get("/api/categories").then((response) => {
        setTimeout(() => $("#example").DataTable(), 1000);
        this.categories = response.data;
      });
    },

    deleteCategory(id) {
      var uri = "api/categories/" + id;
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
              this.getCategories();
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