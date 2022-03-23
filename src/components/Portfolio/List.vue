<template>
  <div class="list" data-aos="fade-down" data-aos-easing="ease-in-out-back" :duration="900">
    <div class="container">
      <template v-if="isLoading">
        <div>
          <h1 class="text-center my-5">
            <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
          </h1>
        </div>
      </template>
      <div class="row row-cols-1 row-cols-lg-4 row-cols-md-2">
        <template v-if="portfolio">
          <div class="col mb-4" v-for="item in portfolio" :key="item.id">
            <div class="card" @click="$emit('setView',['Single',item.id])">
              <img v-lazy="item.image" :alt="item.alt" class="card-img-top" />
              <div class="card-body">
                <h6>{{ item.title }}</h6>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pid"],
  data() {
    return {
      portfolio: null,
      isLoading: true
    };
  },
  async created() {
    this.isLoading = true;
    const res = await this.$axi.get("portfolio",{
        headers:{
          "content-language": this.$i18n.locale
        }
      });
    this.portfolio = res.data;
    this.isLoading = false;
  }
};
</script>

<style lang="scss" scoped>
.list {
  .card {
    border-radius: 1.2rem;
    .card-img-top {
      height: 200px;
      object-fit: cover;
      object-position: center;
      border-top-right-radius: 1.2rem;
      border-top-left-radius: 1.2rem;
    }
    h6 {
      font-size: 0.875rem;
    }
  }
}
</style>