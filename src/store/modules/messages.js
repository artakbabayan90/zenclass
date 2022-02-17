export default {
    actions: {

    },
    mutations: {
        addMessage(state,newMessage){
            let id = -1;
            state.messages.forEach((item,index) => {
                if(item.userId === newMessage.userId){
                    id = index
                }
            })
            if(id > -1){
                state.messages[id].messages.push({'sender':'00','message':newMessage.message})
            }else {
                state.messages.push({
                    'userId':newMessage.userId,
                    'messages':[
                        {'sender':'00','message':newMessage.message}
                    ]
                })
            }
        }
    },
    state: {
        messages: [
            {
                'userId': 1,
                'messages': [
                    {
                        'sender': 1,
                        'message': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },{
                        'sender': '00',
                        'message': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },{
                        'sender': 1,
                        'message': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },{
                        'sender': 1,
                        'message': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },{
                        'sender': '00',
                        'message': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },{
                        'sender': 1,
                        'message': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                ]
            },{
                'userId': 2,
                'messages': [
                    {
                        'sender': '00',
                        'message': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },{
                        'sender': '00',
                        'message': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },{
                        'sender': 2,
                        'message': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },{
                        'sender': '00',
                        'message': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },{
                        'sender': 2,
                        'message': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },{
                        'sender': 2,
                        'message': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                ]
            },
        ]
    },
    getters: {
        getUserMessages:(state) =>(userId)=>{
            let messages = state.messages.filter(item => {
                return item.userId === userId
            })
            return messages;
        }
    }
}