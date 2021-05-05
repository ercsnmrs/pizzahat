<template>
  <div class="orders">
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
            <div class="flex flex-col text-center w-full mb-20">
              <h2 class="text-xs text-green-500 tracking-widest font-medium title-font mb-1">Lorem Ipsum Header</h2>
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Customer Relationship Management</h1>
            </div>
          <div v-for="order in orders" :key="order.order_id" class="p-4 lg:w-1/3">
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-left relative">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Order ID: {{order.order_id}}</h2>
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{{order.pizza}}
                <span class="text-xs">(size: {{order.size.toLowerCase()}})</span>
              </h1>
              <p class="leading-relaxed mb-3">Address to: Quarantine Zone {{order.qhn.toUpperCase()}}</p>
              <a class="text-green-500 inline-flex items-center">View Order Details
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import order from '../../utilities/mixins/order';
export default {
  mixins: [order],
  name: 'orders',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
