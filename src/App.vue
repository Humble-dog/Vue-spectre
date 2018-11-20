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
    <sp-accordion :data="accordionData" icon></sp-accordion>
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
    ],
    accordionData: [
      { 
        title: 'Element 1', 
        children: [
          { 
            title: 'Sub-element 1', 
            content: 'Hello. I am content of sub-element 1.'
          },
          { 
            title: 'Sub-element 2',
            children: [
              { 
                title: 'Sub-sub-element 1', 
                children: [
                  { 
                    title: 'Sub-sub-element 1',
                    children: [
                      { title: 'Sub-sub-sub-element 1' }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'Element 2',
        image: './assets/logo.png'
      }
    ]
  }),
  methods: {
    hello () {
      alert('hello')
    }
  }
}
</script>
