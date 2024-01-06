<template>
  <div class="container">
    <h3>Full Menu</h3>
    <div class="row card h-75">
      <div class="col-12">
        <div
          v-for="category in menuCategories"
          :key="category.name"
          class="my-3"
        >
          <h5>{{ category.name }}</h5>
          <ul class="list-group">
            <li
              v-for="item in category.items"
              :key="item.name"
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              {{ item.name }}
              <span class="badge bg-primary rounded-pill">{{
                formatCurrency(item.price)
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullMenu",
  data() {
    return {
      menuCategories: [
        {
          name: "Appetizers From The Sushi Bar",
          items: [
            { name: "Dragon Roll", price: 7.99 },
            { name: "Spicy Tuna Roll", price: 4.99 },
            // More items...
          ],
        },
        {
          name: "Appetizers From The Kitchen",
          items: [
            { name: "Tempura", price: 5.99 },
            { name: "Edamame", price: 3.99 },
            // More items...
          ],
        },
        // More categories...
      ],
    };
  },
  methods: {
    formatCurrency(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value);
    },
  },
};
</script>

<style scoped>
/* Add any scoped styles for your FullMenu component here */
</style>
