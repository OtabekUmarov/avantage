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
          >{{ brand }}</router-link
        >
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
                  >{{ lang }}</option
                >
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
              <img
                src="@/assets/logo.png"
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
