<script>
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '~/components/AppFooter.vue'
export default {
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>
<template>
  <div>
    <AppNavbar />
    <nuxt />
    <AppFooter />
  </div>
</template>
