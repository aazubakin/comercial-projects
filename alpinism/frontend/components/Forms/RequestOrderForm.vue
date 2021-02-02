<template>
  <div class="contact-form">
    <h2 class="color-title">Оставить заявку</h2>
    <form id="requestOrderForm">
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
            <label for="fileSpec" class="form-control labelfile"
              >Выберите файл:
              {{ labelFileSpec }}
            </label>
            <input
              id="fileSpec"
              ref="fileSpec"
              type="file"
              name="fileSpec"
              class="form-control inputfile"
              @change="handleFileUpload()"
            />
            <div
              v-if="!!errors.attachment && errors.attachment.length > 0"
              class="help-block with-errors"
            >
              {{ errors.attachment.join(', ') }}
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
import { toFormData } from '@/utils/form'
import { API } from '~/utils/api'

const initErrors = {
  name: '',
  mobile: '',
  email: '',
  message: '',
  attachment: '',
  non_field_errors: '',
}
const initFormData = {
  name: '',
  mobile: '',
  email: '',
  message: '',
}
export default {
  name: 'RequestOrderForm',
  data() {
    return {
      labelFileSpec: '',
      formData: initFormData,
      fileSpec: '',
      errors: initErrors,
    }
  },
  methods: {
    handleFileUpload(event) {
      this.fileSpec = this.$refs.fileSpec.files[0]
      this.labelFileSpec = this.fileSpec.name
    },
    handleSubmit(e) {
      e.preventDefault()
      const vm = this
      vm.errors = initErrors
      const formData = toFormData(vm.formData)
      formData.append('attachment', vm.fileSpec)
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
    clearForm() {
      this.formData = {
        name: '',
        mobile: '',
        email: '',
        message: '',
      }
      this.fileSpec = ''
      this.labelFileSpec = ''
    },
  },
}
</script>
<style>
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
