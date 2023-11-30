<template>
  <div class="row my-5 border-top border-3 pt-5">
    <div class="fw-bold fs-4 text-left">Offers</div>
    <div id="card-carousel" class="carousel slide" data-bs-ride="carousel">
      <!-- Slides -->
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(item, index) in items"
          :key="index"
          :class="{ active: index === 0 }"
        >
          <div class="row">
            <!-- Display three cards in a row -->
            <div
              class="col-4"
              v-for="(card, cardIndex) in items.slice(index, index + 3)"
              :key="cardIndex"
            >
              <div class="card">
                <img :src="card.image" class="card-img-top" alt="Card Image" />
                <div class="card-body">
                  <h5 class="card-title">{{ card.title }}</h5>
                  <p class="card-text">{{ card.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Controls -->
      <a
        class="carousel-control-prev"
        href="#card-carousel"
        role="button"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#card-carousel"
        role="button"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "OfferCardsComponent",
  data() {
    return {
      items: [
        {
          title: "Card 1",
          description: "This is the first card description.",
          image: "https://via.placeholder.com/300x200",
        },
        {
          title: "Card 2",
          description: "This is the second card description.",
          image: "https://via.placeholder.com/300x200",
        },
        {
          title: "Card 3",
          description: "This is the third card description.",
          image: "https://via.placeholder.com/300x200",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Custom CSS to position control arrows outside the cards */
#card-carousel {
  position: relative;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-control-prev {
  left: -50px; /* Adjust as needed */
}

.carousel-control-next {
  right: -50px; /* Adjust as needed */
}
</style>
