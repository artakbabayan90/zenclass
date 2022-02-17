<template>
  <div id="plist" class="people-list">
    <ul class="list-unstyled chat-list mt-2 mb-0">
      <div  v-for="user in allUsers"   :key="user.id">
        <li class="clearfix"  :class="{ active: user.id === userId}"  @click="getUserId(user)">
          <img :src="user.imgSrc?user.imgSrc:'https://bootdey.com/img/Content/avatar/avatar1.png'" alt="avatar">
          <div class="about">
            <div class="name">{{ user.name }}</div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Users",
  data() {
    return {
      searchUser:'',
      userId:0
    }
  },
  computed:{
    ...mapGetters(['allUsers']),
  },
  methods: {
    getUserId(user){
      this.userId = user.id
      this.$emit('getUser',user)
    }
  }
}
</script>

<style scoped>

</style>