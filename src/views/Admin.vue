<template>
  <div class="admin">
    <Orders v-if="this.ordersPresent"/>
    <Dashboard @loadItems="checkOrdersPresent" v-else/>
  </div>
</template>

<script>
// @ is an alias to /src
import Orders from '@/components/admin/Orders.vue'
import Dashboard from '@/components/admin/Dashboard.vue'

export default {
  name: 'admin',
  components: {
    Orders,
    Dashboard,
  },

  data(){
    return{
      ordersPresent: (localStorage.getItem('orders')) ? true : false,
    }
  },

  computed:{
  },

  methods: {
    checkOrdersPresent(){
      this.ordersPresent = true
    }
  },
}
</script>
