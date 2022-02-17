<template>
  <div class="chat-history" ref="scroll">
    <ul class="m-b-0" v-if="messages.messages">
      <li class="clearfix" v-for="(message,index) in messages.messages" :key="index + new Date().getTime()">
        <div class="message other-message float-right" v-if="message.sender === '00'">{{ message.message }}</div>
        <div class="message my-message" v-else>{{ message.message }}</div>
      </li>
    </ul>
    <p v-else>No messages</p>
  </div>
  <div class="chat-message clearfix">
    <div class="input-group mb-0">
      <div class="input-group-prepend">
        <form action="" @submit.prevent="sendMessage">
          <div class="form-group">
            <textarea name="" id="" class="form-control messageBox" cols="100" v-model="newMessage" rows="3"></textarea>
            <button class="form-control messageBox" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex'
export default {
  name: "Messages",
  props: {
    userId: {
      type: Number,
    }
  },
  data() {
    return {
      newMessage: ''
    }
  },
  methods: {
    ...mapMutations(['addMessage']),
    ...mapGetters(['getUserMessages']),
    sendMessage() {
      if(this.newMessage){
        let obj = {
          'userId':this.messages.userId,
          'message':this.newMessage
        }
        this.addMessage(obj);
        this.newMessage = '';
        this.scrollElement()
      }
    },
    scrollElement(){
      this.$refs.scroll.scrollTop = this.$refs.scroll.scrollHeight ;
    }
  },
  computed:{
    messages(){
      return this.getUserMessages()(this.userId)[0]?this.getUserMessages()(this.userId)[0]:{"userId":this.userId}
    }
  },
  mounted() {
    this.scrollElement()
  }
}
</script>

<style scoped>

</style>