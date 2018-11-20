<template>
  <div id="app">
    <sp-button @click="hello" type="error">Hello</sp-button>
    <sp-icon icon="arrow-left"></sp-icon>
    <sp-label type="warning" rounded>Hello</sp-label>
    <sp-code lang="CSS">
      hello
    </sp-code>
    <sp-table :header="header" :data="data" striped></sp-table>
    <sp-form></sp-form>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    header: [
      { title: 'Name', key: 'name' },
      { title: 'Hello', key: 'zz' },
      { title: 'zzz', key: 'z' }
    ],
    data: [
      { name: 'zz', zz: 'zz', z: 'zzz' }
    ]
  }),
  methods: {
    hello () {
      console.log('hello')
    }
  }
}
</script>
