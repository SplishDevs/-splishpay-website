<script>
export default {
  data: () => ({
    listData: [
      'Record every transactions with the app, leave out the paper and pen.',
      'Save your items for easy checkouts, record failed or pending bank transfers',
      'Create services and send out scheduling links to your customers'
    ]
  })
}
</script>

<template>
  <section class="reason my-5">
    <div class="container-gravy relative bg-white rounded-lg">
      <div class="flex text-center flex-col justify-between items-center w-full my-20 md:w-11/12 mx-auto">
        <span class="text-$primary uppercase font-medium mb-6">why splish</span>
        <h2 class="reason__title text-3xl md:text-6xl">
          Fast, Easy, Secure.
        </h2>
        <p class="sf reason__subtitle text-xl md:text-3xl mt-6">
          Splish is an uncomplicated solution for new and existing business owners. I’ve never used a POS system like this before, it’s easy to use with an easy learning curve. — you are in the right place!
        </p>
        <img src="@/assets/images/avatar-hd.png" alt="avatar" class="mt-6 md:mt-14 w-20 md:w-auto mx-auto">
        <p class="text-$primary font-medium text-xl md:text-2xl mt-6">
          Dammy Ade
        </p>
        <p class="text-$black md:text-xl mt-2">
          The Beauty Arcade
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.reason {
  &__title {
    width: 100%;
    max-width: 543px;
  }
  &__subtitle {
    width: 100%;
    max-width: 1037px;
    line-height: 56px;
    @media screen and (max-width: 996px) {
      line-height: 1.5;
    }
  }
  .list {
    p {
      width: 100%;
      max-width: 383px;
    }
  }
  img {
    width: 116px;
    height: 116px;
    @media screen and (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }
  @media screen and (max-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
