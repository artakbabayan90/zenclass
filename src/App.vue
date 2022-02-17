<template>
  <div class="container">
    <div class="row clearfix">
      <div class="col-lg-12">
        <div class="card chat-app">
          <users @getUser="getUser"/>
          <div class="chat" v-if="currentUser">
            <div class="chat-header clearfix" >
              <div class="row" >
                <div class="col-lg-6">
                  <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                    <img :src="src" alt="avatar">
                  </a>
                  <div class="chat-about">
                    <h6 class="m-b-0">{{currentUser.name}}</h6>
                  </div>
                </div>
              </div>
            </div>
            <messages :userId="currentUser.id"></messages>
          </div>
          <div class="chat" v-else>
            <div class="chat-header clearfix" >
              <div class="row" >
                <div class="col-lg-6">
                  <div class="chat-about">
                    <h6 class="m-b-0">Chose User</h6>
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
import {mapActions} from 'vuex'
import Users from "@/components/Users";
import Messages from "@/components/Messages";
import './assets/index.css'
export default {
  name: 'App',
  data(){
    return {
      currentUser: '',
      messages: {}
    }
  },
  components: {
    Users,
    Messages
  },
  computed:{
    src(){
      return this.currentUser.imgSrc?this.currentUser.imgSrc:"https://bootdey.com/img/Content/avatar/avatar1.png"
    }
  },
  methods:{
    ...mapActions(['fetchUsers']),
    getUser(user){
      this.currentUser = user
    }
  },
  async mounted(){
    this.fetchUsers()
  },
}
</script>

<style>

</style>
