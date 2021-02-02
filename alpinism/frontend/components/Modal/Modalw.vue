<template>
  <div class="page">
    <section class="newsletter-section newsletter-three bg-primary">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="newsletter-content ptb-100">
              <h2 id="modal-title">Готовы с вами сотрудничать!</h2>
              <button class="primary-btn" @click="showModal">
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <modal ref="modal"></modal>
  </div>
</template>
<script>
import Modal from '~/components/Modal/Modal.vue'
export default {
  name: 'ModalWindows',
  components: {
    Modal,
  },
  methods: {
    showModal() {
      this.$refs.modal.show = true
    },
  },
}
</script>
<style>
.newsletter-content {
  text-align: center;
  width: 100%;
}
</style>
