<template>
  <span class="label" :class="[
    type ? 'label-' + type : '',
    rounded ? 'label-rounded' : ''
  ]" >
    <slot/>
  </span>
</template>

<script>
export default {
  name: 'Label',
  props: {
    type: {
      type: String,
      default: ''
    },
    rounded: {
      type: Boolean,
      default: false
    }
  }
}
</script>
