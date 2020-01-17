<template>
  <section>
    <navigation />
    <h5 class="center-align">
      Home
    </h5>
  </section>
</template>

<script>
import navigation from "@/components/NavBar.vue";

export default {
    name: "Home",
    components: {
        navigation
    },
    data() {
        return {};
    }
};
</script>

<style>
</style>
