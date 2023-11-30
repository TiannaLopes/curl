<template>
  <div>
    <NavbarComponentNotLoggedIn />
    <div class="container">
      <div>
        <div class="row my-5 d-flex justify-content-around">
          <div class="col-5 border">photo</div>
          <div class="col-5 border">
            <div>Title</div>
            <div>blurb</div>
          </div>
        </div>
        <div class="row">
          <div>Carousel</div>
        </div>
        <div class="row">
          <div class="col-6"></div>
          <div class="col-6"></div>
        </div>
        <div class="row">
          <div class="col-6"></div>
          <div class="col-6"></div>
        </div>
        <div class="row">
          <div class="col-6"></div>
          <div class="col-6"></div>
        </div>
        <div>Footer</div>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarComponentNotLoggedIn from "@/components/shared/NavbarComponentNotLoggedIn";
export default {
  name: "AboutUs",
  components: { NavbarComponentNotLoggedIn },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
* {
  background-color: #ddecde;
}
</style>
