<script>
import {defineComponent} from 'vue'
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent.vue";

export default defineComponent({
  name: "fixedHeadercontainer",
  components: {HeaderComponent}
})
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>