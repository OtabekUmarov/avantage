<template>
  <div class="section" id="about">
    <div class="container">
      <div class="section__body">
        <div class="row mb-3">
          <div
            class="col-lg-5 align-self-center"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-back"
            data-aos-once="false"
          >
            <h3>{{title}}</h3>
            <p>{{ $t('section.about.p-1') }}</p>
          </div>
          <div
            class="col-lg-7 align-self-center"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out-back"
            data-aos-once="false"
          >
            <img
              v-lazy="content.image_1.image"
              :alt="content.image_1.alt"
              class="img-fluid rounded img-cover-center"
              style="height:350px"
            />
          </div>
        </div>
        <div
          class="row mb-3"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div class="col-lg-6 align-self-center">
            <swiper
              class="swiper"
              style="height:300px; width:100%;"
              :options="swiperOption"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <swiper-slide v-for="item in content.carousel" :key="item.image">
                <img v-lazy="item.image" :alt="item.alt" />
              </swiper-slide>
            </swiper>
          </div>
          <div class="col-lg-6 align-self-center my-2">
            <p>{{ $t('section.about.p-2') }}</p>
          </div>
        </div>
        <div
          class="row mb-3"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div class="col-lg-5 align-self-center my-2">
            <p>{{ $t('section.about.p-3') }}</p>
            <p>{{ $t('section.about.p-4') }}</p>
            <p>{{ $t('section.about.p-5') }}</p>

            <button
              class="btn btn-action btn-block"
              data-toggle="modal"
              data-target="#portfolioModal"
              @click="currentView = 'List'"
            >{{ $t('btn.portfolio') }}</button>
          </div>
          <div class="col-lg-7 align-self-center my-2">
            <iframe data-v-3be9a214="" width="560" height="315" src="https://www.youtube.com/embed/o96vSmlobRA" title="О нас" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
          </div>
        </div>
      </div>
      <div class="stats mt-5 text-center" v-view="viewHandler">
        <div class="row">
          <div
            class="col-lg-3 align-self-center col-md-6 mt-3 mb-3"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div class="stats__data p-3">
              <h3 class="stats__number m-0">
                <animated-number
                  :value="stats.first"
                  :formatValue="formatToPrice"
                  :duration="1000"
                />
              </h3>
              <div class="stats__text">{{$t('section.about.card.1')}}</div>
            </div>
          </div>
          <div
            class="col-lg-3 align-self-center col-md-6 mt-3 mb-3"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div class="stats__data p-3">
              <h3 class="stats__number m-0">
                <animated-number
                  :value="stats.second"
                  :formatValue="formatToPrice"
                  :duration="1000"
                />
              </h3>
              <div class="stats__text">{{$t('section.about.card.2')}}</div>
            </div>
          </div>
          <div
            class="col-lg-3 align-self-center col-md-6 mt-3 mb-3"
            data-aos="zoom-in"
            data-aos-delay="150"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div class="stats__data p-3">
              <h3 class="stats__number m-0">
                <animated-number
                  :value="stats.third"
                  :formatValue="formatToPrice"
                  :duration="1000"
                />+
              </h3>
              <div class="stats__text">{{$t('section.about.card.3')}}</div>
            </div>
          </div>
          <div
            class="col-lg-3 align-self-center col-md-6 mt-3 mb-3"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div class="stats__data p-3">
              <h3 class="stats__number m-0">
                <animated-number
                  :value="stats.fourth"
                  :formatValue="formatToPrice"
                  :duration="1000"
                />%
              </h3>
              <div class="stats__text">{{$t('section.about.card.4')}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Modal -->
    <div class="m-warpper">
      <div
        class="modal fade"
        id="portfolioModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="checkoutModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header" style="border:none">
              <button
                class="btn btn-link text-dark back"
                v-show="currentView=='Single'"
                @click="setView(['List',1])"
              >
                <i class="fa fa-arrow-left"></i>
              </button>
              <h5 class="modal-title" v-show="currentView=='List'">{{ $t('title.portfolio') }}</h5>
              <button
                type="button"
                class="close ml-auto my-auto"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <component :is="currentView" @setView="setView($event)" :pid="currentId"></component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/components/Portfolio/List";
import Single from "@/components/Portfolio/Single";
import AnimatedNumber from "animated-number-vue";
export default {
  props: ["title", "content"],
  data() {
    return {
      currentView: "list",
      currentId: null,
      stats: {
        first: 0,
        second: 0,
        third: 0,
        fourth: 0
      },
      swiperOption: {
        speed: 900,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true
        },
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 30
      }
    };
  },
  components: {
    List,
    Single,
    AnimatedNumber
  },
  methods: {
    viewHandler(e) {
      if (e.type == "enter") {
        this.stats.first = 11;
        this.stats.second = 7;
        this.stats.third = 200;
        this.stats.fourth = 0;
      }
      if (e.type == "exit") {
        this.stats.first = 0;
        this.stats.second = 0;
        this.stats.third = 0;
        this.stats.fourth = 0;
      }
    },
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
    },
    setView(view) {
      this.currentView = view[0];
      this.currentId = view[1];
    },
    toast() {
      const opt = {
        message: "Your action was done.",
        type: "default",
        duration: 1500
      };
      let instance = this.$toast.open(opt);
    }
  }
};
</script>

<style lang="scss" scoped>
$fs_section: 1rem;

#about {
  .swiper-pagination {
    color: black;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
  .swiper {
    margin-bottom: 25px;
    .swiper-slide {
      img {
        height: inherit;
        border-radius: 0.7rem;
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
  .stats {
    &__data {
      box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.06);
    }
  }

  .content {
    .text {
      font-weight: 200;
    }
    .btn {
      font-size: $fs_section;
    }
  }
  .video video {
    width: 100%;
    height: auto;
  }
  .photos {
    margin-bottom: 20px;
    img {
      height: 300px;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
  .card {
    .card-img-top {
      height: 200px;
      object-position: center;
      object-fit: cover;
    }
    h6 {
      font-size: 1em;
    }
  }
  .modal-header {
    .modal-title {
      margin-left: 15px;
    }
    .close,
    .back {
      padding: 5px 10px;
      margin: 0;
      margin-top: auto;
      margin-bottom: auto;
    }
  }
}
</style>