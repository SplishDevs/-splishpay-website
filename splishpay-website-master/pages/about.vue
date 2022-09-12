<script>
import HeroSection from '~/components/about-page/Hero.vue'
import PartnerSection from '~/components/about-page/Partners.vue'
import Reason from '~/components/landing-page/Reason.vue'
import Cta from '~/components/landing-page/Cta.vue'
export default {
  name: 'BlogPage',
  components: {
    HeroSection,
    PartnerSection,
    Reason,
    Cta
  }
}
</script>
<template>
  <div>
    <HeroSection />
    <PartnerSection />
    <Reason />
    <Cta />
  </div>
</template>
