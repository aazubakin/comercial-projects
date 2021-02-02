<template>
  <div class="container ptb-100">
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">№ п/п</th>
            <th scope="col">Услуга</th>
            <th scope="col">Цена</th>
            <th scope="col">
              Ед.<br />
              изм.
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in priceArr"
            :key="item[0].service.id"
            :class="getHover(item)"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td
              :colspan="getColspan(item)"
              :class="getHover(item) + getWeightTitle(item)"
            >
              <nuxt-link :to="'/services/' + item[0].service.id">
                {{ item[0].service.title }}
              </nuxt-link>
              <template v-if="item.length > 1">
                <tr v-for="elem in item" :key="elem.id" class="table-row">
                  <!-- <th>{{ idx + 1 }}</th> -->
                  <td class="table-title">{{ elem.title }}</td>
                  <td class="price-width">{{ elem.value }}</td>
                  <td class="unit-width">{{ elem.unit }}</td>
                </tr>
              </template>
            </td>
            <td v-if="item.length < 2" class="price-width">
              {{ item[0].value }}
            </td>
            <td v-if="item.length < 2" class="unit-width">
              {{ item[0].unit }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    price: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      priceArr: [],
    }
  },
  mounted() {
    this.price.forEach((element, index) => {
      this.priceArr.push(
        this.price.filter((item) => element.service.id === item.service.id)
      )
    })
    this.priceArr.sort((a, b) => b.length - a.length)
    this.priceArr = this.priceArr.filter((elem, index, arr) => {
      if (arr[index + 1] === undefined) return true
      return elem[0].service.id !== arr[index + 1][0].service.id
    })
  },
  methods: {
    getColspan(item) {
      if (item.length > 1) return 3
      return 0
    },
    getHover(item) {
      if (item.length > 1) return ''
      return 'table-row'
    },
    getWeightTitle(item) {
      if (item.length > 1) return 'table-service-title'
      return ''
    },
  },
}
</script>
<style scoped>
.table-title {
  width: 850px;
  font-weight: 400;
}
@media (max-width: 1200px) {
  .table-title {
    width: 670px;
  }
}
@media (max-width: 990px) {
  .table-title {
    width: 440px;
  }
}
@media (max-width: 768px) {
  .table-title {
    width: 280px;
  }
  .container,
  .container-fluid,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    padding-left: 5px;
    padding-right: 5px;
  }
}
.price-width {
  width: 100px;
  text-align: left;
  font-weight: 400;
}
.unit-width {
  width: 100px;
  text-align: right;
  font-weight: 400;
}
.table-row:hover {
  background-color: #ffbc13;
}
a:hover {
  color: black;
  filter: brightness(70%);
}

#table-header {
  text-align: center;
}

.table-service-title {
  font-weight: 700;
}
</style>
