<template>
  <div class="card-image">
    <img :src="src" :alt="alt" :class="responsive ? 'img-responsive' : ''">
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
    responsive: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>

</style>
