<template>
  <div class="breadcrumb">
    <ul class="breadcrumb-list">
      <li class="breadcrumb-item" v-for="(item, index) in data" :key="index">
        <a :href="item.href" v-if="item.href">{{item.text}}</a>

        <router-link :to="item.to" 
        v-else-if="item.to">{{item.text}}</router-link>
        
        <span v-else>{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  }
}
</script>

<style lang="scss">
.breadcrumb .breadcrumb-item {
  cursor: pointer;
}
</style>
