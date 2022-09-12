<script>
export default {
  data: () => ({
    listData: [
      'Seamless experience for customers to book.',
      'Push Notifications for New bookings',
      'You are the Boss! accept or cancel bookings easily',
      'Accept payments before or after service has been rendered'
    ]
  })
}
</script>

<template>
  <section class="container-gravy my-5">
    <div class="grow bg-$black rounded-lg py-20 text-center">
      <span class="text-$primary uppercase font-medium">grow with splish</span>
      <h1 class="grow__title text-white text-4xl md:text-6xl mx-auto mt-6">
        Do it the easy way
      </h1>
      <p class="sf grow__subtitle text-white text-xl md:text-2xl mt-6 mx-auto">
        With our complete business toolkit, maximize the efficiency of your business.
      </p>
      <div class="cards flex flex-wrap mx-auto mt-12 px-4 md:px-10 w-full">
        <div class="cards__card flex flex-col justify-between items-start red rounded p-4 md:p-10 my-3">
          <img src="@/assets/icons/Activity.svg" alt="activity icon" class="w-16 md:w-auto">
          <div class="text-left">
            <p class="font-medium text-white uppercase mt-4">
              record a sale
            </p>
            <p class="text-white mt-6 text-xl md:text-2xl">
              During a sale, you can record a sale by cash, bank transfer, invoice or card. Giving your business detailed information on all your day to day activities.
            </p>
          </div>
        </div>
        <div class="cards__card flex flex-col justify-between items-start yelow rounded p-4 md:p-16 my-3">
          <img src="@/assets/icons/Star.svg" alt="activity icon" class="self-end mr-0 sm:-mr-6 md:-mr-14 mt-0 sm:-mt-6 md:-mt-14 w-16 md:w-auto">
          <div class="text-left text-white">
            <p class="font-medium uppercase">
              Start, run and grow
            </p>
            <p class="mt-6 text-2xl md:text-4xl">
              Create an account within minutes and enjoy access to future-focused tools for your business from point-of-sale to financial services
            </p>
            <p class="sf mt-6 text-lg">
              No hidden fees. Only pay when you take a payment
            </p>
          </div>
        </div>
        <img src="@/assets/images/blur.png" alt="blurred image" class="cards__card my-3">
        <div class="cards__card flex flex-col items-start rounded p-4 md:p-10 my-3">
          <div class="text-left text-white">
            <p class="font-medium uppercase">
              create items
            </p>
            <p class="mt-8 text-xl md:text-2xl">
              Create and manage items, so you can sell better and faster
            </p>
            <div class="sf mt-8 w-full">
              <div class="item flex justify-between items-center p-4">
                <div class="flex">
                  <div class="green w-8 h-8 rounded-full mr-2" />
                  <div class="text-xs">
                    <p>NIKE Sneakers</p>
                    <p class="small">
                      16 Items
                    </p>
                  </div>
                </div>
                <img src="@/assets/icons/arrow_right.svg" alt="right arrow">
              </div>
              <div class="item flex justify-between items-center p-4">
                <div class="flex">
                  <div class="blue w-8 h-8 rounded-full mr-2" />
                  <div class="text-xs">
                    <p>ASOS Apparels</p>
                    <p class="small">
                      32 Items
                    </p>
                  </div>
                </div>
                <img src="@/assets/icons/arrow_right.svg" alt="right arrow">
              </div>
              <div class="item flex justify-between items-center p-4">
                <div class="flex">
                  <div class="yellow w-8 h-8 rounded-full mr-2" />
                  <div class="text-xs">
                    <p>Smiley Socks</p>
                    <p class="small">
                      8 Items
                    </p>
                  </div>
                </div>
                <img src="@/assets/icons/arrow_right.svg" alt="right arrow">
              </div>
            </div>
          </div>
        </div>
        <div class="cards__card flex flex-col items-start rounded p-4 md:p-10 my-3">
          <div class="text-left text-white">
            <p class="font-medium uppercase">
              manage staff
            </p>
            <img src="@/assets/images/avatars.png" alt="avatars" class="mt-8">
            <div class="mt-4 flex w-full">
              <img src="@/assets/icons/list-style.svg" alt="list style" class="list ml-3">
              <div class="flex flex-col md:text-lg ml-3">
                <p class="create">
                  Create and manage people who help you run your business.
                </p>
                <p class="mt-3">
                  Easily customizable access for staff.
                </p>
                <p class="mt-3">
                  Keep track of team performance, Pay team with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="cards__card flex flex-col items-start justify-between rounded pt-6 md:pt-12 px-4 md:px-10 my-3">
          <div class="text-left text-white">
            <p class="font-medium uppercase">
              customers
            </p>
            <p class="mt-6 text-xl md:text-2xl">
              Create and manage customers. You can have all your customer details from name to address. We also allow you to Import customers from excel with ease.
            </p>
          </div>
          <div>
            <img src="@/assets/images/initials.png" alt="initials" class="mt-6">
            <img src="@/assets/images/reflections.png" alt="reflections" class="mt-4">
          </div>
        </div>
        <div class="cards__card flex flex-col items-start justify-between rounded pt-6 md:pt-12 pl-4 md:pl-10 pr-6 md:pr-16 pb-5 md:pb-10 my-3">
          <div class="text-left text-white">
            <p class="font-medium uppercase">
              Appointment | Schedule
            </p>
            <div class="list mt-8">
              <div v-for="(list, index) in listData" :key="index" class="flex space-x-2 text-lg mb-3 md:mb-6">
                <img src="@/assets/icons/icon.svg" alt="icon" class="mr-4"> <p class="text-lg sm:text-xl md:text-2xl">
                  {{ list }}
                </p>
              </div>
            </div>
          </div>
          <img src="@/assets/icons/Calendar.svg" alt="initials" class="mt-6 w-20 md:w-auto">
        </div>
        <div class="cards__card my-3">
          <div class="small flex items-center justify-between rounded pt-6 md:pt-12 pl-5 md:pl-10 pr-4 pb-5 md:pb-10">
            <div class="text-left text-white">
              <p class="font-medium uppercase">
                ⚡️Lightning Network
              </p>
              <p class="mt-5 text-xl md:text-2xl">
                Selling Garri or making Hair ? Accept Bitcoin easily.
              </p>
              <button data-type="button" class="btn flex rounded text-$primary px-5 text-lg py-4 mt-8">
                Coming Soon
              </button>
            </div>
            <img src="@/assets/images/bitcoin.png" alt="bitcoin image" class="w-40 md:w-auto hidden sm:flex">
          </div>
          <div class="small flex items-center justify-between rounded pt-6 md:pt-12 pl-5 md:pl-10 pr-4 pb-5 md:pb-10 mt-6">
            <div class="text-left text-white">
              <p class="font-medium uppercase">
                SplishWare
              </p>
              <p class="mt-5 text-xl md:text-2xl design">
                We design and build affordable hardware to work with any kind of business. Accept payments in the most secure way.
              </p>
            </div>
            <img src="@/assets/images/splishwarev2-hd.png" alt="splishware image" class="splish -mt-12 w-32 md:w-auto hidden sm:flex">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.grow {
  margin-left: -10px;
  margin-right: -10px;
  &__title {
    width: 100%;
    max-width: 509px;
  }
  &__subtitle {
    width: 100%;
    max-width: 503px;
  }
  .cards {
    &__card {
      &:nth-child(1) {
        width: 100%;
        max-width: 400px;
        height: 621px;
        background: rgba(227, 19, 82, 0.4);
        border: 1px solid #E31352;
        backdrop-filter: blur(92px);
        @media screen and (max-width: 768px) {
          height: auto;
        }
      }
      &:nth-child(2) {
        margin-left: 24px;
        margin-right: 24px;
        width: 100%;
        max-width: 576px;
        height: 621px;
        background-image: url('@/assets/images/yellow_bg.png');
        background-size: cover;
        @media screen and (max-width: 1085px) {
          margin-left: 0;
        }
        @media screen and (max-width: 768px) {
          height: auto;
          margin-right: 0;
        }
      }
      &:nth-child(3) {
        @media screen and (max-width: 951px) {
          margin-right: 24px;
        }
        @media screen and (max-width: 768px) {
          margin-right: 0;
        }
      }
      &:nth-child(4) {
        width: 100%;
        max-width: 400px;
        height: 400px;
        background-color: $black-2;
        background-image: url('@/assets/icons/gem_1.svg');
        background-position: center;
        .item {
          &:nth-child(1) {
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 6px;
          }
          .small {
            font-size: 10px;
          }
          .green {
            background-color: #17E5A1;
          }
          .blue {
            background-color: #007AFF;
          }
          .yellow {
            background-color: #E0B002;
          }
        }
        @media screen and (max-width: 1375px) {
          margin-left: 24px;
        }
        @media screen and (max-width: 1085px) {
          margin-left: 0;
          margin-right: 24px;
        }
        @media screen and (max-width: 768px) {
          height: auto;
          margin-right: 0;
        }
      }

      &:nth-child(5) {
        width: 100%;
        max-width: 448px;
        height: 400px;
        margin-left: 24px;
        margin-right: 24px;
        background-color: $black-2;
        .list {
          height: 180px;
        }
        .create {
          margin-top: 30px;
        }
        @media screen and (max-width: 1251px) {
          margin-left: 0;
        }
        @media screen and (max-width: 768px) {
          height: auto;
          margin-right: 0;
        }
      }

      &:nth-child(6) {
        width: 100%;
        max-width: 400px;
        height: 400px;
        background-color: $black-2;
        @media screen and (max-width: 1375px) {
          margin-right: 24px;
        }
        @media screen and (max-width: 768px) {
          height: auto;
          margin-right: 0;
        }
      }

      &:nth-child(7) {
        width: 100%;
        max-width: 640px;
        height: 600px;
        background-color: $black-2;
        @media screen and (max-width: 768px) {
          height: auto;
        }
      }

      &:nth-child(8) {
        width: 100%;
        max-width: 632px;
        height: 600px;
        margin-left: 24px;
        .small {
          background-color: $black-2;
          height: 288px;
          width: 100%;
          button {
            background: rgba(0, 122, 255, 0.4);
            backdrop-filter: blur(68px);
            /* Note: backdrop-filter has minimal browser support */

            border-radius: 76px;
            padding: 22px 45px;
            line-height: 19.58px;
          }
          .design {
            width: 100%;
            max-width: 326px;
          }
          @media screen and (max-width: 768px) {
            height: auto;
          }
        }
        @media screen and (max-width: 1375px) {
          margin-left: 0;
        }
        @media screen and (max-width: 768px) {
          height: auto;
        }
      }

    }
  }
  .splish {
    width: 220px;
    height: 352px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
