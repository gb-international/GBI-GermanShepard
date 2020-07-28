<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div class="container">
    <div class="AddGroup p-t-15">
      <div class="row mb-10">
        <div class="col">
          <button type="button" class="btn btn-primary" data-toggle="modal"
          data-target="#AddRowModal">ADD Number of person</button>
        </div>
        <div class="col">
          <p class="text-dark print"><i class="fas fa-print"></i></p>
        </div>

        <div class="col">
          <div class="search-box">
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control" placeholder="Search" v-model="searchQuery">
            </div>
          </div>

        </div>
      </div>

      <div class="row group_list">
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
            <tr  v-for="(data,index) in resultQuery" :key="data.id" class="hidden">
              <td>{{ index+1 }}</td>
              <td><input type="text" class="form-control" v-model="data.first_name" :readonly="index != edit_index"></td>
              <td><input type="text" class="form-control" v-model="data.last_name" :readonly="index != edit_index"></td>
              <td><input type="text" class="form-control" v-model="data.email" :readonly="index != edit_index"></td>
              <td><input type="text" class="form-control" v-model="data.gender" :readonly="index != edit_index"></td>
              <td>
                <div class="row">
                  <div class="col-8">
                    <input type="text" class="form-control" v-model="data.mobile" :readonly="index != edit_index">
                  </div>
                  <div class="col-4 justify-content-end">
                    <div class="form-group action_item">
                        <img v-if="index != edit_index" class="edit" :src="`/assets/front/icons/edit.png`" @click="edit_row(index)">
                        <img v-else class="edit" :src="`/assets/front/icons/update.png`" @click="update_row(index)">
                        <img class="delete" :src="`/assets/front/icons/delete.png`" @click="delete_row(index,data.id)">
                    </div>
                  </div>
                </div>
              </td>
            </tr>
  
            <tr  v-for="(data,index) in new_row" :key="index">
              <td>{{ index+1 }}</td>
              <td><input type="text" class="form-control" v-model="data.first_name" ></td>
              <td><input type="text" class="form-control" v-model="data.last_name" ></td>
              <td><input type="text" class="form-control" v-model="data.email" ></td>
              <td><input type="text" class="form-control" v-model="data.gender" ></td>
              <td><input type="text" class="form-control" v-model="data.mobile" ></td>
            </tr>


          </tbody>
        </table>

        <div class="row w-100 justify-content-center">
          <button type="button" class="btn btn-primary ml-10" @click="downloadPDF()">DOWNLOAD PDF</button>
          <button type="button" class="btn btn-primary ml-10" v-if="submit_btn == true" @click="UserTourSave()">Submit</button>
        </div>        
      </div>
    </div>
      <!-- Add Row Modal -->
    <div class="modal fade" id="AddRowModal">
      <div class="modal-dialog modal-md">
        <div class="modal-content modal-color">
          <div class="modal-body">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <p>Add Number of Persion</p>
            <div class="form-group">
              <label for="no_row">Enter Number</label>
              <input type="number" class="form-control p-20" v-model="row_input">
            </div>
            <p class="text-center"><button type="button" class="btn btn-info" @click="add_row">ADD</button></p>
          </div>
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
      searchQuery:null,
      row_input:0,
      submit_btn:false,
      edit_index:-1,
      total_row: '',
      new_row:[],
    };
  },

  mounted(){
    this.groupMember();
  },

  watch:{
    row_input:function(){
      if(this.row_input>0){
        this.submit_btn = true;
      }
    }
  },

  methods: {
    add_row() {
      for (var i = 0; i < this.row_input; i++) {
        this.new_row.push({
          first_name: "",
          last_name: "",
          email:"",
          gender: "",
          mobile: "",
          tour_id:this.$route.params.id,
        });
      }
      this.row_input = "";
    },
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
    delete_row(index,id) {
      //
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          if (result.value) {
            var data = {id:id};
            this.$axios.post("/api/destroy-member", data, {
              headers: { Authorization: `Bearer ${localStorage.token}` }
            })
            .then(response => {
                this.total_row.splice(index, 1);
            })
            .catch(error => {
              this.handleError(error);
            });
            this.$swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });

    },
    edit_row(index){
      this.edit_index = index;
    },
    update_row(index){
      this.UserTourUpdate(this.total_row[index]);
      this.edit_index = '';
    },
    UserTourUpdate(data) {
      this.$axios
        .post("/api/group-member-update", data, {
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
            this.edit_index = -1;
            this.$swal.fire(
              "Success",
              "Member updated !!!",
              "success"
            );
            // this.tourListData();
          }
        })
        .catch(error => {
          this.handleError(error);
        });
    },

    UserTourSave() {
      for (var i = this.new_row.length - 1; i >= 0; i--) {
        if (this.new_row[i]["first_name"] == "") {
          this.new_row.splice(i, 1);
        }
      }

      this.$axios
        .post("/api/group-add", this.new_row, {
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
            this.new_row = [];
            this.submit_btn = false;
            this.groupMember();
          }
        })
        .catch(error => {
          this.handleError(error);
        });
    },

    downloadPDF(){
      console.log('create pdf here');
    }
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.total_row.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.first_name.toLowerCase().includes(v));
        });
      } else {
        return this.total_row;
      }
    }
  }
};
</script>
