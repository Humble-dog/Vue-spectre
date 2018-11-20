<template>
  <i class="icon" :class="[icon ? 'icon-' + icon : '']"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: String
  }
}
</script>