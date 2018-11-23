<template>
  <div class="bar" :class="[
    thin   ? 'bar-sm' : '',
    slider ? 'bar-slider' : ''
  ]">
  
    <!-- Ranged Slider -->
    <div class="bar-slider-group" v-if="slider && sliderRange"
    v-for="end in data" :key="end.value">
      <div class="bar-item" role="progressbar" :style="'width:'+end.value+'%;'">
        <button class="bar-slider-btn btn" role="slider"
        :class="[
          tooltip ? 'tooltip' : '',
          tooltipPosition ? 'tooltip-'+tooltipPosition : ''
        ]" :data-tooltip="tooltip ? end.value : ''"></button>
      </div>
    </div>

    <!-- Slider -->
    <div class="bar-item" v-else-if="slider"
    role="progressbar" :style="'width:'+data.value+'%;'">
      <button class="bar-slider-btn btn" role="slider"
      :class="[
        tooltip ? 'tooltip' : '',
        tooltipPosition ? 'tooltip-'+tooltipPosition : ''
      ]" :data-tooltip="tooltip ? data.value : ''"></button>
    </div>

    <!-- Multi -->
    <div class="bar-item" :class="[
      tooltip ? 'tooltip' : '',
      tooltipPosition ? 'tooltip-'+tooltipPosition : ''
    ]" :data-tooltip="item.tooltip" :style="[
      'width:'+item.value+'%;', 
      'background-color:'+bgColor
    ]"
    v-if="multi" v-for="(item, index) in data" :key="index">
      {{item.content || item.value}}
    </div>

    <!-- Single -->
    <div class="bar-item" :class="[
      tooltip ? 'tooltip' : '',
      tooltipPosition ? 'tooltip-'+tooltipPosition : ''
    ]" role="progressbar" :style="'width:'+data.value/(range[1] - range[0])*100+'%;'" v-else
    :aria-valuenow="data.value" :aria-valuemin="range[0]" :aria-valuemax="range[1]">
      {{data.content || data.value}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: [Array, Object],
    range: {
      type: Array,
      default: () => {
        return [0, 100];
      },
      validator: function (thing) {
        return thing.length == 2 && thing[0] < thing [1]
      }
    },
    thin: {
      type: Boolean,
      default: false
    },
    multi: {
      type: Boolean,
      default: false
    },
    slider: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: Boolean,
      default: false
    },
    tooltipPosition: {
      type: String,
      validator: function (thing) {
        return [
          'up', 'right', 'left', 'bottom'
        ].indexOf(thing) != -1
      }
    }
  }
}
</script>

<style>

</style>
