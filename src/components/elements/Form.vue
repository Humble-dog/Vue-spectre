<template>
  <form>
    <div class="form-group" v-for="(input, i) in form" :key="i">
      <template v-if="input.type === 'radio'">
        <label class="form-label">{{input.title}}</label>
        <label
          v-for="(option, optionIndex) in input.options" :key="input.field + '-' + optionIndex"
          class="form-radio"
          :class="{ 'form-inline': input.inline }">
          <input type="radio"
          :name="input.field"
          :checked="input.checked !== undefined ? input.checked == optionIndex : false">
          <i class="form-icon"></i> {{option}}
        </label>
      </template>
      <template v-if="input.type === 'switch'">
        <label class="form-switch" :class="{ 'form-inline': input.inline }">
          <input type="checkbox">
          <i class="form-icon"></i> {{input.title}}
        </label>
      </template>
      <template v-if="input.type === 'checkbox'">
        <label class="form-checkbox" :class="{ 'form-inline': input.inline }">
          <input type="checkbox" :checked="input.checked">
          <i class="form-icon"></i> {{input.title}}
        </label>
      </template>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    form: [
      {
        type: 'radio',
        title: 'Gender',
        field: 'gender',
        checked: 0,
        inline: true,
        options: ['male', 'female']
      },
      {
        type: 'checkbox',
        title: 'Helo world',
        checked: true
      }
    ]
  })
}
</script>
