<template>
  <div class="container my-4 border rounded">
    <div class="row">
      <h2>{{ storeInfo.name }}</h2>
      <div class="col-lg-8">
        <p>{{ storeInfo.description }}</p>
        <div class="mb-2">
          <span class="badge bg-secondary">{{ storeInfo.type }}</span>
          <span class="badge bg-success"
            >Open now: Closes at {{ storeInfo.closingTime }}</span
          >
        </div>
        <div>
          <strong>Rating:</strong> {{ storeInfo.rating }}
          <small>({{ storeInfo.reviewCount }} reviews)</small>
        </div>
      </div>
      <div class="col-lg-4">
        <h3>Details</h3>
        <dl class="row">
          <dt class="col-sm-4">Address:</dt>
          <dd class="col-sm-8">{{ storeInfo.address }}</dd>

          <dt class="col-sm-4">Phone:</dt>
          <dd class="col-sm-8">{{ storeInfo.phone }}</dd>

          <dt class="col-sm-4">Price Range:</dt>
          <dd class="col-sm-8">{{ storeInfo.priceRange }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreDetails",
  data() {
    return {
      storeInfo: {
        name: "Sumo Japanese Restaurant",
        description:
          "Traditional Japanese Cuisine featuring a wide selection of sushi and sashimi.",
        type: "Japanese Restaurant",
        closingTime: "10:15 PM",
        rating: 4.6,
        reviewCount: 1300,
        address: "6477 Boca Cir",
        phone: "(123) 456-7890",
        priceRange: "$$",
      },
    };
  },
};
</script>

<style scoped>
/* Add any scoped styles for your StoreDetails component here */
</style>
