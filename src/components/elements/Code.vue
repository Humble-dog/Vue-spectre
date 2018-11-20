  <template>
  <pre class="code" :data-lang="lang">
    <code><slot/></code>
  </pre>
</template>

<script>
export default {
  name: 'Code',
  props: {
    lang: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.code code{
  margin-top: -1.55em;
}
</style>

