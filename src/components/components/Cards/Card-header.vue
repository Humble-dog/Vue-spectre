<template>
  <div class="card-header">
    <div class="card-title h5">{{title}}</div>
    <div class="card-subtitle text-gray">{{subtitle}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style>

</style>
