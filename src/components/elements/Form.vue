<template>
  <form>
    <div class="form-group" v-for="(input, i) in form" :key="i">
      <label class="form-label" :class="[size ? 'label-' + spSizes[size] : '']">{{input.title}}</label>
      <template v-if="input.type === 'text'">
        <input class="form-input" :class="[size ? 'input-' + spSizes[size] : '']" v-model="data[input.field]" type="text" :placeholder="input.placeholder">
      </template>
      <template v-if="input.type === 'textarea'">
        <textarea class="form-input" :class="[size ? 'input-' + spSizes[size] : '']" v-model="data[input.field]" :placeholder="input.placeholder" :rows="input.rows ? input.rows : 3 "></textarea>
      </template>
      <template v-if="input.type === 'select'">
        <select class="form-select" :class="[input.size ? 'select-' + spSizes[input.size] : '']"  v-model="data[input.field]">
          <option
            v-for="(option, i) in input.options"
            :key="'option-' + i"
            :value="typeof option === 'object' ? option.value : option">
            {{typeof option === 'object' ? option.title : option}}</option>
        </select>
      </template>
      <template v-if="input.type === 'radio'">
        <label
          v-for="(option, optionIndex) in input.options" :key="input.field + '-' + optionIndex"
          class="form-radio"
          :class="[
            size ? 'input-' + spSizes[size] : '',
            input.inline ? 'form-inline' : '']">
          <input type="radio"
          v-model="data[input.field]"
          :name="input.field"
          :value="option"
          :checked="input.checked !== undefined ? input.checked == optionIndex : false">
          <i class="form-icon"></i> {{option}}
        </label>
      </template>
      <template v-if="input.type === 'switch'">
        <label class="form-switch"
          :class="[
            size ? 'input-' + spSizes[size] : '',
            input.inline ? 'form-inline' : '']">
          <input type="checkbox" v-model="data[input.field]">
          <i class="form-icon"></i> {{input.title}}
        </label>
      </template>
      <template v-if="input.type === 'checkbox'">
        <label class="form-checkbox"
          :class="[
            size ? 'input-' + spSizes[size] : '',
            input.inline ? 'form-inline' : '']">
          <input type="checkbox" :checked="input.checked" v-model="data[input.field]">
          <i class="form-icon"></i> {{input.title}}
        </label>
      </template>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Form',
  mounted () {
    this.formData = this.data
  },
  data: () => ({
    formData: {}
  }),
  props: {
    form: Array,
    data: Object,
    size: String
  }
}
</script>
