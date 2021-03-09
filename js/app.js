const app = Vue.createApp({
    data() {
        return {
            name: null,
            email: null,
            botToken: '1604692569:AAFI55YLrnSQNy6C_HGytBaywKe6dk5MxcI',
            botID: '1604692569',
            chatID: '180739492'
        }
        },
        methods:{
            getintouch() {
                console.log(this.name);
                console.log(this.email);
                fetch(`https://api.telegram.org/bot${this.botToken}/sendMessage`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        chat_id: this.chatID,
                        text: `Отправлен запрос от Name: ${this.name} Email: ${this.email}`
                    })
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    });
            }
        }
    })
app.component({
    data(){
        return{}
    },
    mounted(){},
    template: ``
});

app.mount('#app');