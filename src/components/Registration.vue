<template>
  <div class="section" id="registration">
    <div class="container">
      <div class="section__body">
        <div class="row">
          <div class="col-lg-7">
            <div
              class="text mb-5"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <h3 class="section__title">{{title}}</h3>
              <p>{{ $t('section.registration.p-1') }}</p>
              <p>{{ $t('section.registration.p-2') }}</p>
            </div>
            <div class="media d-flex flex-column">
              <swiper
                class="swiper mt-2"
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
            </div>
          </div>
          <div class="col-lg-5">
            <div class="content d-flex flex-column h-100 align-items-start mb-5 mb-lg-0">
              <div class="section__form w-100">
                <form @submit="sendForm" id="regForm">
                  <div class="form-group">
                    <label for="registrationEvent">{{ $t('label.event') }}</label>
                    <div class="row">
                      <div class="col-7">
                        <select
                          class="form-control"
                          id="registrationEvent"
                          v-model="form.registration.event"
                          v-if="!isNewEvent"
                          required
                        >
                          <option v-for="item in content.events" :key="item.id">{{ item.title }}</option>
                        </select>
                        <input
                          type="text"
                          class="form-control"
                          id="r-newEvent"
                          v-if="isNewEvent"
                          v-model="form.registration.event"
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
                    <label>{{ $t('label.opt') }}</label>
                    <div
                      class="custom-control custom-checkbox"
                      v-for="item in content.other"
                      :key="item.id"
                    >
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        :id="'e'+item.id"
                        :value="item.title"
                        v-model="form.registration.extraOptions"
                      />
                      <label class="custom-control-label" :for="'e'+item.id">{{ item.title }}</label>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="registrationGuests">{{ $t('label.guest') }}</label>
                    <div class="row">
                      <div class="col-7">
                        <input
                          type="range"
                          class="form-control-range"
                          id="registrationGuests"
                          min="20"
                          max="500"
                          value="20"
                          step="10"
                          v-model="form.registration.guestNumber"
                          v-if="!isNewGuest"
                        />
                        <output
                          v-if="!isNewGuest"
                          for="serviceGuests"
                          name="level"
                        >{{form.registration.guestNumber}}</output>
                        <input
                          type="number"
                          class="form-control"
                          id="r-newGuest"
                          v-if="isNewGuest"
                          v-model="form.registration.guestNumber"
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
                    <label for="registrationName">{{ $t('label.name') }}</label>
                    <input
                      type="text"
                      class="form-control"
                      id="registrationName"
                      v-model="commonForm.name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="registrationTel">{{ $t('label.phone') }}</label>
                    <masked-input
                      v-model="commonForm.phone"
                      mask="\+\998 (91) 111-11-11"
                      required
                      type="tel"
                      
                      class="form-control"
                      id="registrationTel"
                    />
                  </div>
                  <div class="form-group">
                    <label for="registrationMessage">{{ $t('label.msg') }}</label>
                    <textarea
                      class="form-control"
                      id="registrationMessage"
                      style="min-height:5rem;"
                      v-model="form.registration.message"
                    ></textarea>
                  </div>
                </form>
              </div>

              <button class="btn btn-action btn-block" form="regForm">{{ $t('btn.send') }}</button>
            </div>
          </div>
        </div>
        <div class="stats mt-5 text-center" v-view="viewHandler">
          <div class="row">
            <div
              class="col-lg-4 col-md-4 mt-3 mb-3"
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
                <div class="stats__text">{{ $t('section.registration.card.1') }}</div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-4 mt-3 mb-3"
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
                  />+
                </h3>
                <div class="stats__text">{{ $t('section.registration.card.2') }}</div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-4 mt-3 mb-3"
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
                <div class="stats__text">{{ $t('section.registration.card.3') }}</div>
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
import AnimatedNumber from "animated-number-vue";
import { mapGetters } from "vuex";
export default {
  props: ["title", "content"],
  components: {
    MaskedInput,
    AnimatedNumber
  },
  data() {
    return {
      form: {
        registration: {
          event: "",
          extraOptions: [],
          guestNumber: 20,
          message: ""
        }
      },
      isNewEvent: false,
      isNewGuest: false,
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
  computed: {
    ...mapGetters({
      commonForm: "getForm"
    })
  },
  methods: {
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
    newEvent() {
      this.isNewEvent = true;
    },
    closeNewEvent() {
      (this.form.registration.event = ""), (this.isNewEvent = false);
    },
    newGuest() {
      this.isNewGuest = true;
    },
    closeNewGuest() {
      (this.form.registration.guestNumber = 20), (this.isNewGuest = false);
    },
    viewHandler(e) {
      if (e.type == "enter") {
        this.stats.first = 2;
        this.stats.second = 30;
        this.stats.third = 80000;
      }
      if (e.type == "exit") {
        this.stats.first = 0;
        this.stats.second = 0;
        this.stats.third = 0;
      }
    },
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
    }
  }
};
</script>
<style lang="scss" scoped>
.photos {
  width: 100%;
}
.swiper {
  // margin: 45px 0px;
  margin-bottom: 25px;
  .swiper-slide {
    // padding: 45px 0px;
    img {
      height: inherit;
      border-radius: 0.7rem;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
.custom-control-input:checked ~ .custom-control-indicator {
  color: white;
  background-color: red;
}
.stats {
  &__data {
    box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.06);
  }
}
</style>