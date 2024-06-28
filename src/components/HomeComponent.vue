<template>
  <div class="h-screen w-full">
    <div class="gradient-animation p-16 flex flex-col items-center">
      <h1 class="lobster-regular text-6xl mb-12 text-center">Trouve une soirée et éclate toi !</h1>

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
        <div v-for="event in eventsList" :key="event.id">
          <card-component :event="event"></card-component>
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
  data() {
    return {
      eventsList: [
        {
          id: 0,
          title: 'Monopoly et pizza',
          host: {
            name: 'Wendy et Lisa',
            rating: 4.5,
          },
          date: '24 Aout 2022 22h:00',
          entry: 15,
          address: '24 rue de l\'abandon, 98000, moribon, France',
          description: 'Salut tout le monde !<br><br>' +
              'Je suis Maxime et je vous invite à une soirée Monopoly chez moi ce samedi soir. L\'idée est de passer une soirée amusante et compétitive autour du célèbre jeu de société, tout en profitant de quelques snacks et boissons.<br><br>' +
              '<u>Au programme:</u><br><br>' +
              '<b>Tournoi de Monopoly:</b> Nous organiserons un tournoi avec plusieurs parties pour déterminer qui est le véritable magnat de l\'immobilier. Les règles seront expliquées en début de soirée pour les nouveaux venus.<br><br>' +
              '<b>Snacks et Boissons:</b> Un buffet avec des snacks variés (chips, mini-pizzas, tapas) et des boissons (sodas, bières, cocktails sans alcool) sera à votre disposition tout au long de la soirée.<br><br>' +
              '<b>Prix pour les Gagnants:</b> Les vainqueurs des parties recevront des petits prix pour récompenser leur talent stratégique.<br><br>\n' +
              '<b>Dress Code:</b> Tenue décontractée. Venez à l\'aise, prêt à passer une soirée agréable.<br><br>' +
              '<b>Invités:</b> Tout le monde est bienvenu ! N\'hésitez pas à inviter vos amis amateurs de Monopoly, plus on est de joueurs, plus la soirée sera animée !<br><br>' +
              '<b>Participation:</b> Une participation de 5€ est demandée pour couvrir les frais des snacks et des boissons.<br><br>' +
              '<b>RSVP:</b> Merci de confirmer votre présence avant le jeudi 13 juillet pour que je puisse m\'organiser au mieux.<br><br>' +
              'Je suis impatient de vous retrouver pour une soirée qui promet d\'être pleine de rebondissements et de bons moments. Venez nombreux, avec votre esprit compétitif et votre envie de passer un bon moment !<br><br>' +
              'À très bientôt,<br><br>' +
              '<u>Maxime 🎲🏠🍕</u><br><br>' +
              '<b>Note:</b> Pour des questions ou des suggestions, vous pouvez me contacter directement via l\'application ou m\'envoyer un message au 06 12 34 56 78.'
        },
        {
          id: 1,
          title: 'Soirée à maison de la paix',
          host: {
            name: 'Cathy',
            rating: 2.5,
          },
          date: '24 Aout 2022 22h:00',
          entry: 15,
          address: '24 rue de l\'abandon, 98000, moribon, France',
          description: 'Salut à tous!\n' +
              '\n' +
              'Je suis Lucie et j\'organise une soirée Salsa et Sangria chez moi ce samedi soir. L\'idée est de passer une soirée mémorable en dansant, en partageant de bons moments et en profitant de délicieux cocktails faits maison.\n' +
              '\n' +
              'Au programme:\n' +
              '\n' +
              'Cours de Salsa: Pour ceux qui veulent apprendre ou se perfectionner, nous avons un cours de salsa de 19h30 à 20h30 animé par un professeur expérimenté. Pas besoin de partenaire, venez comme vous êtes!\n' +
              'Open Bar Sangria: Une sélection de sangrias maison vous attendra, préparée avec amour et des ingrédients frais. Pour les non-amateurs de sangria, d\'autres boissons seront disponibles.\n' +
              'Buffet Gourmand: Une variété de tapas et de snacks sera proposée pour accompagner nos danses et discussions.\n' +
              'Musique et Danse: Après le cours, la piste sera ouverte à tous. La playlist est prête avec les meilleurs morceaux de salsa, mais aussi des hits actuels pour satisfaire tous les goûts.\n' +
              'Dress Code: Tenue décontractée mais prête à danser! Si vous avez des chaussures de danse, c\'est encore mieux.\n' +
              '\n' +
              'Invités: Tout le monde est bienvenu! N\'hésitez pas à inviter vos amis, plus on est de fous, plus on rit!\n' +
              '\n' +
              'Participation: Une petite participation de 10€ est demandée pour couvrir les frais des boissons et du buffet.\n' +
              '\n' +
              'RSVP: Merci de confirmer votre présence avant le jeudi 13 juillet pour que je puisse m\'organiser au mieux.\n' +
              '\n' +
              'Je suis impatiente de vous retrouver pour une soirée qui promet d\'être festive et conviviale. Venez nombreux, avec votre bonne humeur et votre envie de passer un bon moment!\n' +
              '\n' +
              'À très bientôt,\n' +
              '\n' +
              'Lucie 🌟💃🍹\n' +
              '\n' +
              'Note: Pour des questions ou des suggestions, vous pouvez me contacter directement via l\'application ou m\'envoyer un message au 06 12 34 56 78.'
        },
        {
          id: 2,
          title: 'Soirée Jeux videos chez mini',
          host: {
            name: 'Mini',
            rating: 2.5,
          },
          date: '24 Aout 2022 22h:00',
          entry: 15,
        },
        {
          id: 3,
          title: 'Soirée Jeux videos chez Wendy',
          host: {
            name: 'Wendy',
            rating: 5,
          },
          date: '24 Aout 2022 22h:00',
          entry: 0,
        },
        {
          id: 4,
          title: 'Soirée à maison de la paix',
          host:  {
            name: 'Wendy',
            rating: 5,
          },
          date: '24 Aout 2022 22h:00',
          entry: 15,
        },
        {
          id: 5,
          title: 'Soirée à maison de la paix',
          host:  {
            name: 'Lisa',
            rating: 5,
          },
          date: '24 Aout 2022 22h:00',
          entry: 15,
        },
        {
          id: 6,
          title: 'Soirée à maison de la paix',
          host:  {
            name: 'Marion',
            rating: 3.5,
          },
          date: '24 Aout 2022 23h:00',
          entry: 0,
        },
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
        {
          id: 12,
          title: 'Soirée à maison de la paix',
          host:  {
            name: 'Wendy',
            rating: 5,
          },
          date: '24 Aout 2022 22h:00',
          entry: 15,
        },
        {
          id: 13,
          title: 'Soirée à maison de la paix',
          host:  {
            name: 'Wendy',
            rating: 5,
          },
          date: '24 Aout 2022 22h:00',
          entry: 15,
        }
      ]
    }
  },
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