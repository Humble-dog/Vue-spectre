<template>
  <table class="table"
    :class="[
      hovered ? 'table-hover' : '',
      striped ? 'table-striped' : ''
    ]">
    <thead>
      <tr>
        <th v-for="(head, index) in header" :key="index">{{head.title}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(items, index) in data" :key="'data-index-' + index" :class='{ "active": items.active }'>
        <td v-for="head in header" :key="'data-index' + index + '-' + head.title">{{ items[head.key] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    header: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    hovered: Boolean,
    striped: Boolean
  }
}
</script>
