<template>
  <div class="video">
    <div :class="ratioClass"  v-if="iframe">
      <iframe v-bind="$attrs" :src="src"></iframe>
    </div>
    <video
      v-bind="$attrs"
      :class="ratioClass"
      :src="src"
      v-else></video>
  </div>
</template>

<script>
export default {
  name: 'Spectre-Video',
  props: {
    iframe: Boolean,
    ratio: {
      validator: function (value) {
        return ['1:1', '4:3', '16:9'].indexOf(value) > -1
      }
    },
    src: String
  },
  computed: {
    ratioClass () {
      let ratio = this.ratio ? this.ratio.split(':') : false
      // Set responsive if there is not limit width and height
      if (ratio) {
        return `video-responsive video-responsive-${ratio[0]}-${ratio[1]}`
      }
      return ''
    }
  }
}
</script>
