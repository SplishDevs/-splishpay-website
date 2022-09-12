<script>
export default {
}
</script>

<template>
  <section class="blog mx-auto mb-5">
    <div class="container-gravy">
      <div id="hero" class="blog-header relative bg-$black rounded-lg pt-24 md:pt-44 pl-4 md:pl-28 pb-24 md:pb-40">
        <h1 class="blog-header__title text-white text-4xl md:text-6xl lg:text-8xl">
          Business like never before
        </h1>
        <p class="sf blog-header__subtitle text-white text-xl md:text-2xl mt-6">
          The goals for Splish are to design and build easy-to-use and affordable products that help organize all of Africa's business information.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.blog {
  &-header {
    margin-top: 151px;
    margin-left: -10px;
    margin-right: -10px;
    background-image: url("@/assets/images/about-hero.png");
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
    &__title {
      width: 100%;
      max-width: 628px;
    }
    &__subtitle {
      width: 100%;
      max-width: 644px;
    }
    img {
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
}

</style>
