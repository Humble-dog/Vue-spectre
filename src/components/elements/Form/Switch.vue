<template>
  <div class="form-group" :class="state ? 'has-' + state : ''">
    <label class="form-switch">
      <input
        :id="id || name"
        :name="name || id"
        type="checkbox"
        :disabled="disabled"
        v-model="switchValue"
        :size="size ? 'input-' + spSizes[size] : ''">
      <i class="form-icon"></i> {{label}}
    </label>
  </div>
</template>

<script>
export default {
  name: 'Spectre-Switch',
  props: {
    disabled: Boolean,
    id: String,
    label: String,
    name: String,
    size: String,
    state: String,
    value: String
  },
  data () {
    return {
      switchValue: this.value
    }
  },
  watch: {
    switchValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>
