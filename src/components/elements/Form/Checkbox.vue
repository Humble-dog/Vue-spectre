<template>
  <div class="form-group" :class="inputState">
    <label
      v-text="label"
      class="form-label"
      :class="size ? 'label-' + spSizes[size] : ''"></label>
    <label
      :key="ind"
      class="form-checkbox"
      :class="checkboxClass"
      v-for="(option, ind) in (Array.isArray(options) ? options : [options])">
      <input
        :id="id"
        type="checkbox"
        :value="option"
        :name="id || name"
        :disabled="disabled"
        @input="handleInput"
        :class="checkboxClass"
        :checked="checked(option)">
      <i class="form-icon"></i> {{option}}
    </label>
  </div>
</template>

<script>
export default {
  name: 'Spectre-Checkbox',
  props: {
    disabled: Boolean,
    id: String,
    inline: Boolean,
    label: String,
    name: String,
    options: [Array, String],
    size: String,
    state: String,
    value: [Boolean, Array]
  },
  data () {
    return {
      checkboxValue: this.value || []
    }
  },
  computed: {
    checkboxClass () {
      return [
        this.inline ? 'form-inline' : '',
        this.size ? 'input-' + this.spSizes[this.size] : ''
      ]
    },
    inputState () {
      return this.state ? 'has-' + this.state : ''
    }
  },
  watch: {
    checkboxValue (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    checked (option) {
      return Array.isArray(this.options)
        ? this.checkboxValue.indexOf(option) > -1
        : this.checkboxValue
    },
    handleInput (e) {
      if (e.target.checked) {
        if (this.label && !this.options) {
          this.checkboxValue = true
        } else {
          this.checkboxValue.push(e.target.value)
        }
      } else {
        if (this.label && !this.options) {
          this.checkboxValue = false
        } else {
          this.checkboxValue.splice(this.checkboxValue.indexOf(e.target.value), 1)
        }
      }
    }
  }
}
</script>
