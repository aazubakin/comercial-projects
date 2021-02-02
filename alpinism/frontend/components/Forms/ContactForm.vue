<template>
  <div class="contact-form">
    <div class="content">
      <h3>{{ title }}</h3>
      <div v-html="description" />
    </div>
    <form id="contactForm">
      <div class="row row-user">
        <div class="col-lg-12">
          <div class="form-group">
            <input
              id="name"
              v-model="formData.name"
              type="text"
              name="name"
              class="form-control"
              required=""
              data-error="Пожалуйста введите ваше имя."
              placeholder="Ваше имя"
            />
            <div
              v-if="!!errors.name && errors.name.length > 0"
              class="help-block with-errors"
            >
              {{ errors.name.join(', ') }}
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="form-group">
            <input
              id="emai@closl"
              v-model="formData.email"
              type="email"
              name="email"
              class="form-control"
              data-error="Введите верный электронный адресс"
              placeholder="Email"
            />
            <div
              v-if="!!errors.email && errors.email.length > 0"
              class="help-block with-errors"
            >
              {{ errors.email.join(', ') }}
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="form-group">
            <input
              id="mobile"
              v-model="formData.mobile"
              type="tel"
              name="mobile"
              class="form-control"
              data-error="Введите верный номер телефона"
              placeholder="Номер телефона"
            />
            <div
              v-if="!!errors.mobile && errors.mobile.length > 0"
              class="help-block with-errors"
            >
              {{ errors.mobile.join(', ') }}
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="form-group">
            <textarea
              v-model="formData.message"
              form="requestOrderForm"
              name="message"
              maxlength="400"
              class="form-control"
              data-error="Пожалуйтса введите сообщение"
              rows="5"
              cols="45"
              placeholder="Ваше сообщение"
            />
            <div
              v-if="!!errors.message && errors.message.length > 0"
              class="help-block with-errors"
            >
              {{ errors.message.join(', ') }}
            </div>
          </div>
        </div>
        <div
          v-if="!!errors.non_field_errors && errors.non_field_errors.length > 0"
          class="col-lg-12"
        >
          <div class="form-group">
            <div class="help-block with-errors">
              {{ errors.non_field_errors.join(', ') }}
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-user">
          <button type="submit" class="primary-btn" @click="handleSubmit">
            Отправить
          </button>
          <div id="msgSubmit" class="h5 text-center hidden"></div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { API } from '@/utils/api'
import { toFormData } from '@/utils/form'

const initErrors = {
  name: '',
  mobile: '',
  email: '',
  message: '',
  attachment: '',
  non_field_errors: '',
}
export default {
  name: 'ContactForm',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        email: '',
        message: '',
      },
      errors: initErrors,
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      const vm = this
      vm.errors = initErrors
      const formData = toFormData(vm.formData)
      this.$axios
        .post(API.requestOrder(), formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          vm.clearForm()
          vm.$emit('handleResult', 'success')
        })
        .catch(({ response }) => {
          const { data } = response
          vm.errors = data
          vm.$emit('handleResult', 'error')
        })
    },
    closeModal() {
      this.$emit('closeForm')
    },
    clearForm() {
      this.formData = {
        name: '',
        mobile: '',
        email: '',
        message: '',
      }
    },
  },
}
</script>
