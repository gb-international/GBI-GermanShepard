<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div class="container">
    <div class="AddGroup group_list p-t-15">
      <div class="row mb-10">
        <div class="col">
          <!-- <button type="button" class="btn btn-primary" data-toggle="modal"
          data-target="#AddRowModal">ADD Number of person</button> -->
          <a class="text-dark" :href="`/assets/sample-group-list.xlsx`"><i class="fas fa-print"></i></a>
        </div>

        <div class="col">
          <div class="search-box">
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control" placeholder="Search">
            </div>
          </div>

        </div>
      </div>

      <div class="row">
        <table class="table table-hover add_group_table text-dark">
          <thead>
            <th>Sr.No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Contact No.</th>
          </thead>
          <tbody>
            <tr  v-for="(data,index) in total_row" :key="data.id">
              <td>{{ index+1 }}</td>
              <td><input type="text" class="form-control" v-model="data.first_name"></td>
              <td><input type="text" class="form-control" v-model="data.last_name"></td>
              <td><input type="text" class="form-control" v-model="data.email"></td>
              <td><input type="text" class="form-control" v-model="data.gender"></td>
              <td>
                <div class="row">
                  <div class="col-8">
                    <input type="text" class="form-control" v-model="data.mobile">
                  </div>
                  <div class="col-4 justify-content-end">
                    <div class="form-group action_item">
                        <img class="edit" :src="`/assets/front/icons/edit.png`">
                        <img class="delete" :src="`/assets/front/icons/delete.png`" @click="delete_row(index)">
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="row w-100 justify-content-center">
          <button type="button" class="btn btn-primary ml-10" @click="UserTourSave()">DOWNLOAD PDF</button>
        </div>        
      </div>
    </div>

  </div>
</template>

<script>
import { Form, HasError, AlertError } from "vform";
import XLSX from "xlsx";
export default {
  name: "AddGroup",
  components: {
    "has-error": HasError,
  },
  data() {
    return {
      excel_form: new Form({
        excel_file: ""
      }),
      total_row: '',
    };
  },

  mounted(){
    this.groupMember();
  },

  methods: {
    groupMember(){
      var data = {tour_id : this.$route.params.id};
      this.$axios
        .post("/api/group-member", data, {
          headers: { Authorization: `Bearer ${localStorage.token}` }
        })
        .then(response => {
            this.total_row = response.data;
        })
        .catch(error => {
          this.handleError(error);
        });
    },
    // Delete Row
    delete_row(index) {
      this.total_row.splice(index, 1);
    },
    UserTourSave() {
      for (var i = this.total_row.length - 1; i >= 0; i--) {
        if (this.total_row[i]["first_name"] == "") {
          this.total_row.splice(i, 1);
        }
      }
      
      this.$axios
        .post("/api/group-add", this.total_row, {
          headers: { Authorization: `Bearer ${localStorage.token}` }
        })
        .then(response => {
          if (response.data == "error") {
            this.$swal.fire({
              icon: 'error',
              title: "Try again",
              text: "Please enter valid travel code!",
            });
          } else {
            this.$swal.fire(
              "Success",
              "Group data has added",
              "success"
            );
            // this.tourListData();
          }
        })
        .catch(error => {
          this.handleError(error);
        });
    },
  }
};
</script>
