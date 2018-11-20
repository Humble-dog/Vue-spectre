<template>
  <button class="spectre btn" 
    @click="$emit('click', $event)"
    :class="[
      type ? 'btn-' + type : '',
      size ? 'btn-' + spSizes[size] : '',
    ]" circled>
    <slot v-if="iconAlign == 'right'"/>
    <i v-if="icon" class="icon" :class="[icon ? 'icon-' + icon : '']"></i>
    <slot v-if="iconAlign == 'left' || type != 'action'"/>
  </button>
</template>

<script>
export default {
  props: {
    type: String,
    size: String,
    icon: String,
    iconAlign: String,
    circled: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
