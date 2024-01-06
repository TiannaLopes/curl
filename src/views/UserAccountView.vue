<template>
  <div>
    <NavbarComponent />
    <div class="container">
  <ProfileComponent/>
      <FooterComponent />
    </div>
  </div>
</template>
<script>
import NavbarComponent from "@/components/shared/NavbarComponent.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";
import FooterComponent from "@/components/core/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    ProfileComponent,
    FooterComponent,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped></style>
