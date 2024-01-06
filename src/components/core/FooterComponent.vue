<template>
  <footer class="sticky-footer">
    <div class="container">
      <div class="text-center">
        <p>Your footer content goes here.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.sticky-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid black;
  padding: 10px 0;
  background-color: #ffffff;
}
</style>
