<template>
  <div class="section" id="stand">
    <div class="container">
      <div class="section__body">
        <div class="row">
          <div
            class="col-lg-6"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div class="text">
              <h3 class="section__title">{{title}}</h3>
              <p>{{ $t('section.stand.p-1') }}</p>
              <p>{{ $t('section.stand.p-2') }}</p>
              <p>{{ $t('section.stand.p-3') }}</p>
            </div>
            <transition name="request">
              <div class="section__form w-100 mt-3" v-if="isRequest">
                <form @submit="sendForm" id="standForm">
                  <div class="form-group">
                    <label for="standName">{{ $t('label.name') }}</label>
                    <input
                      type="text"
                      class="form-control"
                      id="standName"
                      v-model="commonForm.name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="standTel">{{ $t('label.phone') }}</label>
                    <masked-input
                      v-model="commonForm.phone"
                      mask="\+\998 (91) 111-11-11"
                      type="tel"
                      class="form-control"
                      id="standTel"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="standMessage">{{ $t('label.msg') }}</label>
                    <textarea
                      class="form-control"
                      id="standMessage"
                      style="min-height:5rem;"
                      v-model="form.stand.message"
                    ></textarea>
                  </div>
                </form>
              </div>
            </transition>
            <div class="action mt-3 mb-3">
              <template v-if="isRequest">
                <button class="btn btn-action mr-2" form="standForm">{{ $t('btn.send') }}</button>
                <a
                  href="#"
                  class="btn btn-alternative"
                  @click="toggleForm($event)"
                >{{ $t('btn.cancel') }}</a>
              </template>
              <template v-else>
                <a
                  href="#"
                  class="btn btn-action btn-block"
                  @click="toggleForm($event)"
                >{{ $t('btn.write') }}</a>
              </template>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="media d-flex flex-column">
              <swiper
                class="swiper"
                style="height:350px; width:100%;"
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

              <div
                  style="width: 100%"
                data-aos="zoom-in-up"
                data-aos-delay="150"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
              >
                <iframe data-v-1ffd7d4c="" width="100%" height="315" src="https://www.youtube.com/embed/1NuoKO-IO9A" title="Застройка стенда" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaskedInput from "vue-masked-input";
import { mapGetters } from "vuex";
export default {
  props: ["title", "content"],
  components: {
    MaskedInput
  },
  computed: {
    ...mapGetters({
      commonForm: "getForm"
    })
  },
  data() {
    return {
      form: {
        stand: {
          message: ""
        }
      },
      isRequest: false,
      btnMsg: "Заполнить форму",
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
  methods: {
    getCart() {
      const cartString = window.localStorage.getItem("cart");
      if (cartString) {
        let cart = JSON.parse(window.localStorage.getItem("cart"));
        if (cart.length) {
          return cart;
        }
      }
    },
    toggleForm(event) {
      if (event) event.preventDefault();
      this.isRequest = !this.isRequest;
      this.btnMsg = this.isRequest ? "Отменить" : "Заполнить форму";
    },
    sendForm(e) {
      e.preventDefault();
      if (this.getCart()) {
        $("#checkoutModal").modal("show");
        this.$toast.info("Сначало заверишите покупку");
      } else {
        const preparedData = { ...this.commonForm, ...this.form };

        const res = this.$axi.post("form/", preparedData);
        this.$toast.success("Ваша заявка отправлена");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
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
#stand {
  background: $gray-100;
  .text,
  .section__form {
    background: white;
    padding: 15px 25px;
    border-radius: 0.8rem;
    box-shadow: 0 1.5rem 4rem rgba(22, 28, 45, 0.05);
  }
  .request-enter-active {
    transition: all 0.3s ease-in;
  }
  // .request-leave-active {
  //   transition: all 0.3s ease-out;
  // }
  .request-enter,
  .request-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
}
</style>