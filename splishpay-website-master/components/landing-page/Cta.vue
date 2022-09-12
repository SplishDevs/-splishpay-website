<script>
export default {
  data: () => ({
    fullName: '',
    email: '',
    message: ''
  })
}
</script>

<template>
  <section id="cta" class="cta my-5">
    <div class="container-gravy relative bg-white rounded-lg mb-5">
      <div class="flex flex-col lg:flex-row justify-between w-full my-8 md:my-16 md:w-11/12 mx-auto">
        <div class="touch flex flex-col lg:mr-12 mb-12 lg:mb-0">
          <span class="text-$primary uppercase font-medium mb-6">contact us</span>
          <h2 class="cta__title text-3xl md:text-6xl mb-20">
            Get In Touch
          </h2>
          <div class="discover text-white flex flex-col justify-between bg-$black pt-10 rounded-lg">
            <div class="px-11 ">
              <p class="sf text-xl md:text-2xl mb-12">
                Discover what Splish can do for you. Schedule a product demo today.
              </p>
              <a data-type="button" class="btn bg-$black border border-$primary rounded text-$primary px-11 text-lg py-5 btn-primary" href="https://calendly.com/splish/30min" target="_blank">
                Schedule Demo
              </a>
            </div>
            <img src="@/assets/images/splishwarev3-hd.png" alt="splishpay v3">
          </div>
        </div>
        <div class="enquire rounded-lg flex flex-col p-6 md:p-12 bg-$grey-3 mt-10 md:mt-0">
          <span class="text-$black uppercase font-medium">business enquiries</span>
          <p class="sf cta__subtitle text-xl md:text-2xl mt-6">
            We’re always open to collaborations and business partnerships. Contact us and we will reply in a few hours.
          </p>
          <form class="sf enquire-form mt-8" @submit.prevent="handleSubmit">
            <div class="mb-6">
              <label for="name" class="flex-grow">
                <p class="">Full Name</p>
                <input id="name" v-model="fullName" type="text" name="name" class="focus:outline-none">
              </label>
            </div>
            <div class="mb-6">
              <label for="email" class="flex-grow">
                <p class="">Email Address</p>
                <input id="name" v-model="email" type="text" name="name" class="focus:outline-none">
              </label>
            </div>
            <div class="">
              <label for="textarea" class="flex-grow">
                <p class="">Message</p>
                <textarea
                  id="textarea"
                  v-model="message"
                  type="text"
                  name="name"
                  class="focus:outline-none"
                  rows="1"
                  cols="50"
                />
              </label>
            </div>
            <button data-type="button" class="btn bg-$primary rounded self-start text-white px-12 text-lg py-5 btn-primary mt-8">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="container-gravy mt-5">
      <div class="subscribe relative bg-$primary rounded-lg p-6 md:p-20">
        <h2 class="subscribe__title text-white text-3xl md:text-6xl">
          Do it the easy way
        </h2>
        <p class="sf subscribe__subtitle text-white text-xl md:text-2xl mt-6">
          Join our mailing list and stay up-to-date with stories, features, discount and exclusives. No spam. Real stuff only.
        </p>
        <form class="subscribe-form mt-10 w-full" @submit.prevent="handleSubmit">
          <div class="flex flex-col md:flex-row justify-between items-stretch">
            <label for="email" class="flex-grow">
              <input
                id="name"
                v-model="email"
                type="text"
                name="name"
                class="focus:outline-none h-14 md:h-20 rounded px-5 md:px-10 text-white"
                placeholder="Email address"
              >
            </label>
            <button data-type="button" class="btn bg-white rounded self-start text-$primary px-12 text-lg py-4 md:py-5 btn-primary md:ml-2 mt-3 h-14 md:h-20 md:mt-0">
              Join
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cta {
  .touch {
    width: 100%;
    max-width: 393px;
  }
  &__title {
    width: 100%;
    max-width: 647px;
  }
  &__subtitle {
    width: 100%;
    max-width: 576px;
  }
  .discover {
    width: 100%;
    max-width: 408px;
    height: 481px;
  }
  .enquire {
    width: 100%;
    max-width: 824px;
    min-height: 672px;
    &-form {
      width: 100%;
      label {
        margin-bottom: 0;
      }
      input:not(#textarea) {
        width: 100%;
        background: transparent;
        border: none;
        border-bottom: 1px solid $black;
        height: 100%;
        padding: 20px;
        outline-color: $grey-3;
        &:focus {
          border: 1px solid $black;
          border-radius: 4px;
        }
      }
      #textarea {
        width: 100%;
        background: transparent;
        border: none;
        border-bottom: 1px solid $black;
        height: 100%;
        padding: 20px;
        outline-color: $grey-3;
        &:focus {
          border: 1px solid $black;
          border-radius: 4px;
        }
      }
    }
    @media screen and (max-width: 1041px) {
      height: auto;
    }
  }
  .subscribe {
    margin-left: -10px;
    margin-right: -10px;
    &__title {
      width: 100%;
      max-width: 509px;
    }
    &-form {
      label {
        margin-bottom: 0;
      }
      input {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        border: 1px solid #FFFFFF;
        backdrop-filter: blur(29px);
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
