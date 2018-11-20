<template>
  <div id="app">
    <sp-button @click="hello" >Hello</sp-button>
    <sp-icon icon="arrow-left"></sp-icon>
    <sp-label type="primary" rounded>Hello</sp-label>
    <sp-code lang="CSS">
      hello
    </sp-code>
    <sp-table :header="header" :data="data" striped></sp-table>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    header: [
      { title: 'Name', key: 'name'},
      { title: 'Hello', key: 'zz' },
      { title: 'zzz', key: 'z' },
    ],
    data: [
      { name: 'zz', zz: 'zz', z: 'zzz' }
    ]
  }),
  methods: {
    hello() {
      console.log("hello")
    }
  }
}
</script>
