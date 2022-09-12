<script>
export default {
}
</script>

<template>
  <section class="container-gravy mb-5">
    <div id="hero" class="header relative bg-$black rounded-lg pt-12 md:pt-44 pl-4 md:pl-28 pb-12 md:pb-40">
      <h1 class="header__title text-white text-4xl md:text-6xl lg:text-8xl">
        Just the right size of convenience
      </h1>
      <p class="sf header__subtitle text-white text-xl md:text-2xl mt-6">
        We believe payments should be easy, quick and convenient. Splishpay will change how your business accepts payments
      </p>
      <div class="buttons flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 mt-10">
        <a data-type="button" class="btn bg-$primary rounded text-white px-5 text-lg py-4 btn-primary" href="#footer">
          Download The App
        </a>
        <a data-type="button" class="btn bg-$black flex rounded text-white px-5 text-lg py-4 btn-primary" href="https://medium.com/@splishpay" target="_blank">
          <span>Read Our Story</span><img src="@/assets/icons/Medium.svg" alt="medium icon" class="ml-2">
        </a>
      </div>
      <img src="@/assets/images/splishware-hd.png" alt="Splish card reader" class="header__bg header__bg-1 md:absolute md:top-0 md:right-0 md:mt-20">
    </div>
  </section>
</template>

<style lang="scss" scoped>
.header {
  margin-top: 151px;
  margin-left: -10px;
  margin-right: -10px;
  &__title {
    width: 100%;
    max-width: 794px;
  }
  &__subtitle {
    width: 100%;
    max-width: 644px;
  }
  &__bg {
    width: 652px;
    @media screen and (min-width: 768px) and (max-width: 1280px) {
      display: none;
    }
  }
  @media screen and (max-width: 640px) {
    margin-top: 80px;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
