<template>
  <div class="badges" @click="action">
    <figure class="avatar badge" :class="size ? 'avatar-'+size : ''"
    v-if="avatar" :data-badge="data" :data-initial="alt">
      <img :src="img" v-if="img">
    </figure>
    <div class="badge" :class="[
      button ? 'btn' : '',
      type   ? 'btn-'+type : '',
      size   ? 'btn-'+size : ''
    ]" :data-badge="data" v-else>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: Boolean,
      default: false
    },
    button: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      validator: function (thing) {
        return ['primary', 'link', 'error', 'success'].indexOf(thing) !== -1
      }
    },
    size: {
      type: String,
      validator: function (thing) {
        return ['xs', 'sm', 'md', 'lg', 'xl'].indexOf(thing) !== -1
      }
    },
    data: [String, Number],
    img: {
      type: String,
      default: ''
    },
    alt: String,
    action: Function
  }
}
</script>