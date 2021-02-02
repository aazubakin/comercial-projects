<template>
  <div>
    <footer class="footer-area pt-100 pb-70 bg-primary">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-5 col-sm-6 col-12">
            <div class="footer-widget">
              <div class="navbar-brand" style="margin-bottom: 40px">
                <a href="index.html">
                  <img src="~assets/img/logo-dark.png" alt="Logo" />
                </a>
              </div>
              <div class="social-link">
                <a :href="configData.config.b_social_vk" target="_blank">
                  <i class="fab fa-vk"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-5 col-sm-6 col-12">
            <div class="footer-widget">
              <h5>Ссылки</h5>
              <ul class="footer-links">
                <li v-for="item in configData.menu" :key="item.id">
                  <i class="flaticon-play-button"></i>
                  <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-5 col-sm-6 col-12" />
          <div class="col-lg-3 col-md-5 col-sm-6 col-12">
            <div class="footer-widget">
              <h5>Контакты</h5>
              <ul class="contact-info">
                <li class="content">
                  <span class="tag">A</span>
                  <span>
                    {{ configData.config.b_contact_address_ekb }} <br />
                    {{ configData.config.b_contact_address_tum }}
                  </span>
                </li>
                <li class="content" style="align-items: baseline">
                  <span class="tag">P</span>
                  <span>
                    <a href="`tel:${configData.config.b_contact_email}`">
                      {{ configData.config.b_contact_phone }}
                    </a>
                  </span>
                </li>
                <li class="content" style="align-items: baseline">
                  <span class="tag">E</span>
                  <span>
                    <a :href="`mailTo:${configData.config.b_contact_email}`">
                      {{ configData.config.b_contact_email }}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- start copy right area -->
    <div class="copy-right-area">
      <div class="container">
        <div class="copy-right-content"></div>
      </div>
    </div>
    <!-- end copy right area-->
  </div>
</template>
<script>
export default {
  props: {
    configData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      pages: [
        { id: 1, title: 'О нас', link: '#' },
        { id: 2, title: 'Наши услуги', link: '#' },
        { id: 3, title: 'Прайс', link: '#' },
        { id: 4, title: 'Контакты', link: '#' },
      ],
    }
  },
}
</script>
