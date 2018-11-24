<template>
  <div class="empty">
    <div class="empty-icon" v-if="icon">
      <i class="icon" :class="'icon-'+icon"></i>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    icon: String
  }
}
</script>

<style>

</style>
