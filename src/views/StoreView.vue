<template>
  <NavbarComponent />
  <!-- Main content -->
  <div class="container my-5">
    <div class="row">
      <div class="col-4">
        <StoreDetailsComponent/>
        <FullMenuComponent />
      </div>
      <div class="col-8">
        <h3 class="card-title mb-1">Featured Items</h3>
        <div class="row mb-2">
          <div class="col-md-4" v-for="service in services" :key="service.id">
            <div class="card mb-4 box-shadow h-100">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">{{ service.name }}</h4>
              </div>
              <div class="card-body">
                <h1 class=" pricing-card-title">
                  {{ formatCurrency(service.price) }}
                </h1>
                <ul class="list mt-3 mb-4">
                  <li v-for="feature in service.features" :key="feature">
                    {{ feature }}
                  </li>
                </ul>
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-outline-primary"
                >
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">Order Details</div>
              <div class="card-body">
                <!-- Order summary and actions -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <StoreReviewsComponent />
      </div>
    </div>
  </div>
</template>


<script>
import NavbarComponent from "@/components/shared/NavbarComponent.vue";
import FullMenuComponent from "@/components/FullMenuComponent.vue";
import StoreReviewsComponent from "@/components/StoreReviewsComponent.vue";
import StoreDetailsComponent from "@/components/StoreDetailsComponent.vue"
export default {
  name: "StoreView",
  components: { NavbarComponent, FullMenuComponent, StoreReviewsComponent, StoreDetailsComponent },
  data() {
    return {
      services: [
        {
          id: 1,
          name: "Classic Manicure",
          price: "15.00",
          features: ["Nail trimming", "Shaping", "Polish"],
        },
        {
          id: 2,
          name: "Gel Manicure",
          price: "25.00",
          features: ["Gel polish", "Cuticle care", "Long-lasting"],
        },
        {
          id: 3,
          name: "Luxury Pedicure",
          price: "35.00",
          features: ["Exfoliation", "Massage", "Moisturizing"],
        },
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
</style>
