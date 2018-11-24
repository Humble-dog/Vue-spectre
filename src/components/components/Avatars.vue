<template>
  <figure class="avatar" :class="size ? 'avatar-'+size : ''"
  :data-initial="alt" :style="'background-color:'+bgColor+';'">
    <img :src="image" alt="..." v-if="image">
    <img :src="icon" alt="..." v-if="icon">
    <i class="avatar-presence" :class="presence" v-else-if="presence"></i>
  </figure>
</template>

<script>
export default {
  props: {
    image: String,
    size: String,
    alt: String,
    bgColor: String,
    presence: {
      type: Boolean,
      default: false
    },
    icon: String
  }
}
</script>