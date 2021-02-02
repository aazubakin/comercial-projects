<template>
  <div class="contact-area pt-100 pb-70">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="contact-info">
            <div
              v-for="(item, index) in contactItems"
              :key="index"
              class="info-item"
            >
              <i :class="item.iconClass"></i>
              <div class="info-content">
                <p>{{ item.title }}</p>
                <a :href="item.href">
                  {{ item.text }}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <contact-form
            :title="contactData.b_feedback_title"
            :description="contactData.b_feedback_text"
            @handleResult="handleResult"
          />
        </div>
        <ModalSubmit v-if="showSubmit" @closeSubmit="closeSubmit" />
      </div>
      <div class="row">
        <div class="col-12">
          <yandex-map
            style="width: 100%; height: 500px"
            :coords="coords"
            :zoom="12"
            @click="onClick"
          >
            <ymap-marker
              :coords="coords"
              marker-id="123"
              hint-content="Промышленный альпинизм 'СпецАльп'"
            />
          </yandex-map>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ModalSubmit from './Modal/ModalSubmit.vue'
import ContactForm from '~/components/Forms/ContactForm'

export default {
  components: {
    ContactForm,
    ModalSubmit,
  },
  props: {
    contactData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showSubmit: false,
    }
  },
  computed: {
    contactItems() {
      const items = [
        {
          iconClass: 'flaticon-smartphone',
          title: 'Наш телефон',
          href: `tel:${this.contactData.b_contact_phone}`,
          text: this.contactData.b_contact_phone,
        },
        {
          iconClass: 'flaticon-email',
          title: 'Наша почта',
          href: `tel:${this.contactData.b_contact_email}`,
          text: this.contactData.b_contact_email,
        },
        {
          iconClass: 'flaticon-address',
          title: 'Наш адрес',
          href: `#`,
          text: this.contactData.b_contact_address_ekb,
        },
        {
          iconClass: 'flaticon-address',
          title: 'Филиал',
          href: `#`,
          text: this.contactData.b_contact_address_tum,
        },
      ]
      return items
    },
    coords() {
      return this.contactData.b_map.split(',').map((x) => parseFloat(x))
    },
  },
  methods: {
    onClick(e) {
      this.coords = e.get('coords')
    },
    handleResult(typeResult) {
      if (typeResult === 'success') {
        this.show = false
        this.showSubmit = true
      }
    },
    closeSubmit() {
      this.showSubmit = false
    },
  },
}
</script>
