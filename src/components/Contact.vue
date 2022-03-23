<template>
  <div class="section" id="contact">
    <div class="container">
      <h3 class="section__title">{{title}}</h3>
      <div class="section__body">
        <div class="row">
          <div class="col-lg-8">
            <div class="row no-gutters h-100">
              <div
                class="col-lg-4 pr-lg-2 pb-3 pb-lg-0 m-auto"
                data-aos="fade-right"
                data-delay="50"
                data-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
              >
                <img
                  src="@/assets/images/profile_foto.jpg"
                  class="img-responsive rounded img-cover-center h-100"
                  alt="..."
                />
              </div>
              <div class="col-lg-8 m-auto">
                <div
                  class="card"
                  data-aos="fade-right"
                  data-delay="100"
                  data-duration="500"
                  data-aos-easing="ease-in-out"
                  data-aos-once="false"
                >
                  <div class="row no-gutters">
                    <div class="col">
                      <div class="card-body d-flex flex-column justify-content-between h-100">
                        <div class="card-top">
                          <h5 class="card-title">{{ $t('section.contact.name') }}</h5>
                          <div class="cart-text">
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item">{{ $t('section.contact.position') }}</li>
                              <!-- <li
                                class="list-group-item"
                              >{{ $t('section.contact.mobile') }}: +998951440444</li>-->
                              <li class="list-group-item">
                                <img src="" style="width:20px; height:25px;" /> +998951440444
                              </li>
                              <li class="list-group-item">
                                <img
                                  src="@/assets/icons/ps.svg"
                                  style="width:20px; margin-left:3px; margin-right:-2px"
                                /> +998909870101
                              </li>
                              <li class="list-group-item">
                                <img
                                  src="@/assets/icons/email.svg"
                                  style="width:20px; height:25px; margin-right: 2px;margin-left: 1px;"
                                /> info@avantage.events
                              </li>
                              <li class="list-group-item">
                                <div class="row">
                                  <div class="col-4 text-center">
                                    <a href="#" class="social-link">
                                      <svg
                                        id="Capa_1"
                                        enable-background="new 0 0 512 512"
                                        height="25"
                                        viewBox="0 0 512 512"
                                        width="25"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="m512 256c0-141.4-114.6-256-256-256s-256 114.6-256 256 114.6 256 256 256c1.5 0 3 0 4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5c107-30.7 185.3-129.2 185.3-246.1z"
                                        />
                                      </svg>
                                    </a>
                                  </div>
                                  <div class="col-4 text-center">
                                    <a href="#" class="social-link">
                                      <svg
                                        height="25"
                                        viewBox="0 0 512 512"
                                        width="25"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="m305 256c0 27.0625-21.9375 49-49 49s-49-21.9375-49-49 21.9375-49 49-49 49 21.9375 49 49zm0 0"
                                        />
                                        <path
                                          d="m370.59375 169.304688c-2.355469-6.382813-6.113281-12.160157-10.996094-16.902344-4.742187-4.882813-10.515625-8.640625-16.902344-10.996094-5.179687-2.011719-12.960937-4.40625-27.292968-5.058594-15.503906-.707031-20.152344-.859375-59.402344-.859375-39.253906 0-43.902344.148438-59.402344.855469-14.332031.65625-22.117187 3.050781-27.292968 5.0625-6.386719 2.355469-12.164063 6.113281-16.902344 10.996094-4.882813 4.742187-8.640625 10.515625-11 16.902344-2.011719 5.179687-4.40625 12.964843-5.058594 27.296874-.707031 15.5-.859375 20.148438-.859375 59.402344 0 39.25.152344 43.898438.859375 59.402344.652344 14.332031 3.046875 22.113281 5.058594 27.292969 2.359375 6.386719 6.113281 12.160156 10.996094 16.902343 4.742187 4.882813 10.515624 8.640626 16.902343 10.996094 5.179688 2.015625 12.964844 4.410156 27.296875 5.0625 15.5.707032 20.144532.855469 59.398438.855469 39.257812 0 43.90625-.148437 59.402344-.855469 14.332031-.652344 22.117187-3.046875 27.296874-5.0625 12.820313-4.945312 22.953126-15.078125 27.898438-27.898437 2.011719-5.179688 4.40625-12.960938 5.0625-27.292969.707031-15.503906.855469-20.152344.855469-59.402344 0-39.253906-.148438-43.902344-.855469-59.402344-.652344-14.332031-3.046875-22.117187-5.0625-27.296874zm-114.59375 162.179687c-41.691406 0-75.488281-33.792969-75.488281-75.484375s33.796875-75.484375 75.488281-75.484375c41.6875 0 75.484375 33.792969 75.484375 75.484375s-33.796875 75.484375-75.484375 75.484375zm78.46875-136.3125c-9.742188 0-17.640625-7.898437-17.640625-17.640625s7.898437-17.640625 17.640625-17.640625 17.640625 7.898437 17.640625 17.640625c-.003906 9.742188-7.898437 17.640625-17.640625 17.640625zm0 0"
                                        />
                                        <path
                                          d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm146.113281 316.605469c-.710937 15.648437-3.199219 26.332031-6.832031 35.683593-7.636719 19.746094-23.246094 35.355469-42.992188 42.992188-9.347656 3.632812-20.035156 6.117188-35.679687 6.832031-15.675781.714844-20.683594.886719-60.605469.886719-39.925781 0-44.929687-.171875-60.609375-.886719-15.644531-.714843-26.332031-3.199219-35.679687-6.832031-9.8125-3.691406-18.695313-9.476562-26.039063-16.957031-7.476562-7.339844-13.261719-16.226563-16.953125-26.035157-3.632812-9.347656-6.121094-20.035156-6.832031-35.679687-.722656-15.679687-.890625-20.6875-.890625-60.609375s.167969-44.929688.886719-60.605469c.710937-15.648437 3.195312-26.332031 6.828125-35.683593 3.691406-9.808594 9.480468-18.695313 16.960937-26.035157 7.339844-7.480469 16.226563-13.265625 26.035157-16.957031 9.351562-3.632812 20.035156-6.117188 35.683593-6.832031 15.675781-.714844 20.683594-.886719 60.605469-.886719s44.929688.171875 60.605469.890625c15.648437.710937 26.332031 3.195313 35.683593 6.824219 9.808594 3.691406 18.695313 9.480468 26.039063 16.960937 7.476563 7.34375 13.265625 16.226563 16.953125 26.035157 3.636719 9.351562 6.121094 20.035156 6.835938 35.683593.714843 15.675781.882812 20.683594.882812 60.605469s-.167969 44.929688-.886719 60.605469zm0 0"
                                        />
                                      </svg>
                                    </a>
                                  </div>
                                  <div class="col-4 text-center">
                                    <a href="#" class="social-link">
                                      <svg
                                        id="Bold"
                                        enable-background="new 0 0 24 24"
                                        height="25"
                                        viewBox="0 0 24 24"
                                        width="25"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"
                                        />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4"
            data-aos="fade-right"
            data-delay="50"
            data-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div class="section__form">
              <h5 class="form-title mb-2">{{ $t('section.contact.form-title') }}</h5>
              <form @submit="sendForm" id="contactForm">
                <div class="form-group">
                  <label for="contactName">{{ $t('label.name') }}</label>
                  <input
                    type="text"
                    class="form-control"
                    id="contactName"
                    v-model="commonForm.name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="contactTel">{{ $t('label.phone') }}</label>
                  <masked-input
                    v-model="commonForm.phone"
                    mask="\+\998 (91) 111-11-11"
                    type="tel"
                    class="form-control"
                    id="contactTel"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="contactMessage">{{ $t('label.msg') }}</label>
                  <textarea
                    class="form-control"
                    id="contactMessage"
                    style="min-height:5rem;"
                    v-model="form.contact.message"
                  ></textarea>
                </div>
              </form>
            </div>
            <button
              class="btn btn-action btn-block mt-3"
              form="contactForm"
            >{{ $t('btn.send-default') }}</button>
          </div>
        </div>
        <div class="row mt-5">
          <div
            class="col"
            data-aos="fade-right"
            data-delay="100"
            data-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2995.566303906397!2d69.29037028465578!3d41.34004322342673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4ad010dd425%3A0x5a98eb519ac9451!2z0KbQtdC90YLRgCDQvdCw0YPRh9C90L4t0YLQtdGF0L3QuNGH0LXRgdC60LjRhSDQuCDQvNCw0YDQutC10YLQuNC90LPQvtCy0YvRhSDQuNGB0YHQu9C10LTQvtCy0LDQvdC40Lk!5e0!3m2!1sru!2s!4v1594652942537!5m2!1sru!2s"
              class="map"
              frameborder="0"
              style="border:0;"
              allowfullscreen
              aria-hidden="false"
              tabindex="0"
            ></iframe>
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
  props: ["title"],
  components: {
    MaskedInput
  },
  data() {
    return {
      form: {
        contact: {
          message: ""
        }
      }
    };
  },
  computed: {
    ...mapGetters({
      commonForm: "getForm"
    })
  },
  mounted() {
    document.addEventListener("aos:in:customEventName", ({ detail }) => {
      console.log(
        detail,
        "animation to display element with custom event started"
      );
    });
    document.addEventListener("aos:out:customEventName", ({ detail }) => {
      console.log(
        detail,
        "animation to hide element with custom event started"
      );
    });
  },
  methods: {
    sendForm(e) {
      e.preventDefault();
      const preparedData = { ...this.commonForm, ...this.form };
      const res = this.$axi.post("form/", preparedData);
      this.$toast.success("Ваше сообщение отправлено");
    }
  }
};
</script>

<style lang="scss" scoped>
#contact {
  background: $gray-100;
  .card {
    border: none;
    border-radius: 0.8rem;
    box-shadow: 0 1.5rem 4rem rgba(22, 28, 45, 0.05);
  }
  .card-img {
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
  .card-title {
    font-size: 1.6rem;
    text-align: center;
  }
  .form-title {
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
  }
  .map {
    width: 100%;
    min-height: 400px;
    height: 100%;
    border-radius: 0.8rem;
    box-shadow: 0 1.5rem 4rem rgba(22, 28, 45, 0.05);
  }
  .section__form {
    background: white;
    padding: 15px 25px;
    border-radius: 0.8rem;
    box-shadow: 0 1.5rem 4rem rgba(22, 28, 45, 0.05);
  }
  .social-link {
    text-decoration: none;
    padding: 10px;
    border-radius: 0.4rem;
    font-size: 1.2rem;
  }
  svg {
    width: 25px;
    height: 25px;
    transition: 0.2s fill ease-in;
  }
  svg:hover {
    fill: var(--red);
  }
}
</style>