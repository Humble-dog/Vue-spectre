<template>
  <div class="accordion-children">
    <div class="accordion-item"
    v-for="(item, index) in data" :key="item.title">
      <div class="parent" @click="Array.isArray(active) 
      ? active.indexOf(index) == -1 ? active.push(index) : active.filter((value, index, arr) => {
        return value == index;
      })
      : active == index ? active = -1 : active = index" style="cursor: pointer;">
        <i class="icon" v-if="icon"
        :class="
        Array.isArray(active) 
        ? active.indexOf(index) != -1 ? 'icon-arrow-down' : 'icon-arrow-right'
        : active == index ? 'icon-arrow-down' : 'icon-arrow-right'"></i>
        {{item.title}}
      </div>
      <accordionItem class="children" style="cursor: pointer; position: relative; left: .5rem;"
      v-if="item.children && Array.isArray(active)
      ? active.indexOf(index) != -1
      : active == index"
      :data="item.children" :icon="icon" :multiOpen="multiOpen">
      </accordionItem>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordian',
  mounted() {
    if (this.multiOpen) {
      this.active = [];
    } else {
      this.active = -1;
    }
  },
  data: () => ({
    active: ''
  }),
  props: {
    data: Array,
    icon: {
      type: Boolean,
      default: false
    },
    multiOpen: {
      type: Boolean,
      default: false,
    }
  },
  components: {
    accordionItem: () => import('./Accordions')
  }
}
</script>

<style>

</style>
