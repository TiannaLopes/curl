<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8">
        <form @submit.prevent="submitForm">
          <h2>Profile</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between">
            <div class="mb-3 flex-fill me-md-2">
              <label for="firstName" class="form-label">First Name</label>
              <input type="text" class="form-control" id="firstName" required v-model="profile.firstName">
            </div>
            <div class="mb-3 flex-fill ms-md-2">
              <label for="lastName" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="lastName" required v-model="profile.lastName">
            </div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" required v-model="profile.email">
          </div>
          <div class="mb-3">
            <label for="country" class="form-label">Country</label>
            <select class="form-select" id="country" required v-model="profile.country">
              <option value="United States">United States</option>
              <!-- Add other country options here -->
            </select>
          </div>
          <div class="mb-3">
            <label for="phoneNumber" class="form-label">Phone Number</label>
            <input type="tel" class="form-control" id="phoneNumber" required v-model="profile.phoneNumber">
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="updates" v-model="profile.receiveUpdates">
            <label for="updates" class="form-check-label">Receive order status updates via text</label>
          </div>
          <button type="submit" class="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        firstName: '',
        lastName: '',
        email: '',
        country: 'United States', // default country
        phoneNumber: '',
        receiveUpdates: false
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.profile);
      // Handle the form submission, e.g., send data to an API or backend server
    }
  }
};
</script>
