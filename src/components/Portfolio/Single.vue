<template>
  <div class="single" data-aos="fade-up" data-aos-easing="ease-in-out-back" :duration="900">
    <div class="container">
      <template v-if="isLoading">
        <div>
          <h1 class="text-center my-5">
            <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
          </h1>
        </div>
      </template>
      <div class="row">
        <template v-if="portfolio">
          <div class="col-lg-6">
            <h3>{{ portfolio.title }}</h3>
            <p>{{ portfolio.text }}</p>
          </div>
          <div class="col-lg-6">
            <swiper class="swiper" style="height:400px; width:100%;" :options="swiperOption">
              <swiper-slide v-for="item in portfolio.carousel" :key="item.image">
                <img v-lazy="item.image" :alt="item.alt" />
              </swiper-slide>
            </swiper>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  props: ["pid"],
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      isLoading: true,
      swiperOption: {
        speed: 900,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true
        },
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 30
      },
      portfolio: null
    };
  },
  async created() {
    this.isLoading = true;
    const res = await this.$axi.get("portfolio/" + this.pid, {
      headers: {
        "content-language": this.$i18n.locale
      }
    });
    this.portfolio = res.data;
    this.isLoading = false;
  }
};
</script>

<style lang="scss" scoped>
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
.single {
  .carousel-item {
    img {
      max-height: 350px;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>