<template>
  <div class="container my-4">
    <h3>Reviews</h3>
    <div class="row">
      <div class="col-12">
        <div class="list-group">
          <div v-for="review in reviews" :key="review.id" class="list-group-item flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{ review.author }}</h5>
              <small>{{ formatDate(review.date) }}</small>
            </div>
            <p class="mb-1">{{ review.content }}</p>
            <small>Rating: {{ review.rating }}/5</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewsComponent',
  data() {
    return {
      reviews: [
        {
          id: 1,
          author: 'Yehuda S',
          date: '2023-02-14',
          content: 'Crispy rice spicy tuna is great! Spicy tuna roll and spicy salmon roll are ok, but not really spicy.',
          rating: 4
        },
        {
          id: 2,
          author: 'Sarah G',
          date: '2023-02-16',
          content: 'We love SUMO! Every week, amazing rolls. Always fresh, tasty, and well prepared. We love it!',
          rating: 5
        },
        // More reviews...
      ]
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    }
  }
}
</script>

<style scoped>
  /* Add any scoped styles for your ReviewsComponent here */
</style>
