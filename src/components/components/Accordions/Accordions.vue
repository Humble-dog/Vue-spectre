<template>
  <div class="accordion">
    <div class="accordion-item"
    v-for="(item, index) in data" :key="item.title">
      <div class="parent" @click="checkAdd(index)" style="cursor: pointer;">
        <i class="icon" v-if="icon"
        :class="updateIcon(index)"></i>
        {{item.title}}
      </div>
      <template v-if="showContent(item, index, 'image')">
        <img :src="item.image">
      </template>
      <template v-if="showContent(item, index, 'content')">
        <div>{{item.content}}</div>
      </template>
      <accordionItem class="children"
      v-if="item.children && checkActive(index)"
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
    accordionItem: () => import('./Accordion-recursion')
  },
  methods: {
    checkAdd (index) {
      Array.isArray(this.active)
        ? this.active.indexOf(index) === -1 ? this.active.push(index) : this.active.splice(this.active.indexOf(index), 1)
        : this.active === index ? this.active = -1 : this.active = index
    },
    showContent (item, index, type) {
      var found = false
      if (Array.isArray(this.active) && this.active.indexOf(index) !== -1) {
        found = true
      } else if (this.active === index) {
        found = true
      }
      if (type === 'image') { return item.image && !item.children && found }
      if (type === 'content') { return item.content && !item.children && found }
    }
  },
  computed: {
    checkActive (index) {
      return Array.isArray(this.active)
        ? this.active.indexOf(index) !== -1
        : this.active === index
    },
    updateIcon (index) {
      return Array.isArray(this.active)
        ? this.active.indexOf(index) !== -1 ? 'icon-arrow-down' : 'icon-arrow-right'
        : this.active === index ? 'icon-arrow-down' : 'icon-arrow-right'
    }
  }
}
</script>

<style lang="scss" scoped>
.children {
  cursor: pointer;
  position: relative;
  left: .5rem;
}
</style>
