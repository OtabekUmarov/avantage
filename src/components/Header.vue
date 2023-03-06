<template>
  <div
    class="header"
    :class="{ 'vh-100': $route.path == '/' }"
    id="home"
    ref="home"
  >
    <nav class="navbar navbar-expand-lg fixed-top" :class="[bgNav]" id="navbar">
      <div
        class="container"
        ref="navContainer"
        :class="{ 'flex-row-reverse': opt.navContainer }"
      >
        <router-link
          to="/"
          class="navbar-brand"
          ref="brand"
          :class="{ 'd-none': opt.brand }"
        >
          <!-- {{ brand }} -->
          <div class="logo-svg">
            <svg
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 859.64 228.9"
            >
              <g id="Layer_1-2" data-name="Layer 1">
                <g>
                  <g>
                    <path
                      class="cls-1"
                      d="m171.68,1.91c0,49.52-40.13,89.65-89.65,89.65-16.29,0-31.55-4.35-44.71-11.94L57.23,0h114.41c.04.65.04,1.26.04,1.91Z"
                    />
                    <path
                      class="cls-1"
                      d="m80.12,162.14c0,36.85-29.91,66.76-66.76,66.76H0l.34-1.3L32.66,98.24c27.47,8.28,47.46,33.76,47.46,63.9Z"
                    />
                    <path
                      class="cls-1"
                      d="m228.9,228.9h-7.63c-46.35,0-83.93-37.58-83.93-83.93,0-34.75,21.14-64.59,51.24-77.33l40.25,160.92.08.34Z"
                    />
                  </g>
                  <g>
                    <g>
                      <path
                        class="cls-1"
                        d="m286.13,208.72v-77.29h58.46v15.13h-41.52v15.68h36.54v15.13h-36.54v16.23h42.07v15.13h-59.01Z"
                      />
                      <path
                        class="cls-1"
                        d="m378.35,209.27l-31.33-77.84h18.82l20.26,54.44,20.26-54.44h18.38l-31.33,77.84h-15.06Z"
                      />
                      <path
                        class="cls-1"
                        d="m430.06,208.72v-77.29h58.46v15.13h-41.52v15.68h36.54v15.13h-36.54v16.23h42.07v15.13h-59.01Z"
                      />
                      <path
                        class="cls-1"
                        d="m497.6,208.72v-77.29h15.72l36.32,47.59v-47.59h16.83v77.29h-14.5l-37.53-49.14v49.14h-16.83Z"
                      />
                      <path
                        class="cls-1"
                        d="m596.47,208.72v-61.62h-23.58v-15.68h64.22v15.68h-23.58v61.62h-17.05Z"
                      />
                      <path
                        class="cls-1"
                        d="m669.43,209.83c-12.69,0-23.65-4.12-32.88-12.37l10.07-12.04c7.6,6.26,15.32,9.39,23.14,9.39,3.47,0,6.2-.66,8.19-1.99,1.99-1.32,2.99-3.16,2.99-5.52,0-2.21-1.03-3.99-3.1-5.36-2.07-1.36-6.24-2.85-12.51-4.47-4.43-1.11-8.01-2.19-10.74-3.26-2.73-1.07-5.33-2.48-7.81-4.25-2.47-1.77-4.28-3.99-5.42-6.68-1.15-2.68-1.72-5.9-1.72-9.66,0-6.99,2.53-12.62,7.58-16.9,5.06-4.27,11.57-6.4,19.54-6.4,11,0,20.6,3.28,28.79,9.83l-8.86,12.81c-7.31-5.08-14.02-7.62-20.15-7.62-3.17,0-5.63.65-7.36,1.93-1.73,1.29-2.6,2.97-2.6,5.03,0,2.5,1.07,4.38,3.21,5.63,2.14,1.25,6.64,2.76,13.51,4.53,8.41,2.21,14.61,5.05,18.6,8.5,3.99,3.46,5.98,8.43,5.98,14.91,0,7.51-2.6,13.38-7.81,17.61-5.2,4.23-12.09,6.35-20.65,6.35Z"
                      />
                    </g>
                    <g>
                      <path
                        class="cls-1"
                        d="m286.13,97.69l33.22-77.85h15.72l33.22,77.85h-17.83l-7.09-17.34h-32.77l-7.08,17.34h-17.38Zm30.56-32.35h20.59l-10.3-25.06-10.29,25.06Z"
                      />
                      <path
                        class="cls-1"
                        d="m387.21,98.24l-31.33-77.84h18.82l20.26,54.44,20.26-54.44h18.38l-31.33,77.84h-15.06Z"
                      />
                      <path
                        class="cls-1"
                        d="m421.2,97.69l33.22-77.85h15.72l33.22,77.85h-17.83l-7.09-17.34h-32.77l-7.08,17.34h-17.38Zm30.56-32.35h20.59l-10.3-25.06-10.29,25.06Z"
                      />
                      <path
                        class="cls-1"
                        d="m508.67,97.69V20.4h15.72l36.32,47.59V20.4h16.83v77.29h-14.5l-37.53-49.14v49.14h-16.83Z"
                      />
                      <path
                        class="cls-1"
                        d="m607.54,97.69v-61.62h-23.58v-15.68h64.22v15.68h-23.58v61.62h-17.05Z"
                      />
                      <path
                        class="cls-1"
                        d="m637.99,97.69l33.22-77.85h15.72l33.22,77.85h-17.83l-7.09-17.34h-32.77l-7.08,17.34h-17.38Zm30.56-32.35h20.59l-10.3-25.06-10.29,25.06Z"
                      />
                      <path
                        class="cls-1"
                        d="m757.78,99.02c-12.03,0-21.83-3.75-29.4-11.26-7.56-7.51-11.35-17.08-11.35-28.71s3.87-20.56,11.62-28.33c7.75-7.76,17.42-11.65,29.01-11.65,6.71,0,12.4.86,17.05,2.59,4.65,1.73,9.12,4.4,13.39,8.01l-10.74,12.92c-3.25-2.72-6.39-4.71-9.41-5.97-3.03-1.25-6.64-1.88-10.85-1.88-6.2,0-11.46,2.37-15.78,7.12-4.32,4.75-6.48,10.48-6.48,17.17,0,7.07,2.2,12.92,6.59,17.56,4.39,4.64,10.02,6.96,16.88,6.96,6.35,0,11.7-1.54,16.06-4.64v-11.04h-17.16v-14.69h33.66v33.57c-9.67,8.17-20.7,12.26-33.1,12.26Z"
                      />
                      <path
                        class="cls-1"
                        d="m800.63,97.69V20.4h58.46v15.13h-41.52v15.68h36.54v15.13h-36.54v16.23h42.07v15.13h-59.01Z"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </router-link>
        <button class="navbar-toggler" @click="toggleNav()">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="mobileNav text-center"
          :class="{ show: isNavShow, 'w-100': opt.nav }"
          ref="nav"
        >
          <ul
            class="navbar-nav ml-auto-lg align-self-stretch"
            :class="{ 'justify-content-center': opt.navChild }"
          >
            <li class="nav-item">
              <router-link to="/about" class="nav-link hover-link">{{
                $t("link.about")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/equipment" class="nav-link hover-link">{{
                $t("link.equipment")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/service" class="nav-link hover-link">{{
                $t("link.catering")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/stand" class="nav-link hover-link">{{
                $t("link.stand")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/registration" class="nav-link hover-link">{{
                $t("link.registration")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link hover-link">{{
                $t("link.contact")
              }}</router-link>
            </li>
            <li class="nav-item">
              <select class="form-control lang-select" v-model="$i18n.locale">
                <option
                  v-for="(lang, i) in langs"
                  :key="`Lang${i}`"
                  :value="lang"
                >
                  {{ lang }}
                </option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div v-if="$route.path == '/'" class="d-flex">
      <div class="overlay"></div>
      <div class="header__overlay"></div>
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src="@/assets/video/video-hero.mp4" type="video/mp4" />
      </video>
      <div class="container h-100">
        <div class="d-flex h-100 text-center align-items-center">
          <div class="w-100 text-dark">
            <div class="container">
              <!-- <img
                src="@/assets/logo.png"
                class="img-fluid rounded mx-auto d-block header__logo"
              /> -->
              <img
                src="@/assets/logo2.png"
                class="img-fluid rounded mx-auto d-block header__logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap";
