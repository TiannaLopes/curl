<template>
  <div id="app">
    <header class="row pt-4 pd-3">
      <div class="col-3 d-flex">
        <div class="row">
          <div class="col-4">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navbarNav"
            >
              <span class="navbar-toggler-icon navbar navbar-light fs-4"></span>
            </button>
            <div
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="navbarNav"
              aria-labelledby="navbarNavLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="navbarNavLabel"></h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link fw-bold fs-4" href="#">
                      <img
                        :src="require(`@/assets/svgs/home.svg`)"
                        alt="Category Icon"
                        class="card-image mx-3"
                      />Home</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fw-bold fs-4" href="#">
                      <img
                        :src="require(`@/assets/svgs/promotion.svg`)"
                        alt="Category Icon"
                        class="card-image mx-3"
                      />Offers
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fw-bold fs-4" href="#">
                      <img
                        :src="require(`@/assets/svgs/appointments.svg`)"
                        alt="Category Icon"
                        class="card-image mx-3"
                      />Appointments
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fw-bold fs-4" href="#">
                      <img
                        :src="require(`@/assets/svgs/account.svg`)"
                        alt="Account Icon"
                        class="card-image mx-3"
                      />Account
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fw-bold fs-4" href="#">
                      <img
                        :src="require(`@/assets/svgs/saved.svg`)"
                        alt="Store Icon"
                        class="card-image mx-3"
                      />Saved Stores
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fw-bold fs-4" href="#">
                      <img
                        :src="require(`@/assets/svgs/payment.svg`)"
                        alt="Payment Icon"
                        class="card-image mx-3"
                      />Payment
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fw-bold fs-4" href="#">
                      <img
                        :src="require(`@/assets/svgs/leaf.svg`)"
                        alt="Payment Icon"
                        class="card-image mx-3"
                      />Curl Member
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fw-bold fs-4" href="#">
                      <img
                        :src="require(`@/assets/svgs/help.svg`)"
                        alt="Payment Icon"
                        class="card-image mx-3"
                      />Help
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fw-bold fs-4" href="#">
                      <img
                        :src="require(`@/assets/svgs/language.svg`)"
                        alt="Language Icon"
                        class="card-image mx-3"
                      />Language
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fw-bold fs-4" href="#">
                      <img
                        :src="require(`@/assets/svgs/sign-out.svg`)"
                        alt="Payment Icon"
                        class="card-image mx-3"
                      />Sign Out
                    </a>
                  </li>
                  <li class="nav-item border-top border-3 pt-2">
                    <a class="nav-link fw-bold fs-4" href="#"> About Us </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fw-bold fs-4" href="#"> Careers </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fw-bold fs-4" href="#">
                      Accessibility
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fw-bold fs-4" href="#">
                      Be A Partner Service Provider
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <h1 class="text-center fw-bold ms-5">Curl</h1>
        </div>
      </div>
      <div class="col-4"></div>
      <div class="col-3">
        <div class="input-group search-bar">
          <input
            type="text"
            class="form-control py-2"
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <button class="btn btn-secondary" type="button">Search</button>
        </div>
      </div>
      <div class="col-2">
        <div class="row d-flex">
          <div class="col-6"></div>
          <div class="notification-icon col-2">
            <i class="bi bi-bell fs-3"></i>
            <span class="badge bg-danger">3</span>
          </div>
          <div class="shopping-cart-icon col-2">
            <i class="bi bi-cart fs-3"></i>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
header {
  width: 100%;
  background-color: #96bf9a;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-bar {
  max-width: 500px;
}

.notification-icon,
.shopping-cart-icon {
  display: flex;
  align-items: center;
  margin-right: 20px; /* Adjust this margin to control the spacing */
}

.notification-icon .badge {
  margin-right: 10px;
}

.navbar-toggler-text {
  color: #000;
}

.card-image {
  width: 30px;
  height: 30px;
  margin-bottom: 8px;
}

h1 {
  font-size: 4rem;
}
</style>
