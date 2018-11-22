<template>
  <div class="form-group" :class="state ? 'has-' + state : ''">
    <label
      v-text="label"
      class="form-label"
      :class="size ? 'label-' + spSizes[size] : ''"></label>
    <label
      :key="ind"
      class="form-radio"
      v-for="(option, ind) in options"
      :class="radioClass">
      <input
        :id="id"
        type="radio"
        :value="option"
        :name="id || name"
        :class="radioClass"
        v-model="radioValue"
        :disabled="disabled">
      <i class="form-icon"></i> {{option}}
    </label>
  </div>
</template>

<script>
export default {
  name: 'Spectre-Radio',
  props: {
    disabled: Boolean,
    id: String,
    label: String,
    name: String,
    options: Array,
    size: String,
    state: String,
    value: String
  },
  data () {
    return {
      radioValue: this.value
    }
  },
  computed: {
    radioClass () {
      return [
        this.inline ? 'form-inline' : '',
        this.size ? 'input-' + this.spSizes[this.size] : ''
      ]
    }
  },
  watch: {
    radioValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>
