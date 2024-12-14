<template>
  <div>
    <h2>Directores de la empresa <span>*</span></h2>
    <base-container>
      <div class="row">
        <div class="column" style="width: 30%">
          <label>Apellidos y nombres</label>
        </div>
        <div class="column" style="width: 10%">
          <label>Tipo documento</label>
        </div>
        <div class="column" style="width: 30%">
          <label>Número documento</label>
        </div>
        <div class="column" style="width: 30%">
          <label>Nacionalidad</label>
        </div>
      </div>
      <div class="row" v-for="director in directors" :key="director.id">
        <div class="column" style="width: 30%">
          <el-input class="customInput" v-model="director.name"/>
        </div>
        <div class="column" style="width: 10%">
          <el-select class="customInput" v-model="director.ttipoidentificacion">
            <el-option :value=1 label="DNI"/>
            <el-option :value=2 label="Pasaporte"/>
            <el-option :value=3 label="RUC"/>
            <el-option :value=4 label="CE"/>
          </el-select>
        </div>
        <div class="column" style="width: 30%">
          <el-input class="customInput" v-model="director.identificacion"/>
        </div>
        <div class="column" style="width: 30%">
          <el-input class="customInput" v-model="director.nacionalidad"/>
        </div>
      </div>
    </base-container>

  </div>
</template>

<script setup>
import colors from '@/assets/colors';
import {ref} from'vue';

const directors = ref([
  {
    id: 1,
    name: "",
    ttipoidentificacion: 1,
    identificacion: "",
    nacionalidad: ""
  },
  {
    id: 2,
    name: "",
    ttipoidentificacion: 1,
    identificacion: "",
    nacionalidad: ""
  },
  {
    id: 3,
    name: "",
    ttipoidentificacion: 1,
    identificacion: "",
    nacionalidad: ""
  },
  {
    id: 4,
    name: "",
    ttipoidentificacion: 1,
    identificacion: "",
    nacionalidad: ""
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