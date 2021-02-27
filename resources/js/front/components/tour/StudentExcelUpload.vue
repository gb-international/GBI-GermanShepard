<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->
  <div class="container">
    <div class="AddGroup p-t-15">

      <div class="row mb-10">
        <div class="col-sm-12 col-md-12 col-lg-6 pt-2">
            <img class="img w-20 mr-2 link mb-2" src="/images/icons/back.png" @click="back()"/>
          <button
            type="button"
            class="btn btn-sm btn-primary mb-2"
            data-toggle="modal"
            data-target="#AddRowModal"
          >ADD Number of person</button>

          <a class="text-gray ml-3 mb-2" :href="`/assets/sample-group-list.xlsx`" download>
            <img src="/images/icons/download.png" class="icon-width"> Name list formate
          </a>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="form-group file-upload">
            <div class="input-group file-input-group" data-controller="file-input">
              <input class="form-control" type="text" placeholder=".xlsx file upload" readonly data-target="file-input.value">
              <input type="file" class="form-control" 
                id="customFile"
                name="file"
                accept=".xlsx"
                @change="changeExcelFile($event)"
                >
              <div class="input-group-append">
                <label class="btn btn-secondary mb-0" for="customFile">Browse</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="input-group filter-search">
                <input class="form-control py-2 border-right-0 border" type="search"
                value="search" id="example-search-input" v-model="searchQuery"
                placeholder="Search .." />
                <span class="input-group-append">
                <button class="btn btn-outline-secondary border-left-0 border" type="button">
                    <i class="fa fa-search"></i>
                </button>
                </span>
            </div>
        </div>
      </div>
      <div class="row group_list w-100" v-if="resultQuery">
        <table class="table table-hover table-bordered add_group_table text-dark table-responsive">
          <thead>
            <th class="w-40">Sr.No.</th>
            <th class="w-140">First Name</th>
            <th class="w-140">Last Name</th>
            <th class="w-220">Email</th>
            <th class="w-95">Gender</th>
            <th class="w-95">Age</th>
            <th class="w-220">Contact No.</th>
          </thead>
          <tbody>
            <tr v-for="(data,index) in resultQuery" :key="data.id" class="hidden">
              <td>{{ index+1 }}</td>
              <td>
                <input
                  type="text"
                  class="form-control w-140"
                  v-model="data.first_name"
                  :readonly="index != edit_index"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control w-140"
                  v-model="data.last_name"
                  :readonly="index != edit_index"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control w-220"
                  v-model="data.email"
                  :readonly="index != edit_index"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control w-95"
                  v-model="data.gender"
                  :readonly="index != edit_index"
                />
              </td>
              
              <td>
                <input
                  type="number"
                  class="form-control w-95"
                  v-model="data.age"
                  :readonly="index != edit_index"
                />
              </td>

              <td>
                <div class="row">
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control w-165"
                      v-model="data.mobile"
                      :readonly="index != edit_index"
                    />
                  </div>
                  <div class="col-4 justify-content-end">
                    <div class="form-group action_item">
                      <img
                        v-if="index != edit_index"
                        class="edit"
                        :src="`/assets/front/icons/edit.png`"
                        @click="edit_row(index)"
                      />
                      <img
                        v-else
                        class="edit"
                        :src="`/assets/front/icons/update.png`"
                        @click="update_row(index)"
                      />
                      <img
                        class="delete"
                        :src="`/assets/front/icons/delete.png`"
                        @click="delete_row(index,data.id)"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr v-for="(data,index) in new_row" :key="index">
              <td>{{ index+1 }}</td>
              <td>
                <input type="text" class="form-control w-140" v-model="data.first_name" />
              </td>
              <td>
                <input type="text" class="form-control w-140" v-model="data.last_name" />
              </td>
              <td>
                <input type="text" class="form-control w-220" v-model="data.email" />
              </td>
              <td>
                <input type="text" class="form-control w-95" v-model="data.gender" />
              </td>
              <td>
                <input type="number" class="form-control w-95" v-model="data.age" />
              </td>
              <td>
                <div class="row">
                  <div class="col-sm-8">
                    <input type="text" class="form-control w-165" v-model="data.mobile" />
                  </div>
                  <div class="col-sm-4 text-right pt-2">
                    <img
                      class="delete w-16 mr-2"
                      :src="`/assets/front/icons/delete.png`"
                      @click="delete_new_row(index)"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <p class="text-danger font-weight-bold" v-if="this.error==true">
            {{ message }}
        </p>

        <div class="row w-100 justify-content-center mt-4">
          <div class="col-sm-1 text-right">
            <p class="text-dark print" title="print">
              <i class="fas fa-print"></i>
            </p>
          </div>
          <div class="col-sm-4 text-center">
            <button
              type="button"
              class="btn btn-sm btn-primary ml-10"
              @click="generatePdf"
            >DOWNLOAD PDF</button>

            <button
              type="button"
              class="btn btn-sm btn-primary ml-10"
              v-if="submit_btn == true"
              @click="UserTourSave()"
            >Submit</button>
          </div>
        </div>
      </div>
      <!-- download data here -->
   
    <!-- Add Row Modal -->
    <div class="modal fade" id="AddRowModal">
      <div class="modal-dialog modal-md">
        <div class="modal-content modal-color">
          <div class="modal-body">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <p>Add Number of Person</p>
            <div class="form-group">

              <div class="row align-content-center">
                <div class="col">
                  <img src="/images/icons/minus.png" @click="down" class="w-40 link">
                </div>                
                <div class="col">{{ row_input }}</div>                
                <div class="col">
                  <img src="/images/icons/add.png" @click="up" class="w-40 link">
                </div>
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
import GroupUpload from '@/front/mixins/user/GroupUpload';
export default{
    name:"StudentUpload",
    mixins:[GroupUpload],
    data(){
        return{
            user_type:'student',
        }
    }
}
</script>
