<script>
export default {
  data: () => ({
    listData: [
      {
        idx: '01',
        title: 'Founded in 2019',
        subtitle: 'Our founder, Oreva Oweh Gregory, other serial entrepreneurs, and business owners have had a deep frustration about local businesses not being able to receive card payments.'
      },
      {
        idx: '02',
        title: 'Designed for all',
        subtitle: 'We have created a unique solution, that with a smartphone or tablet, any small or big merchant/vendor can accept card payments anywhere and anytime.'
      },
      {
        idx: '03',
        title: 'No hidden fees',
        subtitle: 'We are open and truthful about our pricing and have no hidden fees. We’re here to help sellers of all sizes start, run, and grow their awesome businesses.'
      },
      {
        idx: '04',
        title: 'One app, plenty use cases',
        subtitle: 'Your Inventory is faster and simpler to manage with "Items", Manage staff, Save customers. Accept payments in-store with our beautiful SplishWare, via bank transfer or Crypto (Bitcoin).'
      }
    ]
  })
}
</script>

<template>
  <section class="partners my-5">
    <div class="container-gravy relative bg-white rounded-lg mt-5">
      <div class="flex flex-col md:flex-row justify-between w-full mt-20 md:w-11/12 mx-auto">
        <h3 class="partners__title">
          Splish is building card readers and point of sale software for people who want to start, run and grow businesses.
        </h3>
        <div class="sf partners__subtitle">
          <p class="">
            SplishPay’s story begins with its name being coined from Miguel’s adlib on “Sky Walker”. Being a celebratory tune we have channeled that energy of excitement into building an ultimate transactional experience on our platform where ease of use and performance is at its core base.
          </p>
          <p class="mt-6">
            Whether our merchants are selling garri or fixing cars, we are making technology that anyone can use. We are empowering people like Uzo in computer village to receive card payments or Simon the electrician, to send invoices. Traditional offerings leave out small businesses, we don’t!
          </p>
        </div>
      </div>
      <div class="flex flex-wrap justify-between w-full my-20 md:w-11/12 mx-auto">
        <div v-for="(item) in listData" :key="item.idx" class="desc text-2xl mb-8 sm:mb-14">
          <p class="text-$grey-5">
            {{ item.idx }}
          </p>
          <div class="mt-4 w-full h-px bg-$grey-4 mb-8" />
          <p class="text-$black">
            {{ item.title }}
          </p>
          <p class="sf desc__subtitle mt-3 text-base">
            {{ item.subtitle }}
          </p>
        </div>
      </div>
    </div>
    <div class="container-gravy relative bg-$grey-2 mt-5">
      <div class="content flex flex-col md:flex-row justify-between">
        <a href="https://youtu.be/wMtAUgfwAgk" target="_blank" class="content-item flex flex-col items-center justify-center rounded-lg md:mr-5 py-32 sm:py-40 lg:py-0">
          <p class="text-white text-3xl md:text-4xl mb-6">
            Watch A Demo
          </p>
          <img class="w-20 md:w-auto" src="@/assets/icons/youtube.svg" alt="Youtube Icon">
        </a>
        <a href="https://youtube.com/shorts/Gli5ogTsg3o?feature=share" target="_blank" class="content-item flex flex-col items-center justify-center rounded-lg mt-6 md:mt-0 py-32 sm:py-40 lg:py-0">
          <p class="text-white text-3xl md:text-4xl mb-6">
            SplishWare For You
          </p>
          <img class="w-20 md:w-auto" src="@/assets/icons/youtube.svg" alt="Youtube Icon">
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.partners {
  &__title {
    width: 100%;
    max-width: 575px;
    font-size: 56px;
    line-height: 60.93px;
    @media screen and (max-width: 768px) {
      font-size: 32px;
      line-height: 1.5;
    }
  }
  &__subtitle {
    width: 100%;
    max-width: 576px;
    font-size: 22px;
    line-height: 32px;
    @media screen and (max-width: 768px) {
      margin-top: 24px;
      font-size: 18px;
      line-height: 1.5;
    }
  }
  .desc {
    width: 100%;
    max-width: 285px;
    &__subtitle {
      width: 100%;
      max-width: 273px;
      @media screen and (max-width: 768px) {
        max-width: 100%;
      }
    }
    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
.content {
  margin-left: -10px;
  margin-right: -10px;
  &-item {
    width: 100%;
    max-width: 684px;
    height: 664px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &:nth-child(1) {
      background-image: url('@/assets/images/demo.jpg');
    }
    &:nth-child(2) {
      background-image: url('@/assets/images/splishware4u.png');
    }
    @media screen and (max-width: 768px) {
      height: auto;
    }
  }
}
</style>
