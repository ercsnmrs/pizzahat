<template>
  <div class="dashboard">
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Customer Management System</h1>
          <p class="mb-8 leading-relaxed">We take our orders very seriously.</p>
          <div class="flex w-full items-center justify-center bg-grey-lighter">
             <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-900 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-green-500 hover:text-white">
                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <div v-if="this.isUploading">
                  <span class="mt-2 text-base leading-normal">Loading...</span>
                </div>
                <div v-else>
                    <span class="mt-2 text-base leading-normal">Select a file</span>
                    <input type='file' class="hidden" @change="onFileChange"/>
                </div>
                
            </label>                    
          </div>

          <div class="mt-5">
            <p class="text-sm text-gray-500 mb-8 w-full">No orders found on local storage.</p>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import order from '../../utilities/mixins/order';
export default {
  name: 'dashboard',
  props: ['parent'],
  mixins: [order],

  data(){
    return{
      isUploading:false, 
    }
  },

  methods: {
    onFileChange(e) {
      this.isUploading = false
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.readFile(files[0]);
   },

   readFile(file) {
     let reader = new FileReader();
     reader.readAsText(file)
     reader.onload = e => {
       this.setOrder('orders', e.target.result)
       this.$emit('loadItems')
    };
     
   }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
