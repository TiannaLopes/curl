<template>
  <div class="row my-5">
    <div class="category-carousel">
      <div class="card-container" ref="cardContainer">
        <div
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

          <div class="card-text fs-5 fw-bold">
            {{ category.categoryText }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import categoriesData from "@/data/highLevelCategories.json";

export default {
  name: "HighLevelCategoriesComponent",
  data() {
    return {
      categories: categoriesData,
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
  width: 200px;
  height: 150px;
  margin-bottom: 8px;
}

.card-text {
  text-align: center;
}
</style>
