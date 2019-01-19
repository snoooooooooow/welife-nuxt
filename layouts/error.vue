<template>
  <div class="container">
    <not-found v-if="error.statusCode === 404"/>
  </div>
</template>

<script>
import NotFound from '@/components/exception/NotFound'
export default {
  components: { NotFound },
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  layout: 'error' // 你可以为错误页面指定自定义的布局
}
</script>
