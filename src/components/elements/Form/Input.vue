<template>
  <div class="form-group" :class="formGroupClass">
    <label
      v-if="label"
      v-text="label"
      class="form-label"
      :for="id || name"
      :class="[size ? 'label-' + spSizes[size] : '']"></label>
    <div :class="inputClass">
      <input
        :id="id || name"
        :name="id || name"
        class="form-input"
        :pattern="pattern"
        v-model="inputValue"
        :type="type || 'text'"
        :placeholder="placeholder"
        :class="[size ? 'input-' + spSizes[size] : '']"
        :disabled="disabled">
      <i class="form-icon" :class="iconClass"></i>
    </div>
    <p class="form-input-hint" v-if="hint" v-text="hint"></p>
  </div>
</template>

<script>
export default {
  name: 'Spectre-Input',
  props: {
    disabled: Boolean,
    hint: String,
    id: String,
    icon: String,
    iconPosition: String,
    inline: Boolean,
    label: String,
    loading: Boolean,
    name: String,
    placeholder: String,
    pattern: String,
    size: String,
    state: String,
    type: String,
    value: String
  },
  data () {
    return {
      inputValue: this.value
    }
  },
  computed: {
    formGroupClass () {
      return [
        this.inline ? 'form-inline' : '',
        this.state ? 'has-' + this.state : ''
      ]
    },
    iconClass () {
      let loading = this.loading ? 'loading' : ''
      let icon = this.icon ? 'icon icon-' + this.icon : ''
      return [loading, icon]
    },
    inputClass () {
      let iconPosition = this.iconPosition || 'right'
      return (this.icon || this.loading) ? 'has-icon-' + iconPosition : ''
    }
  },
  watch: {
    inputValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>
