<template>
  <div>
    <div>
      <div>
        <nav class="flex ml-24 mt-6" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <a href="/home" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-purple-600">
                <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                </svg>
                Accueil
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-purple-600 md:ms-2">Catégories</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2">Jeux de sociétés</span>
              </div>
            </li>
          </ol>
        </nav>

      </div>
    </div>
    <main class="container mx-auto px-4 py-8">
      <div class="flex space-x-8">
        <!-- left Column -->
        <div class="w-3/5 flex flex-col items-center">
          <div>
            <img class="w-full h-[500px] object-cover rounded-lg" :src="require(`@/assets/party${$route.params.id}.jpg`)" alt="party image">
          </div>
          <div class="relative -top-20">
            <img class="rounded-full h-28 w-28 border-8 border-white" src="@/assets/avatar.svg" alt="Profile Picture">
            <div class="flex flex-col items-center">
              <div class="text-gray-900 text-lg font-bold">{{ event.host.name }}</div>
              <div class="text-gray-400 font-thin">Organisateur</div>
              <div class="text-sm text-gray-400 font-thin">Depuis 2022</div>
              <div class="flex items-center mt-2">
                <template v-for="star in 5">
                  <i v-if="event.host.rating >= star" class="fa fa-star text-yellow-500"></i>
                  <i v-else-if="event.host.rating >= star - 0.5" class="fa fa-star-half-o text-yellow-500"></i>
                  <i v-else class="fa fa-star-o text-yellow-500"></i>
                </template>
              </div>
            </div>
          </div>
          <div class="flex flex-row relative w-full flex-nowrap p-4 bg-white">
            <div class="flex items-center w-1/3">
              <img src="@/assets/avatar.svg" alt="User Avatar" class="rounded-full h-12 w-12 border-2 border-gray-300">
              <div class="ml-4">
                <div class="text-gray-900 font-bold">Axel Lavigne</div>
                <div class="flex items-center">
                  <template v-for="star in 5">
                    <i v-if="4 >= star" class="fa fa-star text-yellow-500"></i>
                    <i v-else-if="4 >= star - 0.5" class="fa fa-star-half-o text-yellow-500"></i>
                    <i v-else class="fa fa-star-o text-yellow-500"></i>
                  </template>
                </div>
              </div>
            </div>
            <div class="w-2/3 mt-4 text-gray-600">Tres bonne ambiance, je recommande, tout s'est passé dans le respect des règles et l'organisateur est très sympa et inclusif</div>
          </div>
          <div class="mt-24 mx-12 w-[90%] overflow-x-scroll overflow-y-hidden">
            <div class="flex flex-row flex-nowrap gap-8 flex-shrink-0">
              <div v-for="event in suggestions" :key="event.id" style="min-width:300px;">
                <card-component :event="event"></card-component>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="w-2/5">
          <div class="bg-white rounded-lg shadow-md p-4" v-if="event">
            <h2 class="text-2xl font-bold mb-4">{{ event.title }}</h2>
            <p class="text-gray-600 text-sm" v-html="event.description"></p>
            <div class="flex space-x-4 mb-4 mt-12">
              <button class="bg-green-500 text-white px-4 py-2 rounded-lg">Rejoindre</button>
              <button class="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-lg">Contacter l'hôte</button>
              <button class="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-lg">FAQ</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import CardComponent from "@/components/CardComponent.vue";

export default defineComponent({
  name: "DetailComponent",
  components: {CardComponent},
  data() {
    return {
      suggestions: [
        {
          id: 7,
          title: 'Soirée à maison de la paix',
          host:  {
            name: 'Wendy',
            rating: 5,
          },
          date: '24 Aout 2022 22h:00',
          entry: 15,
        },
        {
          id: 8,
          title: 'Soirée à maison de la paix',
          host:  {
            name: 'Wendy',
            rating: 5,
          },
          date: '24 Aout 2022 22h:00',
          entry: 15,
        },
        {
          id: 9,
          title: 'Soirée à maison de la paix',
          host:  {
            name: 'Wendy',
            rating: 5,
          },
          date: '24 Aout 2022 22h:00',
          entry: 15,
        },
        {
          id: 10,
          title: 'Soirée à maison de la paix',
          host:  {
            name: 'Wendy',
            rating: 5,
          },
          date: '24 Aout 2022 22h:00',
          entry: 15,
        },
        {
          id: 11,
          title: 'Soirée à maison de la paix',
          host:  {
            name: 'Wendy',
            rating: 5,
          },
          date: '24 Aout 2022 22h:00',
          entry: 15,
        },
      ]
    }
  },
  computed: {
    event() {
      return JSON.parse(this.$route.query.event);
    },
  },
  mounted() {
  }
})
</script>

<style scoped>

</style>