<template>
  <section>
    <navigation />
    <h5 class="center-align">
      Profile
    </h5>
  </section>
</template>

<script>
import navigation from "@/components/NavBar.vue";

export default {
    name: "Profile",
    components: {
        navigation
    },
    data() {
        return {};
    }

};
</script>
