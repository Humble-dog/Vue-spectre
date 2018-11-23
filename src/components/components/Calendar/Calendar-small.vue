<template>
  <div class="calendar">
    <!-- calendar navbar -->
    <div class="calendar-nav navbar">
      <button class="btn btn-action btn-link btn-lg" @click="prevMonth">
        <i class="icon icon-arrow-left"></i>
      </button>
      <div class="navbar-primary">
        <div class="columns" v-if="editable">
          <div class="column col-6">
            <select
              class="form-select"
              v-model.number="current.month">
              <option
                v-for="n in 12"
                :value="n - 1"
                :key="'month-' + n"
                v-text="getMonthName(n - 1)"
              ></option>
            </select>
          </div>
          <div class="column col-6">
            <input
              v-model="current.year"
              class="form-input"
              type="number"
              placeholder="Year">
          </div>
        </div>
        <template v-else>{{ formatDate(current.date, 'MMM YYYY')}}</template>
      </div>
      <button class="btn btn-action btn-link btn-lg" @click="nextMonth">
        <i class="icon icon-arrow-right"></i>
      </button>
    </div>

    <div class="calendar-container">
      <div class="calendar-header">
        <div class="calendar-date">Sun</div>
        <div class="calendar-date">Mon</div>
        <div class="calendar-date">Tue</div>
        <div class="calendar-date">Wed</div>
        <div class="calendar-date">Thu</div>
        <div class="calendar-date">Fri</div>
        <div class="calendar-date">Sat</div>
      </div>

      <div class="calendar-body">
        <div class="calendar-date prev-month" v-for="day in genPrevMonth()" :key="formatDate(day.date)" :aria-date="formatDate(day.date)">
          <button class="date-item">{{day.date.getDate()}}</button>
        </div>
        <div class="calendar-date" v-for="day in genCurrMonth()" :key="formatDate(day.date)" :aria-date="formatDate(day.date)">
          <button class="date-item" @click="selectDate(day.date)">{{day.date.getDate()}}</button>
        </div>
        <div class="calendar-date next-month" v-for="day in genNextMonth()" :key="formatDate(day.date)" :aria-date="formatDate(day.date)">
          <button class="date-item">{{day.date.getDate()}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDay, startOfMonth, getTime, endOfMonth, subDays, subMonths, format, addDays, getDaysInMonth, addMonths, setYear, setMonth } from 'date-fns'

export default {
  name: 'Spectre-Calendar-small',
  props: {
    value: {
      type: String,
      default: ''
    },
    editable: Boolean
  },
  data () {
    return {
      current: {
        date: getTime(new Date()),
        year: parseInt(format(getTime(new Date()), 'YYYY')),
        month: parseInt(format(getTime(new Date()), 'M'))
      },
      selected: ''
    }
  },
  watch: {
    selected (val) {
      this.$emit('input', val)
    },
    'current.year' (val) {
      this.current.date = setYear(this.current.date, val)
    },
    'current.month' (val) {
      this.current.date = setMonth(this.current.date, val)
    }
  },
  methods: {
    nextMonth () {
      this.current.date = addMonths(this.current.date, 1)
    },
    prevMonth () {
      this.current.date = subMonths(this.current.date, 1)
    },
    genPrevMonth () {
      let prevMonthCalendar = []
      for (let day = getDay(startOfMonth(this.current.date)); day > 0; day--) {
        prevMonthCalendar.push({
          date: subDays(endOfMonth(subMonths(this.current.date, 1)), day - 1)
        })
      }
      return prevMonthCalendar
    },
    genCurrMonth () {
      let currMonthCalendar = []
      for (let day = 0; day < getDaysInMonth(this.current.date); day++) {
        currMonthCalendar.push({
          date: addDays(startOfMonth(this.current.date), day)
        })
      }
      return currMonthCalendar
    },
    genNextMonth () {
      let nextmonthCalendar = []
      for (let day = 6; day > getDay(endOfMonth(this.current.date)); day--) {
        nextmonthCalendar.push({
          date: addDays(startOfMonth(addMonths(this.current.date, 1)), 6 - day)
        })
      }
      return nextmonthCalendar
    },
    getMonthName (n) {
      return format(setMonth(this.current.date, n), 'MMM')
    },
    formatDate (date, dateFormat = 'DD-MM-YYYY') {
      return format(date, dateFormat)
    },
    selectDate (date) {
      this.selected = this.formatDate(date)
    }
  }
}
</script>

<style lang="scss">
.calendar-nav{
  .navbar-primary{
    width: calc(100% - 80px);
    text-align: center;
    .form-input{
      padding-right: .25rem;
    }
  }
}
</style>
