<template>
  <form>
    <fieldset :disabled="disabled">
      <slot/>
    </fieldset>
  </form>
</template>

<script>
export default {
  props: {
    disabled: Boolean
  }
}
</script>
