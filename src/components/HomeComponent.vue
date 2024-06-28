<template>
  <div class="h-screen w-full">
    <div class="gradient-animation p-24 flex flex-col items-center pt-24">
      <h1 class="lobster-regular text-6xl mb-6 text-center">Trouve une soirée et éclate toi !</h1>

      <form class="w-3/4">
        <div class="flex">
          <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only"></label>
          <button id="dropdown-button" @click="toggle" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-s-lg" type="button">Toutes les categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg></button>
          <div ref="dropdown" class="absolute top-[45%] z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
              <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100">Dance Party</button>
              </li>
              <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100">Jeux de societé</button>
              </li>
              <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100">Soirée Restaux</button>
              </li>
              <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100">Match</button>
              </li>
            </ul>
          </div>
          <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-6 w-full z-20 text-sm text-gray-900 bg-white rounded-e-lg focus:ring-purple-500 focus:border-purple-500" placeholder="Rechercher des soirées, dance, jeux de société, foot..." required />
            <button type="submit" class="absolute top-0 end-0 p-6 text-sm font-medium h-full text-white bg-purple-500 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              <span class="">Chercher</span>
            </button>
          </div>
        </div>
      </form>

    </div>

    <div class="mt-12 mx-12">
      <div class="grid grid-cols-3 md:grid-cols-4 gap-6 gap-y-12">
        <div v-for="(item, index) in 14" :key="index">
          <card-component :index="index"></card-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import CardComponent from "@/components/CardComponent.vue";

export default defineComponent({
  name: "HomeComponent",
  components: {CardComponent},
  methods: {
    toggle() {
      this.$refs.dropdown.classList.toggle('hidden');
    }
  }
})
</script>


<style scoped>
@keyframes gradient-bg {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.gradient-animation {
  background: linear-gradient(270deg, rgba(230, 224, 255, 0.98), rgba(255, 209, 229, 0.98), rgba(255, 206, 200, 0.98), rgba(200, 255, 207, 0.98));
  background-size: 400% 400%;
  animation: gradient-bg 15s ease infinite;
}
</style>