<template>
  <!-- start navbar area -->
  <div class="main-navbar-area">
    <div class="constik-responsive-nav">
      <div class="container">
        <div class="constik-responsive-menu mean-container">
          <a
            href="#nav"
            class="meanmenu-reveal"
            style="background: ; color: ; right: 0; left: auto"
            @click="toggleMenu"
            ><span
              ><span><span></span></span></span
          ></a>
          <div class="logo">
            <NuxtLink to="/">
              <img src="~assets/img/logo-dark.png" alt="logo" />
            </NuxtLink>
          </div>
          <nav class="mean-nav">
            <NuxtLink to="/" class="navbar-brand">
              <img src="assets/img/logo-dark.png" alt="Logo" />
            </NuxtLink>
            <ul v-if="isClickedMenu" class="navbar-nav">
              <li
                v-for="item in menu"
                :key="item.id"
                class="nav-item"
                @click="toggleSubMenu(item.id)"
              >
                <a :href="item.link" class="nav-link toggle">{{ item.name }}</a>
                <ul
                  v-if="item.isClicked"
                  class="dropdown-menu"
                  style="display: block"
                >
                  <li
                    v-for="subitem in item.items"
                    :key="subitem.id"
                    class="nav-item"
                  >
                    <a :href="subitem.link" class="nav-link">{{
                      subitem.name
                    }}</a>
                  </li>
                </ul>
                <a class="mean-expand" href="#" style="font-size: 18px">+</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div class="constik-nav">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">
          <div class="collapse navbar-collapse mean-menu">
            <NuxtLink to="/" class="navbar-brand">
              <img src="~assets/img/logo-dark.png" alt="Logo" />
            </NuxtLink>
            <ul class="navbar-nav">
              <li v-for="elem in menu" :key="elem.id" class="nav-item">
                <NuxtLink :to="elem.link" class="nav-link toggle">{{
                  elem.name
                }}</NuxtLink>
                <ul v-if="elem.items.length !== 0" class="dropdown-menu">
                  <li
                    v-for="subitem in elem.items"
                    :key="subitem.id"
                    class="nav-item"
                  >
                    <a :href="subitem.link" class="nav-link">{{
                      subitem.name
                    }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <!-- end navbar area -->
</template>
<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isClickedMenu: false,
    }
  },
  mounted() {
    function sortOrder(arr) {
      arr.sort((a, b) => a.sort_order - b.sort_order)
    }
    sortOrder(this.menu)
    this.menu.forEach((element) => {
      if (element.items !== 0) {
        sortOrder(element.items)
      }
    })
  },
  methods: {
    toggleMenu() {
      this.isClickedMenu = !this.isClickedMenu
    },
    toggleSubMenu(id) {
      const obj = this.menu.find((item) => item.id === id)
      obj.isClicked = !obj.isClicked
    },
  },
}
</script>
<style>
.mean-container {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}
.mean-container .mean-nav ul li a:hover {
  color: #ffbc13;
}
</style>
