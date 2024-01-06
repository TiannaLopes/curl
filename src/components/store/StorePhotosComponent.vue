<template>
  <div class="container">
    <!-- Header with logo and main dish photo -->
    <div class="row align-items-center my-3">
      <div class="col-2">
        <!-- <img src="../../assets/images/facial.jpg" alt="Restaurant Logo" class="rounded-circle" /> -->
      </div>
      <div class="col-8">
        <img src="../../assets/images/nails-grey.jpg" alt="Main Dish" class="img-fluid" />
      </div>
      <div class="col-2 text-end">
        <button class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#photosModal">
          <i class="bi bi-images"></i> 8 photos
        </button>
      </div>
    </div>

    <!-- Modal with Carousel for photos -->
    <div class="modal fade" id="photosModal" tabindex="-1" aria-labelledby="photosModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="photosModalLabel">Photo Gallery</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button v-for="(photo, index) in photos" :key="`indicator-${index}`" type="button" data-bs-target="#carouselExample" :data-bs-slide-to="index" :class="{ 'active': index === 0 }" aria-current="true" :aria-label="`Slide ${index + 1}`"></button>
              </div>
              <div class="carousel-inner">
                <div v-for="(photo, index) in photos" :key="photo.src" :class="['carousel-item', { 'active': index === 0 }]">
                  <img :src="photo.src" class="d-block w-100" :alt="`Slide ${index + 1}`">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>{{ photo.caption }}</h5>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        { src: '../../assets/images/facial.jpg', caption: 'Caption 1' },
        { src: '../../assets/images/haircut.jpg', caption: 'Caption 2' },
      ]
    }
  }
}
</script>

<style scoped>
.logo {
  max-height: 60px;
}

.main-dish {
  max-height: 100px;
}</style>
