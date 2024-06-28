<template>
  <div class="max-w-sm bg-white rounded-lg overflow-hidden">
    <div class="relative">
      <img class="w-full" :src="require(`@/assets/party${index}.jpg`)" alt="party image" style="max-height: 210px">
      <button class="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
        <i class="fa fa-heart"></i>
      </button>
    </div>
    <div class="py-4">
      <h3 class="text-lg font-semibold mb-1">Soirée à maison de la paix</h3>
      <p class="text-sm text-gray-600">Hôtes : Wendy et Lisa</p>
      <p class="text-sm text-gray-600">24 Aout 2022 22h:00</p>
    </div>
  </div>

</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CardComponent",
  props: ['index'],
  mounted() {
    console.log(this.index)
  }
})
</script>

<style scoped>

</style>