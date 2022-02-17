export default {
    actions: {
        async fetchUsers(c) {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            c.commit('updateUsers', users)
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        }
    },
    state: {
        users: []
    },
    getters: {
        allUsers(state) {
            return state.users
        }
    }
}