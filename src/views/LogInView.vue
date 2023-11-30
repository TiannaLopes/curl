<template>
  <div>
    <!-- Part 1 Log in main page -->
    <div class="background-container">
      <div class="row d-flex py-5">
        <div class="col-9 text-center">
          <div class="card-container">
            <img
              :src="require(`@/assets/svgs/leaf.svg`)"
              alt="Leaf Icon"
              class="card-image mx-3 h-100"
            />
            <span class="fs-2 fw-bold"> Curl</span>
          </div>
        </div>
        <div class="col-3 justify-content-between">
          <button class="btn btn-light m-1">Sign In</button>
          <button class="btn btn-secondary m-1">Sign Up</button>
        </div>
      </div>
      <!-- Centered Search Div -->
      <div class="search-container">
        <div class="d-flex flex-column align-items-center">
          <div class="input-group w-100 bg-light rounded">
            <span class="input-group-prepend">
              <img
                :src="require(`@/assets/svgs/location.svg`)"
                alt="Leaf Icon"
                class="card-image mx-3"
              />
            </span>
            <input
              class="form-control m-2 rounded border-light"
              placeholder="Enter Address"
              @keyup="searchForAddress($event)"
            />
            <span class="input-group-append">
              <img
                :src="require(`@/assets/svgs/arrow-right.svg`)"
                alt="Leaf Icon"
                class="card-image mx-3"
              />
            </span>
          </div>
          <button class="btn btn-light w-75 mt-2 text-start">
            <img
              :src="require(`@/assets/svgs/person.svg`)"
              alt="Leaf Icon"
              class="card-image me-3"
            />
            Sign in for saved address
          </button>
        </div>
      </div>
    </div>

    <!-- Part 2 Options  -->
    <div class="container my-5">
      <div class="row my-5">
        <div class="col-4">Become a partner</div>
        <div class="col-4">Find Salons!</div>
        <div class="col-4">Get the app</div>
      </div>
    </div>

    <!-- Part 3 Huge Footer  -->

    <div class="bg-light border-top border-2 my-2">
      <div class="container">
        <div class="fs-5 fw-bold my-2 pt-3 mt-5 mb-3">Top Cities</div>
        <div v-if="cityData && cityData.length > 0">
          <div class="row">
            <div
              v-for="city in cityData"
              :key="city.city"
              class="col-lg-2 col-md-4 col-12 mb-3"
            >
              {{ city.city }}
            </div>
          </div>
        </div>

        <div class="fs-5 fw-bold mb-3 mt-5">Top Services</div>
        <div v-if="serviceData && serviceData.length > 0">
          <div class="row">
            <div
              v-for="service in serviceData"
              :key="service.title"
              class="col-lg-2 col-md-4 col-12 mb-3"
            >
              {{ service.service }}
            </div>
          </div>
        </div>

        <div class="fs-5 fw-bold mb-3 mt-5">Top Near You</div>
        <div
          v-if="serviceNearLocationData && serviceNearLocationData.length > 0"
        >
          <div class="row">
            <div
              v-for="service in serviceNearLocationData"
              :key="service.service"
              class="col-lg-2 col-md-4 col-12 mb-3"
            >
              {{ service.title }}
            </div>
          </div>
        </div>
        <div class="border-top pt-5 mt-5 border-2 row">
          <div class="col-3">
            <div class="fw-bold fs-5 mb-3">Get to know us</div>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Gift Cards</li>
              <li>Product Pickup</li>
              <li>Promotions</li>
              <li>Provider Central</li>
              <li>LinkedIn</li>
              <li>Glassdoor</li>
              <li>Accessibility</li>
              <li>Newsroom</li>
            </ul>
          </div>
          <div class="col-3">
            <div class="fw-bold fs-5 mb-3">Let Us Help You</div>
            <ul>
              <li>Account Details</li>
              <li>Order History</li>
              <li>Help</li>
            </ul>
          </div>
          <div class="col-3">
            <div class="fw-bold fs-5 mb-3">Doing Business</div>
            <ul>
              <li>List Your Business</li>
              <li>Get Curl for Work</li>
            </ul>
          </div>
          <div class="col-3">
            <button class="btn btn-secondary mb-1 w-100">
              <img
                :src="require(`@/assets/svgs/iphone.svg`)"
                alt="Leaf Icon"
                class="card-image m-0 p-0"
              />
              Available on the App store
            </button>
            <button class="btn btn-secondary w-100">
              <img
                :src="require(`@/assets/svgs/googleplay.svg`)"
                alt="Leaf Icon"
                class="card-image m-0 p-0"
              />
              Available Google Play
            </button>
          </div>
        </div>
        <!-- Part 3.2 Final part of the  Footer  -->
        <div class="row mt-5 flex-nowrap text-xs border-top border-2 pt-3">
          <div class="col-1">
            <img
              :src="require(`@/assets/svgs/leaf.svg`)"
              alt="Store Icon"
              class="card-image mx-3"
            />
          </div>
          <div class="col-1">Terms of Service</div>
          <div class="col-1">Privacy</div>
          <div class="col-1">Service Locations</div>
          <div class="col-1">Florida Privacy</div>
          <div class="col-2">Do not sell or share my personal information</div>
          <div class="col-1">
            <span>
              <img
                :src="require(`@/assets/svgs/copyright.svg`)"
                alt="Copyright Icon"
                class="card-image m-0 p-0 card-image-footer"
              />
              2023</span
            >
          </div>
          <div class="col-2">Language Dropdown</div>
          <div class="col-2">
            <img
              :src="require(`@/assets/svgs/instagram.svg`)"
              alt="Instagram"
              class="card-image mx-1"
            />
            <img
              :src="require(`@/assets/svgs/facebook.svg`)"
              alt="Leaf Icon"
              class="card-image mx-1"
            />
            <img
              :src="require(`@/assets/svgs/tiktok.svg`)"
              alt="Leaf Icon"
              class="card-image mx-1"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topCityData from "@/data/topCities.json";
import topServiceData from "@/data/topServices.json";
import topServiceNearLocationData from "@/data/topServicesNearLocation.json";

export default {
  name: "HomeView",
  components: {},
  computed: {},
  data() {
    return { cityData: [], serviceData: [], serviceNearLocationData: [] };
  },
  methods: {
    login() {
      console.log("login");
    },
    signup() {
      console.log("sign up");
    },
    searchForAddress($event) {
      console.log("searching for ", $event);
    },
  },
  mounted() {
    this.cityData = topCityData.sort(
      (a, b) => b.ordersPerHour - a.ordersPerHour
    );
    this.serviceData = topServiceData.sort(
      (a, b) => b.averageRating - a.averageRating
    );
    this.serviceNearLocationData = topServiceNearLocationData.sort(
      (a, b) => b.averageRating - a.averageRating
    );
  },
};
</script>
<style scoped>
.card-image {
  width: 30px;
  height: 100%;
}
.background-container {
  height: 850px;
  max-height: 1000px;
  width: 100%;
  background-image: url("@/assets/images/loginbackground.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
}
.card-container {
  display: flex;
  align-items: center;
}

.search-container {
  position: absolute;
  width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
}

.card-image-footer {
  width: 20px;
  height: 50%;
}
</style>
