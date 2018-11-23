<template>
  <div class="form-group date-picker" :class="formGroupClass">
    <label
      :for="id"
      v-if="label"
      v-text="label"
      class="form-label"
      :class="[size ? 'label-' + spSizes[size] : size]"></label>
    <input
      :id="id"
      :name="name || id"
      class="form-input"
      v-model="inputValue"
      :disabled="disabled"
      :type="type || 'text'"
      :placeholder="placeholder"
      :class="[size ? 'input-' + spSizes[size] : '']">
    <i class="form-icon" :class="iconClass" v-if="loading || icon"></i>
    <calendar v-model="inputValue"/>
  </div>
</template>

<script>
import calendar from '../../components/Calendar/Calendar-small.vue'

export default {
  name: 'Spectre-Datepicker',
  components: {
    calendar
  },
  data () {
    return {
      inputValue: this.value
    }
  },
  watch: {
    inputValue (val) {
      this.$emit('input', val)
    }
  },
  computed: {
    formGroupClass () {
      let position = this.iconPosition || 'right'
      return [
        this.inline ? 'form-inline' : '',
        'has-icon-' + position
      ]
    },
    iconClass () {
      let icon = this.icon ? 'icon-' + this.icon : undefined
      let loading = this.loading ? 'loading' : undefined
      icon = icon || loading
      return ['icon', icon]
    }
  },
  props: {
    id: String,
    name: String,
    type: String,
    size: String,
    icon: String,
    label: String,
    value: String,
    inline: Boolean,
    loading: Boolean,
    disabled: Boolean,
    placeholder: String,
    iconPosition: String
  }
}
</script>

<style lang="scss">
.date-picker{
  position: relative;
  .calendar{
    max-width: 300px;
    position: absolute;
    top: calc(100% + .2rem);
    z-index: 500;
    opacity: 0;
    height: 0;
    border: 0.05rem solid #dadee4;
    overflow: hidden;
    transition: opacity 200ms;
  }
  .calendar:hover,
  .calendar:focus,
  input:focus + .calendar{
    height: auto;
    border: auto;
    opacity: 1;
  }
}
</style>
