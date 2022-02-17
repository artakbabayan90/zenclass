import {createStore} from "vuex";
import users from "@/store/modules/users";
import messages from "@/store/modules/messages";


const store = createStore({
    modules: {
        users, messages
    }
})


export default store