// import func from 'vue-editor-bridge';

export default {
  name: "Header",
  props: {
    brand: String,
  },
  data() {
    return {
      langs: ["en", "ru"],
      isNavShow: false,
      height: 0,
      bgNav: "bg-transparent navbar-dark",
      opt: {
        brand: true,
        navContainer: true,
        nav: true,
        navChild: true,
      },
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    this.height = document.getElementById("home").clientHeight;
    if (this.$route.path != "/") {
      this.bgNav = "bg-white navbar-light";
      this.opt.brand = false;
      this.opt.navContainer = false;
      this.opt.nav = false;
      this.opt.navChild = false;
    } else {
      this.bgNav = "bg-transparent navbar-dark";
      this.opt.brand = true;
      this.opt.navContainer = true;
      this.opt.nav = true;
      this.opt.navChild = true;
    }
  },
  watch: {
    "$route.path": {
      handler: function(val) {
        this.isNavShow = false
        if (val != "/") {
          this.bgNav = "bg-white navbar-light";
          this.opt.brand = false;
          this.opt.navContainer = false;
          this.opt.nav = false;
          this.opt.navChild = false;
        } else {
          this.bgNav = "bg-transparent navbar-dark";
          this.opt.brand = true;
          this.opt.navContainer = true;
          this.opt.nav = true;
          this.opt.navChild = true;
        }
      },
    },
    "$i18n.locale": {
      handler: function(val) {
        window.localStorage.setItem("lang", JSON.stringify(val));
        // window.location.reload();
      },
    },
  },
  methods: {
    toggleNav() {
      if (window.scrollY == 0 && this.isNavShow == false) {
        this.bgNav = "bg-white navbar-light";
        this.isNavShow = !this.isNavShow;
      } else if (window.scrollY == 0 && this.isNavShow == true) {
        this.isNavShow = !this.isNavShow;
        this.bgNav = "bg-transparent navbar-dark";
      } else {
        this.bgNav = "bg-white navbar-light";
        this.isNavShow = !this.isNavShow;
      }
    },
    showNav() {
      this.isNavShow = true;
    },
    hideNav() {
      this.isNavShow = false;
    },
    updateScroll() {
      this.height = document.getElementById("home").clientHeight;
      if (window.scrollY == 0 && this.isNavShow == true) {
        this.bgNav = "bg-white navbar-light";
      } else {
        // this.bgNav =
        //   window.scrollY > 0
        //     ? "bg-white navbar-light"
        //     : "bg-transparent navbar-dark";
        if (window.scrollY > this.height - 100) {
          this.bgNav = "bg-white navbar-light";
          this.opt.brand = false;
          this.opt.navContainer = false;
          this.opt.nav = false;
          this.opt.navChild = false;
        } else {
          this.bgNav = "bg-transparent navbar-dark";
          this.opt.brand = true;
          this.opt.navContainer = true;
          this.opt.nav = true;
          this.opt.navChild = true;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-light {
  .lang-select {
    height: 100%;
    background: transparent;
    border: none;
    color: #333;
    :active {
      color: #333;
    }
  }
}
.navbar-dark {
  .lang-select {
    height: 100%;
    background: transparent;
    border: none;
    color: #fff;
  }
}
.arrow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #333;
  z-index: 5;
  font-size: 3rem;
  animation: arrow-animate 1.5s infinite ease-in-out;
}

@keyframes arrow-animate {
  0% {
    bottom: 0px;
    opacity: 0;
  }
  50% {
    bottom: 10px;
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.header {
  position: relative;
  width: 100%;
  overflow: hidden;
  &.vh-100 {
    height: 100vh;
    min-height: 500px;
  }
  .navbar-brand {
    font-weight: 700;
    width: 130px;
    svg {
      fill: #B51115;
    }
  }
  .bg-white {
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.117647);
  }
  .navbar {
    transition: 0.2s background-color ease;
    .nav-link {
      padding: 10px 15px;
      &:hover {
        color: var(--red);
      }
    }
    .nav-link.active {
      background: var(--red);
      color: #fff;
      border-radius: 5px;
    }
  }
  @include media-breakpoint-down(md) {
    .mobileNav {
      &::-webkit-scrollbar {
        display: none;
      }
      overflow: -moz-scrollbars-none;
      -ms-overflow-style: none;
      transform: translateX(-100%);
      opacity: 0;
      visibility: hidden;
      position: fixed;
      top: 0;
      left: 0;
      background: white;
      transition: 0.5s all ease;
      width: 100%;
      height: 100%;
      margin-top: 55px;
      overflow-y: auto;
      .navbar-nav {
        padding: 50px 10px;
        align-items: center;
        transition-delay: 0s;
        font-size: 2rem;
        .nav-item {
          margin: 20px 0px;
        }
      }
    }
    .mobileNav.show {
      transform: translateX(0%);
      opacity: 1;
      visibility: visible;
      transition: 0.5s all ease;
    }
  }
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  .container {
    position: relative;
    z-index: 2;
  }
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #aaa;
    opacity: 0.5;
    z-index: 1;
  }

  &__logo {
    width: 300px;
  }
}
.d-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.navbar-nav .router-link-exact-active.router-link-active {
  background: var(--red);
  color: #fff !important;
  border-radius: 5px;
}
// @media (pointer: coarse) and (hover: none) {
//   .header {
//     background: url("https://source.unsplash.com/XT5OInaElMw/1600x900") black
//       no-repeat center center scroll;
//     video {
//       display: none;
//     }
//   }
// }
</style>
