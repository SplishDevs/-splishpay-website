<script>
import HeroSection from '~/components/landing-page/Hero.vue'
import PartnerSection from '~/components/landing-page/Partners.vue'
import GrowthSection from '~/components/landing-page/Grow.vue'
import Reason from '~/components/landing-page/Reason.vue'
import Cta from '~/components/landing-page/Cta.vue'
export default {
  name: 'IndexPage',
  components: {
    HeroSection,
    PartnerSection,
    GrowthSection,
    Reason,
    Cta
  }
}
</script>
<template>
  <div>
    <HeroSection />
    <PartnerSection />
    <GrowthSection />
    <Reason />
    <Cta />
  </div>
</template>
