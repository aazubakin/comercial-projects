<template>
  <transition name="modal">
    <div v-if="show" id="modal-shadow" @click.self="closeModal">
      <div id="modal-window">
        <div class="modal-close" @click="closeModal">&#10006;</div>
        <request-order-form @handleResult="handleResult" />
      </div>
    </div>
    <ModalSubmit v-if="showSubmit" @closeSubmit="closeSubmit" />
  </transition>
</template>

<script>
import RequestOrderForm from '~/components/Forms/RequestOrderForm'
export default {
  name: 'Modal',
  components: { RequestOrderForm },
  data() {
    return {
      show: false,
      showSubmit: false,
    }
  },
  methods: {
    handeResult(typeResult) {
      if (typeResult === 'success') {
        this.show = false
        this.showSubmit = true
      }
    },
    closeModal() {
      this.show = false
    },
    closeSubmit() {
      this.showSubmit = false
    },
  },
}
</script>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
#modal-shadow {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);
  z-index: 99;
}

#modal-window {
  background: #fff3cf;
  padding: 35px;
  min-width: 320px;
  max-width: 680px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 98;
}
#modal-window::before {
  position: absolute;
  content: '';
  bottom: 10px;
  right: 10px;
  border-bottom: 70px solid #ffbc13;
  border-left: 70px solid transparent;
  transition: 0.5s;
  z-index: 1;
}
#modal-window::after {
  position: absolute;
  content: '';
  top: 10px;
  left: 10px;
  border-top: 70px solid #ffbc13;
  border-right: 70px solid transparent;
  transition: 0.5s;
  z-index: 1;
}
.modal-close {
  border-radius: 50%;
  color: #fff;
  background: #ffbc13;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 13px;
  right: 13px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.modal-close:hover {
  filter: brightness(70%);
  transition: all 0.5s ease-in-out;
}
.modal-title {
  color: #0971c7;
}

.modal-content {
  margin-bottom: 20px;
}

.modal-footer__button {
  background-color: #0971c7;
  color: #fff;
  border: none;
  text-align: center;
  padding: 8px;
  font-size: 17px;
  font-weight: 500;
  border-radius: 8px;
  min-width: 150px;
}

.color-title {
  color: #ffbc13;
  text-align: center;
  margin-bottom: 20px;
  padding: 0 10px;
}
.form-control {
  padding: 15px 15px;
}

.col-user {
  margin-top: 20px;
}
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.labelfile {
  vertical-align: center;
}
.labelfile:hover {
  cursor: pointer;
  background-color: #ffbc13;

  /* filter: brightness(110%); */
}
.svg-icon {
  display: inline-block;
}
</style>
