<template>
  <div class="form-group" :class="formGroupClass">
    <label
      v-if="label"
      v-text="label"
      class="form-label"
      :for="id || name"
      :class="[size ? 'label-' + spSizes[size] : '']"></label>
    <textarea
      :cols="cols"
      :id="id || name"
      :rows="rows || 3"
      :name="name || id"
      class="form-input"
      v-model="inputValue"
      :type="type || 'text'"
      :placeholder="placeholder"
      :class="[size ? 'input-' + spSizes[size] : '']"
      :disabled="disabled"></textarea>
    <p class="form-input-hint" v-if="hint" v-text="hint"></p>
  </div>
</template>

<script>
export default {
  name: 'Spectre-Input',
  props: {
    cols: String,
    disabled: Boolean,
    hint: String,
    id: String,
    label: String,
    name: String,
    placeholder: String,
    rows: String,
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
        this.state ? 'has-' + this.state : ''
      ]
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
textarea.input-lg{
  height: auto !important;
}
</style>
