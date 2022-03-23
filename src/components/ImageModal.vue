<template>
  <div class="modal-wrapper">
    <!-- Modal -->
    <div class="modal fade" id="modalImage" tabindex="-1" role="dialog" aria-hidden="true">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="modal-dialog">
        <div class="modal-content">
          <img v-lazy="imgSrc" class="img-fluid" alt="..." />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgSrc"]
};
</script>

<style lang="scss" scoped>
#modalImage {
  .close {
    color: white;
    padding: 20px;
  }
}
</style>