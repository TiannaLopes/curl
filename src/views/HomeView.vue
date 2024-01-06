<template>
  <div>
    <NavbarComponent />
    <div class="container">
      <HighLevelCategoriesComponent />
      <CategoriesComponent />
      <FiltersComponent />
      <OfferCardsComponent />
      <StoreCardsComponent />
      <FooterComponent />
    </div>
  </div>
</template>
<script>
import NavbarComponent from "@/components/shared/NavbarComponent.vue";
import HighLevelCategoriesComponent from "@/components/HighLevelCategoriesComponent.vue";
import CategoriesComponent from "@/components/CategoriesComponent.vue";
import FiltersComponent from "@/components/FiltersComponent.vue";
import OfferCardsComponent from "@/components/OfferCardsComponent.vue";
import StoreCardsComponent from "@/components/store/StoreCardsComponent.vue";
import FooterComponent from "@/components/core/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    HighLevelCategoriesComponent,
    CategoriesComponent,
    FiltersComponent,
    OfferCardsComponent,
    StoreCardsComponent,
    FooterComponent,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped></style>
