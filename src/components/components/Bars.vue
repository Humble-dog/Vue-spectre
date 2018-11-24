<template>
  <div class="bar" :class="[
    thin   ? 'bar-sm' : '',
    slider ? 'bar-slider' : ''
  ]">

    <!-- Ranged Slider -->
    <div class="bar-item-wrapper" v-if="slider && data.length === 2">
      <div class="bar-item" role="progressbar" :style="'width:'+end.value+'%;'"
      v-for="end in data" :key="end.value">
        <button class="bar-slider-btn btn" role="slider"
        :class="[
          tooltip ? 'tooltip' : '',
          tooltipPosition ? 'tooltip-'+tooltipPosition : ''
        ]" :data-tooltip="tooltip ? end.value : ''"></button>
      </div>
    </div>

    <!-- Slider -->
    <div class="bar-item" v-if="slider && data.length === 1"
    role="progressbar" :style="'width:'+data.value+'%;'">
      <button class="bar-slider-btn btn" role="slider"
      :class="[
        tooltip ? 'tooltip' : '',
        tooltipPosition ? 'tooltip-'+tooltipPosition : ''
      ]" :data-tooltip="tooltip ? data.value : ''"></button>
    </div>

    <!-- Multi -->
    <div class="bar-item-wrapper" v-if="multi">
      <div class="multi bar-item" :class="[
        tooltip ? 'tooltip' : '',
        tooltipPosition ? 'tooltip-'+tooltipPosition : '',
        'bar-item-'+(index+1)
      ]" :data-tooltip="item.tooltip" :style="'width:'+item.value+'%;'"
      v-for="(item, index) in data" :key="index">
        {{item.content || item.value}}
      </div>
    </div>

    <!-- Single -->
    <div class="bar-item" :class="[
      tooltip ? 'tooltip' : '',
      tooltipPosition ? 'tooltip-'+tooltipPosition : '',
    ]" :data-tooltip="data.tooltip || data.value" role="progressbar" :style="'width:'+(data.value-range[0])/(range[1] - range[0])*100+'%;'"
    :aria-valuenow="data.value" :aria-valuemin="range[0]" :aria-valuemax="range[1]"
    v-if="!multi && !slider">
      <div v-if="!noContent">{{data.content || data.value}}</div>
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
        return [0, 100]
      },
      validator: function (thing) {
        return thing.length === 2 && thing[0] < thing[1]
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
    bgColor: {
      type: String,
      default: '#5755d9'
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
        ].indexOf(thing) !== -1
      }
    },
    noContent: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.multi {
  border-right: .1rem solid rgba(238,240,243,1);
  &:last-child {
    border-right: none;
  }
}
</style>
