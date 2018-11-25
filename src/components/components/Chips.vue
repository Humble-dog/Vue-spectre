<template>
  <div class="chip">
    <img :src="img" class="avatar avatar-sm" v-if="img">
    {{text}}
    <a href="#" class="btn btn-clear"
    aria-label="Close" role="button" v-if="closable"></a>
  </div>
</template>

<script>
export default {
  props: {
    closable: Boolean,
    img: String,
    text: String
  }
}
</script>

<style>

</style>
