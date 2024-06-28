
<template>
  <header>
    <nav class="bg-transparent border-gray-200 px-4 lg:px-6 py-2.5">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a
          href="/home"
          class="flex items-center"
        >
          <img
            alt="PartyUp logo"
            class="logo"
            src="../../assets/partyUP.png"
            width="70"
          >
          <span class="ml-4 self-center text-xl font-semibold whitespace-nowrap">PartyUp</span>
        </a>
        <div class="flex items-center lg:order-2">
          <div>
            <button type="submit" class="px-4 py-2 text-sm font-medium h-full text-white bg-purple-500 rounded-lg hover:bg-blue-800">
              <span class="">J'organise !</span>
            </button>
          </div>
          <div
            v-if="!authStore.authenticated"
            class="cursor-pointer text-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:ring-gray-800"
            @click="login"
          >
            Se connecter
          </div>
          <div
            v-else
            class="cursor-pointer text-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:ring-gray-800"
            @click="logout"
          >
            Se déconnecter
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            /></svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            /></svg>
          </button>
        </div>
        <div
          id="mobile-menu-2"
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        >
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
                href="/home"
                class="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-gray-700"
                aria-current="page"
              >Accueil</a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-gray-700 hover:bg-gray-700 border-gray-700"
              >Mes événements</a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-gray-700 hover:bg-gray-700 border-gray-700"
              >A propos de nous</a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-gray-700 hover:bg-gray-700 border-gray-700"
              >Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useAuthStore } from '@/stores/authStore'

export default {
  name: 'HeaderComponent',
  setup() {
    const authStore = useAuthStore()
    return { authStore }
  },
  methods: {
    logout() {
      this.authStore.logout();
      this.$router.push('/login');
    },
    login() {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

</style>
