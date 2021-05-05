export default{
    data(){
        return{
            pizzaPriceList:{
                'allchiz': 75,
                'pepperonli': 99.95,
                'hawayan': 110.25,
            },
            pizzaSizeMultiplier:{
                'toosmall': 1,
                'justright': 1.5,
                'youmightpuke': 4,
            }
        }
    }, 
    computed: {
        orders(){
          return JSON.parse(localStorage.getItem('orders'))
        }
    },
    methods:{
        setOrder(key, value){
            const json = JSON.parse(value);

           let formattedOrders = json.map(obj => {
                return{
                    "order_id": obj['order id'],
                    "pizza": obj.pizza,
                    "size": obj.size,
                    "qhn": obj['quarantine house number'],
                    "name": obj.name,
                    "price": this.setPrice(obj.pizza, obj.size)
                }

            })

            formattedOrders = JSON.stringify(formattedOrders);
            localStorage.setItem(key,formattedOrders);
        },

        formatObjName(data){
            return data.replace(/ +/g, "").toLowerCase()
        },

        renameKey ( obj, oldKey, newKey ) {
            obj[newKey] = obj[oldKey];
            delete obj[oldKey];
        },

        setPrice(pizza, size){
            const fixpizza = this.formatObjName(pizza)
            const fixsize = this.formatObjName(size)

            let price = this.pizzaPriceList[fixpizza] * this.pizzaSizeMultiplier[fixsize]

            if(this.pizzaPriceList[fixpizza] == "pepperonli" && this.pizzaSizeMultiplier[fixsize] == "justright"){
                (price / this.pizzaSizeMultiplier[fixsize]) * 2
            }

             return price;
        }   
    }
}