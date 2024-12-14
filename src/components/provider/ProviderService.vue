<template>
  <div>
    <h2>Productos y/o servicios que brinda la empresa <span>*</span></h2>
    <base-container>
      <div class="row">
        <div class="column" style="width: 40%">
          <label>Productos / Servicios</label>
        </div>
        <div class="column" style="width: 30%">
          <label>Rubro</label>
        </div>
        <div class="column" style="width: 30%">
          <label>Sector</label>
        </div>
      </div>
      <div class="row" v-for="service in services" :key="service.id">
        <div class="column" style="width: 40%">
          <el-input class="customInput" v-model="service.name"/>
        </div>
        <div class="column" style="width: 30%">
          <el-input class="customInput" v-model="service.rubro"/>

        </div>
        <div class="column" style="width: 30%">
          <el-input class="customInput" v-model="service.sector"/>
        </div>
      </div>
    </base-container>

  </div>
</template>

<script setup>
import colors from '@/assets/colors';
import {ref} from'vue';

const services = ref([
  {
    id: 1,
    name: "",
    rubro:"",
    sector: ""
  },
  {
    id: 2,
    name: "",
    rubro:"",
    sector: ""
  },
  {
    id: 3,
    name: "",
    rubro:"",
    sector: ""
  },
  {
    id: 4,
    name: "",
    rubro:"",
    sector: ""
  },
])
</script>

<style scoped>
h2 {
  color: v-bind(colors.colorPrimario);
  margin: 20px auto;
  text-align: left;
}

.row {
  display: flex;
  margin: 15px 30px;
  justify-content: space-between;
}

.column {
  display: inline-block;
}

span {
  color: v-bind(colors.colorActivo);
}

.customInput {
  --el-input-focus-border-color: v-bind(colors.colorPrimario);
}

.row .column {
  margin-right: 30px;
}

.row .column:last-child {
  margin-right: 0;
}

div label {
  font-weight: bold;
  font-size: small;
  float: left;
  margin-bottom: 10px;
}
</style>