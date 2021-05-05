<template>
  <div class="landing">
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Hello Customer!</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Use the search bar below and look into the order details. </p>
        </div>
        <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div class="relative flex-grow w-full">
            <label for="full-name" class="leading-7 text-sm text-gray-600">Your order no.</label>
            <input class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              type="text" 
              v-model="search_id"
              @input="search"
              placeholder="E.G. 911101231"
            >
          </div>

          
        </div>
      </div>
    </section>

    <div v-if="!this.isSearchItemsEmpty">
      <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div v-for="items in searchItems"  :key="items.id" class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">ORDER NO. {{items.order_id}}</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Reciepient: {{items.name}}</h2>
                <p class="leading-relaxed text-base">Delivery Adderess: Quarantine Zone #{{items.qhn}}</p>
                <p class="leading-relaxed text-base">Pizza Type: {{items.pizza}} ({{items.size}})</p>
                <p class="leading-relaxed text-base">Size: {{items.size}}</p>
                <p class="leading-relaxed text-base">Total Cost: PHP {{items.price}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import debounce from '../../utilities/mixins/debouce';
import order from '../../utilities/mixins/order';
export default {
  mixins: [debounce, order],
  name: 'landing',
  data() {
    return {
      search_id:"",
      searchItems:{}
    }
  },
  created(){
  },

  computed:{
    isSearchItemsEmpty(){
      return Object.keys(this.searchItems).length === 0
    }
  },
  methods:{
    search(e){
        const task = () =>(
          this.$nextTick(() => {
            this.searchItems = this.orders.filter(x => x.order_id.toUpperCase() === e.target.value.toUpperCase())
          })
        ); 

        this.debounce(task, 100); 
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
