<template>
  <div>
    <NavbarComponentNotLoggedIn />
    <div class="container"></div>
  </div>
</template>
<script>
import NavbarComponentNotLoggedIn from "@/components/shared/NavbarComponentNotLoggedIn";
export default {
  name: "StoreView",
  components: { NavbarComponentNotLoggedIn },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped></style>
