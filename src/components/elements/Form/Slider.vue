<template>
  <div class="form-group has-error">
    <label
      v-if="label"
      v-text="label"
      class="form-label"
      :for="id || name"
      :class="[size ? 'label-' + spSizes[size] : '']"></label>
    <input
      value="50"
      type="range"
      :min="min || 0"
      :id="id || name"
      :max="max || 100"
      :name="name || id"
      :disabled="disabled"
      v-model.number="sliderValue"
      class="slider tooltip"
      :data-tooltip="sliderValue"
      :class="[size ? 'input-' + spSizes[size] : '']">
  </div>
</template>

<script>
export default {
  name: 'Spectre-Slider',
  props: {
    disabled: Boolean,
    id: String,
    label: String,
    loading: Boolean,
    max: [String, Number],
    min: [String, Number],
    name: String,
    size: String,
    state: String,
    type: String,
    value: [String, Number]
  },
  data () {
    return {
      sliderValue: this.value
    }
  },
  watch: {
    sliderValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>
