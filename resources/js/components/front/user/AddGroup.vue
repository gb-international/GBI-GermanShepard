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
            <th>Gender</th>
            <th>Contact No.</th>
          </thead>
          <tbody v-if="preivew == false">

            <tr  v-for="(data,index) in total_row" :key="data.id">
              <td>{{ index+1 }}</td>
              <td><input type="text" class="form-control" v-model="data.first_name"></td>
              <td><input type="text" class="form-control" v-model="data.last_name"></td>
              <td><input type="text" class="form-control" v-model="data.gender"></td>
              <td><input type="text" class="form-control" v-model="data.mobile"></td>
            </tr>

          </tbody>
          
          <tbody v-else>

            <tr  v-for="(data,index) in total_row" :key="data.id">
              <td>{{ index+1 }}</td>
              <td>{{ data.first_name }}</td>
              <td>{{ data.last_name }}</td>
              <td>{{ data.gender }}</td>
              <td>
                <div class="row">
                  <div class="col-8">
                    {{ data.mobile }}
                  </div>
                  <div class="col-4 justify-content-end">
                    <div class="form-group">
                      <p class="delete_icon">
                        <i class="fas fa-trash-alt text-danger" @click="delete_row(index)"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="row w-100 justify-content-center">
          <button type="button" @click="preivew = !preivew" class="btn btn-primary">
            <span v-if="preivew == false">Preview</span>
            <span v-if="preivew == true">Back</span>
          </button>

          <button type="button" class="btn btn-primary ml-10" v-if="preivew == true">Submit</button>
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
export default {
  name: "AddGroup",
  components: {
    "has-error": HasError,
  },
  data() {
    return {
      row_input:1,
      preivew:false,
      total_row: [
        {
          first_name: "",
          last_name: "",
          gender: "",
          mobile: "",
        }
      ]
    };
  },
  beforeMount(){
    this.tourListData();
  },
  methods: {
     add_row() {
      for (var i = 0; i < this.row_input; i++) {
        this.total_row.push({
          first_name: "",
          last_name: "",
          gender: "",
          mobile: "",
          alternate_mobile: "",
        });
      }
      this.row_input = "";
    },

    // Delete Row
    delete_row(index) {
      this.total_row.splice(index, 1);
    },

    tourListData() {
      
      var data = [];
      this.$axios
        .post("/api/tour-list", data, {
          headers: { Authorization: `Bearer ${localStorage.token}` }
        })
        .then(response => {
          if (response.data.length == 0) {
            this.formShow = true;
          } else {
            this.alldata = response.data;
            this.itineraryData = response.data[0].itinerary;
            this.hotelData = response.data[0].bookedhotels;
            this.DestinationCity(this.itineraryData.itinerarydays);
            this.formShow = false;
          }
        })
        .catch(error => {
          this.formShow = true;
          this.handleError(error);
        });
    },

    UserTourSave() {
      for (var i = this.total_row.length - 1; i >= 0; i--) {
        if (this.total_row[i]["first_name"] == null) {
          this.total_row.splice(i, 1);
        }
      }
      
      this.$axios
        .post("/api/tour-travel-save", this.total_row, {
          headers: { Authorization: `Bearer ${localStorage.token}` }
        })
        .then(response => {
          // this.alldata = response.data;
          if (response.data == "error") {
            this.$swal.fire({
              icon: 'error',
              title: "Try again",
              text: "Please enter valid travel code!",
            });
          } else {
            this.$swal.fire(
              "Valid Code",
              "Check your tour details.",
              "success"
            
            );
            this.tourListData();
          }
        })
        .catch(error => {
          this.handleError(error);
        });
    }
  }
};
</script>
