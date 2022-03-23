<template>
  <div class="section" id="service">
    <div class="container">
      <div class="section__body">
        <div class="row d-flex align-items-start">
          <div class="col-lg-7 col-md-12 col-12 mt-3 mt-xl-0 order-1">
            <div
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <p
                class="mb-6"
              >{{ $t('section.catering.p-1') }}</p>
              <p>{{ $t('section.catering.p-2') }}</p>
              <p>{{ $t('section.catering.p-3') }}</p>
            </div>
            <div class="row">
              <div
                class="col-12 mb-2 mb-lg-2"
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
              >
                <swiper
                  class="swiper"
                  style="height:400px; width:100%;"
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
            </div>
          </div>
          <div
            class="col-lg-5 col-md-12 col-12"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <h3 class="section__title">{{title}}</h3>
            <form @submit="sendForm">
              <div class="form-group">
                <label for="serviceEvent">{{ $t('label.event') }}</label>
                <div class="row">
                  <div class="col-7">
                    <select
                      class="form-control"
                      id="serviceEvent"
                      v-model="form.catering.event"
                      v-if="!isNewEvent"
                      required
                    >
                      <option v-for="item in content.events" :key="item.id">{{ item.title }}</option>
                    </select>
                    <input
                      type="text"
                      class="form-control"
                      id="newEvent"
                      v-if="isNewEvent"
                      v-model="form.catering.event"
                      :placeholder="$t('label.enter-event')"
                      required
                    />
                  </div>

                  <div class="col-5 text-center">
                    <button class="btn btn-light" @click="newEvent()" v-if="!isNewEvent">
                      <i class="fa fa-plus"></i>
                    </button>
                    <button class="btn btn-light" @click="closeNewEvent()" v-if="isNewEvent">
                      <i class="fa fa-close"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="serviceGuests">{{ $t('label.guest') }}</label>
                <div class="row">
                  <div class="col-7">
                    <input
                      v-if="!isNewGuest"
                      type="range"
                      class="form-control-range"
                      id="serviceGuests"
                      min="20"
                      max="500"
                      step="10"
                      v-model="form.catering.guestNumber"
                    />
                    <output
                      v-if="!isNewGuest"
                      for="serviceGuests"
                      name="level"
                    >{{form.catering.guestNumber}}</output>
                    <input
                      type="number"
                      class="form-control"
                      id="newGuest"
                      v-if="isNewGuest"
                      v-model="form.catering.guestNumber"
                      :placeholder="$t('label.enter-guest')"
                      required
                    />
                  </div>
                  <div class="col-5 text-center">
                    <button class="btn btn-light" @click="newGuest()" v-if="!isNewGuest">
                      <i class="fa fa-plus"></i>
                    </button>
                    <button class="btn btn-light" @click="closeNewGuest()" v-if="isNewGuest">
                      <i class="fa fa-close"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="serviceName">{{ $t('label.name') }}</label>
                <input
                  type="text"
                  class="form-control"
                  id="serviceName"
                  v-model="commonForm.name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="serviceTel">{{ $t('label.phone') }}</label>
                <masked-input
                  mask="\+\998 (91) 111-11-11"
                  type="tel"
                  v-model="commonForm.phone"
                  class="form-control"
                  id="serviceTel"
                  required
                />
              </div>
              <div class="form-group">
                <label for="serviceAddress">{{ $t('label.address') }}</label>
                <input
                  type="text"
                  class="form-control"
                  id="serviceAddress"
                  v-model="commonForm.address"
                />
              </div>
              <div class="form-group">
                <label for="serviceMessage">{{ $t('label.msg') }}</label>
                <textarea
                  class="form-control"
                  id="serviceMessage"
                  style="min-height:5.5rem;"
                  v-model="form.catering.message"
                ></textarea>
              </div>
              <button class="btn btn-action btn-block">{{ $t('btn.send') }}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TheMask } from "vue-the-mask";
import MaskedInput from "vue-masked-input";
import { mask } from "vue-the-mask";
import { mapGetters } from "vuex";
export default {
  props: ["title", "content"],
  components: { TheMask, MaskedInput },
  directives: { mask },
  data() {
    return {
      form: {
        catering: {
          event: "",
          guestNumber: 20,
          message: ""
        }
      },
      isNewEvent: false,
      isNewGuest: false,
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
  computed: {
    ...mapGetters({
      commonForm: "getForm"
    })
  },
  methods: {
    newEvent() {
      this.isNewEvent = true;
    },
    closeNewEvent() {
      (this.form.catering.event = ""), (this.isNewEvent = false);
    },
    newGuest() {
      this.isNewGuest = true;
    },
    closeNewGuest() {
      (this.form.catering.guestNumber = 20), (this.isNewGuest = false);
    },
    getCart() {
      const cartString = window.localStorage.getItem("cart");
      if (cartString) {
        let cart = JSON.parse(window.localStorage.getItem("cart"));
        if (cart.length) {
          return cart;
        }
      }
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
</style>