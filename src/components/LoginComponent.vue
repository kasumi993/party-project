<template>
  <div class="gradient-animation flex flex-col items-center justify-center h-screen">
    <div class="bg-white p-6 pb-16 flex flex-col items-center rounded-lg shadow-md w-full max-w-md space-y-8">
      <img src="@/assets/partyUp.svg" class="mb-2" width="130">
      <div>
      <form
          class="space-y-4"
          @submit.prevent="loginMode ? doLogin() : doCreateAccount()"
      >
        <div class="flex flex-col">
          <label
              for="username"
              class="block text-sm font-medium leading-6 text-gray-900 mb-1"
          >Email</label>
          <input
              id="username"
              v-model="username"
              type="text"
              name="username"
              autocomplete="none"
              placeholder="Entrer votre mail "
              class="input-field mb-4"
          >
        </div>
        <div class="flex flex-col">
          <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900 mb-1"
          >Mot de passe</label>
          <span class="block text-xs font-medium leading-6 text-gray-300 mb-1">Assurez vous de mettre un mot de passe de 8 characteres</span>
          <input
              id="password"
              v-model="password"
              type="password"
              name="password"
              autocomplete="none"
              placeholder="Entrer un mot de passe "
              class="input-field mb-4"
          >
        </div>
        <div
            v-if="!loginMode"
            class="flex flex-col"
        >
          <label
              for="fullName"
              class="block text-sm font-medium leading-6 text-gray-900 mb-1"
          >Nom</label>
          <input
              id="fullName"
              v-model="fullName"
              type="text"
              name="fullName"
              autocomplete="none"
              placeholder="Entrer votre nom"
              class="input-field mb-4"
          >
        </div>
        <div class="flex justify-between items-center mt-8">
          <button
              type="button"
              class="button secondary"
              @click="loginMode = !loginMode"
          >
            {{ loginMode ? "Créer un compte" : "Annuler" }}
          </button>
          <button
              type="submit"
              class="button"
          >
            {{ loginMode ? "Se connecter" : "Créer un compte" }}
          </button>
        </div>
      </form>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore.js'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const authStore = useAuthStore()

const apiUrl = 'http://localhost:8081' // Votre API URL
const username = ref('')
const password = ref('')
const fullName = ref('')
const loginMode = ref(true)

const doLogin = async () => {
  try {
    const response = await fetch(`${apiUrl}/api/v1/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: username.value, password: password.value })
    })

    if (!response.ok) alert('La connexion a échoué. Veuillez vérifier vos identifiants.')

    const data = await response.json()
    authStore.login(data.token, data.record);
    const redirectUrl = route.query.redirect ? route.query.redirect : '/home';
    router.push(redirectUrl);
  } catch (error) {
    console.log(error.message)
  }
}

const doCreateAccount = async () => {
  try {
    const response = await fetch(`${apiUrl}/api/v1/user/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: username.value,
        password: password.value,
        name: fullName.value
      })
    })

    if (!response.ok) throw new Error('Account creation failed')

    await doLogin()
  } catch (error) {
    console.log(error.message)
  }
}
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
.input-field {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  transition: border-color 0.3s ease;
}
.input-field:focus {
  outline: none;
  border-color: #4f46e5;
}
.button {
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}
.button.secondary {
  background-color: #e5e7eb;
  color: #4b5563;
  margin-left: 8px;
}
.button:hover {
  background-color: #57016b;
  color: white;
}
</style>
