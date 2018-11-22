<template>
  <div class="accordion-children">
    <div class="accordion-item"
    v-for="(item, index) in data" :key="item.title">
      <div class="parent" @click="Array.isArray(active)
      ? active.indexOf(index) === -1 ? active.push(index) : active.splice(active.indexOf(index), 1)
      : active === index ? active = -1 : active = index" style="cursor: pointer;">
        <i class="icon" v-if="icon"
        :class="
        Array.isArray(active)
        ? active.indexOf(index) !== -1 ? 'icon-arrow-down' : 'icon-arrow-right'
        : active === index ? 'icon-arrow-down' : 'icon-arrow-right'"></i>
        {{item.title}}
      </div>
      <template v-if="showContent(item, index, 'image')">
        <img :src="item.image">
      </template>
      <template v-if="showContent(item, index, 'content')">
        <div>{{item.content}}</div>
      </template>
      <accordionItem class="children" style="cursor: pointer; position: relative; left: .5rem;"
      v-if="item.children && Array.isArray(active)
      ? active.indexOf(index) !== -1
      : active === index"
      :data="item.children" :icon="icon" :multiOpen="multiOpen" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  mounted () {
    if (this.multiOpen) {
      this.active = []
    } else {
      this.active = -1
    }
  },
  data: () => ({
    active: null
  }),
  props: {
    data: Array,
    icon: {
      type: Boolean,
      default: false
    },
    multiOpen: {
      type: Boolean,
      default: false
    }
  },
  components: {
    accordionItem: () => import('./Accordions')
  },
  methods: {
    showContent (item, index, type = 'content') {
      var found = false
      if (Array.isArray(this.active) && this.active.indexOf(index) !== -1) {
        found = true
      } else if (this.active === index) {
        found = true
      }
      if (type === 'image') { return item.image && !item.children && found }
      if (type === 'content') { return item.content && !item.children && found }
    }
  }
}
</script>
