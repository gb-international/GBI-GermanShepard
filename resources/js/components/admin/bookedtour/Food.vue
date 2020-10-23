<template>
  <div>
    <div class="food-section container_admin_body">
      <div class="row">
          <div class="col-sm-12 float-right mb-4 mt-1">
            <span
                class="top_black_btn"
                data-toggle="modal"
                data-target="#foodModal"
                @click="foodModal()">NEW FOOD</span>
          </div>
        <div class="col-sm-12">
          <table
            id="example"
            class="display table table-striped table-bordered nowrap"
            style="width: 100%"
          >
            <thead>
              <tr>
                <th>FOOD ITEM <i class="fas fa-sort"></i></th>
                <th>QUANTITY <i class="fas fa-sort"></i></th>
                <th><i class="fas fa-cog"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(food, index) in foods"
                role="row"
                v-bind:class="{ odd: oddclass, even: evenclass }"
                class="row_list"
                :key="food.id"
              >
                <td>{{ food.name }}</td>
                <td>{{ food.quantity }}</td>
                <td class="edit_section">
                  <span
                    data-toggle="modal"
                    data-target="#foodModal"
                    @click="editFood(food, index)"
                    class="edit_link pointer"
                  >
                    <span class="badge badge-primary" title="View Itinerary"
                      ><i class="fas fa-pencil-alt"></i
                    ></span>
                  </span>

                  <span
                    class="delete_link pointer"
                    @click.prevent="deletefood(food.id, index)"
                    ><span class="badge badge-danger"
                      ><i class="far fa-trash-alt"></i></span
                  ></span>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!--Food Modal -->
    <div class="modal" id="foodModal">
      <div class="modal-dialog">
        <div class="modal-content simple-form-bg">
          <!-- Modal body -->
          <div class="modal-body">
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
            <p>Add New Food</p>
            <form @submit.prevent="submitForm()">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.name"
                  :class="{ 'is-invalid': form.errors.has('name') }"
                />
                <has-error :form="form" field="name"></has-error>
              </div>

              <div class="form-group">
                <label for="name">Quantity</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.quantity"
                  :class="{ 'is-invalid': form.errors.has('quantity') }"
                />
                <has-error :form="form" field="quantity"></has-error>
              </div>
              <button
                type="submit"
                v-if="editid == ''"
                class="btn itrn_add_btn"
              >
                SAVE
              </button>
              <button
                type="button"
                v-if="editid != ''"
                class="btn itrn_add_btn"
                @click="updateFood()"
              >
                UPDATE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, HasError } from "vform";

export default {
  name: "Foods",
  components: { Form, "has-error": HasError },
  data() {
    return {
      foods: [],
      oddclass: false,
      evenclass: true,
      form: new Form({
        name: "",
        quantity: "",
        tour_id: this.$route.params.tour_id,
        tour_code: this.$route.params.tour_code,
      }),
      editid: "",
      updateindex: "",
    };
  },
  created() {
    this.getFoods();
  },
  methods: {
    getFoods() {
      axios.get(`/api/foods/${this.$route.params.tour_id}`).then((response) => {
        setTimeout(() => $("#example").DataTable(), 1000);
        this.foods = response.data;
      });
    },
    submitForm() {
      this.form
        .post(`/api/foods`)
        .then((response) => {
          this.foods.unshift(response.data);
          $(".close").click();
          this.$swal.fire("Success", "Successfully Added !!!", "success");
        })
        .catch(() => {});
    },
    updateFood() {
      this.form
        .patch(`/api/foods/${this.editid}`)
        .then((response) => {
          this.getFoods();
          this.$swal.fire("Success", "Successfully updated !!!", "success");
          $(".close").click();
        })
        .catch(() => {});
    },

    // Delete Row
    deletefood(id,index) {
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
            this.form.delete(`/api/foods/${id}`)
              .then((response) => {
                this.$swal.fire(
                  "Deleted!",
                  "Member Deleted deleted.",
                  "success"
                );
                this.foods.splice(index, 1);
              })
              .catch((error) => {
                this.handleError(error);
              });
          }
        });
    },

    editFood(food, index) {
      this.form.fill(food);
      this.editid = food.id;
      this.updateindex = index;
    },
    foodModal(){
        this.form.name = '';
        this.form.quantity = '';
        this.editid = '';
        this.updateindex = '';
    }
  },
};
</script>