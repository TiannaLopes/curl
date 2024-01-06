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
import NavbarComponent from "@/components/core/NavbarComponent.vue";
import ProfileComponent from "@/components/account/ProfileComponent.vue";
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
