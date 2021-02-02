<template>
  <!-- start top header area -->
  <div class="top-header-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-3 col-md-12">
          <div class="social-link">
            <a :href="globalConfig.config.b_social_vk" target="_blank">
              <i class="fab fa-vk"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-9 col-md-12 p-0">
          <div class="row align-items-center">
            <div class="col-lg-4 col-sm-4 p-0">
              <div class="contact-info">
                <div class="contact-info-content">
                  <p>Телефон</p>
                  <a href="`tel:${globalConfig.config.b_contact_email}`">
                    {{ globalConfig.config.b_contact_phone }}
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-4 p-0">
              <div class="contact-info">
                <div class="contact-info-content">
                  <p>Почта</p>
                  <a href="`mailTo:${globalConfig.config.b_contact_email}`">
                    {{ globalConfig.config.b_contact_email }}
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-4 p-0">
              <div class="contact-info">
                <div class="contact-info-content">
                  <p>Часы работы:</p>
                  <a href="#">
                    {{ globalConfig.config.work_week_days }}
                    {{ globalConfig.config.time_work }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderTop',
  props: {
    globalConfig: {
      type: Object,
      required: true,
    },
  },
}
</script>
