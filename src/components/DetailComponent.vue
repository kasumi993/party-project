<template>
  <main class="container mx-auto px-4 py-8">
    <div class="flex space-x-8">
      <div class="w-3/5">
        <img class="w-full h-full object-cover rounded-lg" :src="require(`@/assets/party${$route.params.id}.jpg`)" alt="party image">
      </div>

      <!-- Right Column -->
      <div class="w-2/5">
        <div class="bg-white rounded-lg shadow-md p-4">
          <h2 class="text-2xl font-bold mb-4" v-if="event">{{ event.title }}</h2>

          <div class="flex space-x-4 mb-4">
            <button class="bg-green-500 text-white px-4 py-2 rounded-lg">Rejoindre</button>
            <button class="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-lg">Contacter l'hôte</button>
            <button class="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-lg">Date</button>
            <button class="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-lg">Lieu</button>
          </div>
         </div>
      </div>
    </div>
  </main>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "DetailComponent",
  computed: {
    event() {
      return this.$route.params.event;
    }
  },
  mounted() {
  }
})
</script>

<style scoped>

</style>