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
        v-validate="rule"
        v-model="inputValue"
        :type="type || 'text'"
        :placeholder="placeholder"
        :class="[size ? 'input-' + spSizes[size] : '']"
        :disabled="disabled">
      <i class="form-icon" :class="iconClass"></i>
    </div>
    <p class="form-input-hint" v-text="hintText"></p>
  </div>
</template>

<script>
export default {
  name: 'Spectre-Input',
  props: {
    disabled: Boolean,
    hint: [String, Object],
    id: String,
    icon: String,
    iconPosition: String,
    inline: Boolean,
    label: String,
    loading: Boolean,
    name: String,
    placeholder: String,
    pattern: String,
    rule: [String, Object],
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
      let state
      if (this.rule && !this.state && (this.id || this.name)) {
        state = this.errors.first(this.id || this.name)
          ? 'has-error'
          : !this.inputValue ? '' : 'has-success'
      } else {
        state = this.state ? 'has-' + this.state : ''
      }
      return [
        this.inline ? 'form-inline' : '',
        state
      ]
    },
    hintText () {
      if (this.hint) {
        if (typeof this.hint === 'object') {
          return this.errors.first(this.id || this.name)
            ? this.hint.error
            : this.hint.text
        }
        return this.hint
      } else if (this.rule && !this.state && (this.id || this.name)) {
        return this.errors.first(this.id || this.name)
      }
      return ''
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

<style lang="scss" scoped>
.form-group{
  &.form-inline{
    display: inline-flex;
    .form-label{
      margin-right: .4rem;
    }
  }
}
</style>
