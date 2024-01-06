<template>
  <div class="row my-5 border-top border-3 pt-5">
    <div class="category-carousel">
      <div class="card-container" ref="cardContainer">
        <span
          v-for="category in categories"
          :key="category.id"
          class="card"
          @click="handleCardClick(category)"
        >
          <img
            :src="require(`@/assets/svgs/${category.svgName}`)"
            alt="Category Icon"
            class="card-image"
          />
          <span class="card-text fw-bold">{{ category.categoryText }}</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import filtersData from "@/data/filters.json";

export default {
  name: "FiltersComponent",
  data() {
    return {
      categories: filtersData,
    };
  },
  methods: {
    handleCardClick(category) {
      // Handle the click event for each card
      console.log(`Clicked on ${category.categoryText}`);
    },
  },
  mounted() {
    // Set up horizontal scroll for the card container
    const cardContainer = this.$refs.cardContainer;
    cardContainer.addEventListener("wheel", (event) => {
      cardContainer.scrollLeft += event.deltaY;
      event.preventDefault();
    });
  },
};
</script>
<style scoped>
.category-carousel {
  overflow: hidden;
}

.card-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.card {
  flex: 0 0 auto;
  margin-right: 16px;
  padding: 16px;
  background-color: #f8f8f8;
  border-radius: 8px;
  cursor: pointer;
  scroll-snap-align: start;
}

.card-image {
  width: 64px;
  height: 64px;
  margin-bottom: 8px;
}

.card-text {
  text-align: center;
}
</style>
