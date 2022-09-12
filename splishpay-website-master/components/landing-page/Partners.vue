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
  <section id="partners" class="partners my-5">
    <div class="container-gravy relative bg-white rounded-lg mb-5">
      <div class="flex flex-wrap items-center justify-between space-y-4 md:space-y-0 w-full md:w-3/4 mx-auto">
        <div class="w-1/6 sm:w-auto">
          <img src="@/assets/images/bloc.png" alt="bloc" class="sm:pr-4">
        </div>
        <div class="w-1/6 sm:w-auto">
          <img src="@/assets/images/Mastercard.png" alt="mastercard" class="sm:pr-4">
        </div>
        <div class="w-1/6 sm:w-auto">
          <img src="@/assets/images/Visa.png" alt="Visa" class="sm:pr-4">
        </div>
        <div class="w-1/6 sm:w-auto">
          <img src="@/assets/images/kuda.png" alt="kuda" class="sm:pr-4">
        </div>
        <div class="w-1/6 sm:w-auto">
          <img src="@/assets/images/interswitch.png" alt="Interswitch" class="sm:pr-4">
        </div>
      </div>
    </div>
    <div class="container-gravy relative bg-white rounded-lg mt-5">
      <div class="flex flex-col md:flex-row justify-between w-full mt-20 md:w-11/12 mx-auto">
        <div class="flex flex-col">
          <span class="text-$primary uppercase font-medium mb-6 tracking-widest">start with splish</span>
          <h2 class="partners__title text-3xl md:text-6xl">
            Proudly designed for everyday business
          </h2>
          <p class="sf partners__subtitle text-xl md:text-2xl mt-6">
            Out with the old, in with the new. Splish features are designed for every merchant.
          </p>
          <div class="list mt-8">
            <div v-for="(list, index) in listData" :key="index" class="flex space-x-2 text-lg mb-8">
              <img src="@/assets/icons/Tick.svg" alt="tick" class="mr-4"> <p class="sf">
                {{ list }}
              </p>
            </div>
          </div>
          <a data-type="button" class="btn bg-$primary rounded self-start text-white px-5 text-lg py-4 btn-primary mt-10" href="#footer">
            Download The App
          </a>
        </div>
        <div class="phones flex justify-center items-end bg-$grey-3 rounded mt-10 md:mt-0">
          <img src="@/assets/images/phones_new.png" alt="picture of phones">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.partners {
  &__title {
    width: 100%;
    max-width: 647px;
  }
  &__subtitle {
    width: 100%;
    max-width: 576px;
  }
  &-logos {
    width: 180px;
  }
  .list {
    p {
      width: 100%;
      max-width: 383px;
    }
  }
  .phones {
    width: 100%;
    max-width: 647px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
