<template>
  <div class="max-w-sm bg-white overflow-hidden cursor-pointer" @click="redirect">
    <div class="relative" style="height: 300px; max-height: 300px;">
      <img class="w-full h-full object-cover rounded-lg" :src="require(`@/assets/party${event.id}.jpg`)" alt="party image">
      <button class="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
        <i class="fa fa-heart"></i>
      </button>
    </div>
    <div class="py-4">
      <h3 class="text-lg font-semibold mb-1">{{ event.title }}</h3>
      <p class="text-sm text-gray-600 font-thin">Hôte(s) : {{ event.host }}</p>
      <p class="text-sm text-gray-600 font-thin">{{ event.date }}</p>
      <p class="text-sm text-gray-600 font-thin" v-if="event.entry">Entrée: {{event.entry}}€</p>
      <p class="text-sm text-gray-600 font-thin" v-else>Entrée: Gratuite</p>
    </div>
  </div>

</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CardComponent",
  props: ['event'],
  methods: {
    redirect() {
      this.$router.push({ name: 'detail', params: { id: this.event.id, event: this.event } });
    }
  }
})
</script>

<style scoped>

</style>