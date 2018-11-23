<template>
  <div class="form-group" :class="state ? 'has-' + state : ''">
    <label
      v-if="label"
      v-text="label"
      class="form-label"
      :for="id || name"
      :class="[size ? 'label-' + spSizes[size] : '']"></label>
    <select
      :id="id || name"
      :name="name || id"
      class="form-select"
      v-model="selectValue"
      :class="size ? 'select-' + spSizes[size] : ''">
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="optionAttr(index, 'value')"
        v-text="optionAttr(index, 'label')"></option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Spectre-Select',
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
      selectValue: this.value
    }
  },
  watch: {
    selectValue (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    optionAttr (index, type) {
      if (typeof this.options[index] === 'object') {
        return this.options[index][type]
      } else {
        return this.options[index]
      }
    }
  }
}
</script>
