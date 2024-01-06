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
import NavbarComponent from "@/components/core/NavbarComponent.vue";
import HighLevelCategoriesComponent from "@/components/store-search/HighLevelCategoriesComponent.vue";
import CategoriesComponent from "@/components/store-search/CategoriesComponent.vue";
import FiltersComponent from "@/components/store-search/FiltersComponent.vue";
import OfferCardsComponent from "@/components/store-search/OfferCardsComponent.vue";
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
