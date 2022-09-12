<script>
export default {
}
</script>

<template>
  <footer id="footer" class="container-gravy mt-5">
    <div class="footer relative bg-$black rounded-lg px-10 py-7 md:px-20 md:py-14">
      <div class="w-full flex justify-between items-end">
        <img src="@/assets/images/sp.png" alt="footer logo" class="w-20 sm:w-auto">
        <div class="buttons flex flex-col sm:flex-row items-center">
          <p class="sf footer__subtitle text-white mb-4 sm:mb-0 sm:mr-7 text-xl md:text-3xl">
            Ready for takeoff ?
          </p>
          <div class="flex items-center space-x-4">
            <a href="https://play.google.com/store/apps/details?id=com.splishpay" class="bg-$primary h-16 w-16 flex items-center justify-center rounded"><img src="@/assets/icons/play-store.svg" alt="play store icon"></a>
            <a href="https://apps.apple.com/ng/app/splishpay/id1588951032" class="bg-$primary h-16 w-16 flex items-center justify-center rounded"><img src="@/assets/icons/apple.svg" alt="apple icon"></a>
          </div>
        </div>
      </div>
      <div class="line w-full h-px bg-$black-2 my-10" />
      <div class="w-full flex flex-col sm:flex-row justify-between md:items-center">
        <ul
          class="navbar-links flex flex-col md:flex-row md:text-center text-white"
        >
          <li class="navbar-links__item md:mr-5">
            <NuxtLink to="/#hero">
              Card Reader
            </NuxtLink>
          </li>
          <li class="navbar-links__item md:mx-5 mt-3 md:mt-0">
            <NuxtLink to="/#partners">
              Merchants
            </NuxtLink>
          </li>
          <li class="navbar-links__item md:mx-5 mt-3 md:mt-0">
            <NuxtLink to="/about">
              About
            </NuxtLink>
          </li>
          <li class="navbar-links__item md:mx-5 mt-3 md:mt-0">
            <NuxtLink to="/#cta">
              Contact
            </NuxtLink>
          </li>
        </ul>
        <div class="socials flex mt-3 sm:mt-0">
          <a href="https://www.instagram.com/splishpay/" target="_blank" class="item w-10 h-10 rounded-sm bg-white flex items-center justify-center">
            <img src="@/assets/icons/Instagram.svg" alt="Instagram Icon" class="">
          </a>
          <a href="https://twitter.com/splishpay/" target="_blank" class="item w-10 h-10 rounded-sm bg-white flex items-center justify-center ml-2">
            <img src="@/assets/icons/Twitter.svg" alt="Twitter Icon" class="">
          </a>
          <a href="https://www.facebook.com/splishpay/" target="_blank" class="item w-10 h-10 rounded-sm bg-white flex items-center justify-center ml-2">
            <img src="@/assets/icons/Facebook.svg" alt="Facebook Icon" class="">
          </a>
          <a href="https://www.linkedin.com/company/splishpay/" target="_blank" class="item w-10 h-10 rounded-sm bg-white flex items-center justify-center ml-2">
            <img src="@/assets/icons/LinkedIn.svg" alt="LinkedIn Icon" class="">
          </a>
        </div>
      </div>
      <div class="line w-full h-px bg-$black-2 my-10" />
      <p class="text-xs copy">
        SplishPay © 2022 All Rights Reserved | Privacy Policy
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-left: -10px;
  margin-right: -10px;
  img {
  }
  .copy {
    color: rgba(#FFF, 0.56);
  }
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
