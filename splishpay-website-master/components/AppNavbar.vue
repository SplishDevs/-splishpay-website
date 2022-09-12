<script>
export default {
  name: 'AppNavbar',
  data: () => ({
    open: false,
    showModal: false,
    scrolled: false
  }),
  created () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    if (typeof window !== 'undefined') {
      // here `window` is available
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  mounted () {
    this.handleClick()
  },
  destroyed () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0
    },
    goToBook () {
      this.$router.push('http://calendly.com/')
    },
    handleClick () {
      const links = document.querySelectorAll('.navbar-links__item a')
      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
          this.parentElement.parentElement.children[0].click()
        })
      }
      // Array.prototype.forEach.call(links, function (link) {
      //   link.addEventListener('click', (e) => {
      //     console.log(this.showModal)
      //     e.preventDefault()
      //     // this.open = false
      //   })
      // })
    }
  }
}
</script>
<template>
  <nav class="app-nav" :class="scrolled ? 'navbar-scroll' : ''">
    <div class="navbar flex">
      <div class="navbar-left flex justify-between align-middle items-center w-full">
        <NuxtLink to="/" class="navbar__logo">
          <img class="w-20 sm:w-40" src="@/assets/images/splish.png" alt="Splish logo">
        </NuxtLink>
        <button class="navbar__toggle pr-3 lg:hidden" @click="open = !open">
          <span class="sr-only">Toggle Navbar</span>
          <div />
          <div />
          <div />
        </button>
        <ul
          class="navbar-links my-0 bg-white py-5 md:px-8 rounded-lg text-center"
          :class="{ 'navbar-links--open': open }"
        >
          <button class="navbar-links__toggle lg:hidden" @click="open = !open">
            <span class="sr-only">Toggle Navbar</span>
            <img src="@/assets/icons/close.svg" alt="close icon">
          </button>
          <li class="navbar-links__item">
            <NuxtLink to="/#hero">
              Card Reader
            </NuxtLink>
          </li>
          <li class="navbar-links__item">
            <NuxtLink to="/#partners">
              Merchants
            </NuxtLink>
          </li>
          <li class="navbar-links__item">
            <NuxtLink to="/about">
              About
            </NuxtLink>
          </li>
          <li class="navbar-links__item">
            <NuxtLink to="/#cta">
              Contact
            </NuxtLink>
          </li>
          <li class="navbar-links__item lg:hidden">
            <a href="#footer" data-type="button" class="btn bg-$primary rounded text-white px-5 text-lg py-4 btn-primary">
              Download The App
            </a>
          </li>
        </ul>
        <ul class="navbar-links d-none d-lg-flex mb-0">
          <li class="navbar-links__item">
            <a href="#footer" data-type="button" class="btn bg-$primary rounded text-white px-7 text-lg py-5 btn-primary">
              Download The App
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.app-nav {
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #E3E8EF;
  z-index: 10;
}
.navbar {
  width: 1400px;
  max-width: 100%;
  margin: 0 auto;

  &__logo {
    img {
      max-width: 150px;
    }
  }

  &-left {
    @media screen and (max-width: 768px) {
      width: 100%;
      justify-content: space-between;
    }
  }

  &-links {
    display: flex;
    align-items: center;
    list-style-type: none;

    &__item {
      margin: 0 10px;
      a:not([data-type=button]) {
        color: $black;
        text-decoration: none;
        &:hover {
          opacity: 0.9;
          color: $black;
        }
        @media screen and (min-width: 768px) {
          padding-left: 15px;
          padding-right: 15px;
        }
      }

      button:not([data-type=button]) {
        color: $black;
        font-weight: 700;
        border-radius: 8px;
        min-height: 50px;
        min-width: 170px;
      }
    }

    @media screen and (max-width: 991px) {
      transform: translateX(500px);
      pointer-events: none;
      position: fixed;
      transition: transform .2s ease-out;
      display: flex;
      flex-direction: column;
      padding-top: 150px;
      padding-left: 30px !important;
      padding-right: 30px;
      top: 0;
      bottom: 0;
      right: 0;
      width: 500px;
      max-width: 100vw;
      background-color: #FFF;
      z-index: 100;
      &__toggle {
        display: none;
      }
      &--open {
        transform: translateX(0);
        pointer-events: all;

        .navbar-links__toggle {
          display: block;
          position: fixed;
          top: 30px;
          right: 10px;
          background: none;
          border: none;
        }

        .navbar-links__item {
          text-align: left;
          margin: 20px 0;
          width: 100%;

          .btn {
            width: 100%;
          }
        }
      }
    }
  }

  &__toggle {
    background: none;
    border: none;

    div {
      background-color: $black;
      height: 3px;
      border-radius: 2px;
      margin: 4px;
      &:nth-child(2) {
        width: 20px;
      }

      &:nth-child(3) {
        width: 15px;
      }

      &:last-child {
        width: 9px;
      }
    }
  }
  &-scroll {
    box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
    background-color: $grey-2 !important;
    // background-color: transparent !important;
  }
}
</style>
