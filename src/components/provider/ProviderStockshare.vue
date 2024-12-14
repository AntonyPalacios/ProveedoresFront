<template>
  <div>
    <h2>Accionistas mayoritarios de la empresa <span>*</span></h2>
    <base-container>
      <div class="row">
        <div class="column" style="width: 60%">
          <label>Apellidos y nombres</label>
        </div>
        <div class="column" style="width: 10%">
          <label>% Capital Social</label>
        </div>
        <div class="column" style="width: 30%">
          <label>Nacionalidad</label>
        </div>
      </div>
      <div class="row" v-for="stockshare in stockshares" :key="stockshare.id">
        <div class="column" style="width: 60%">
          <el-input class="customInput" v-model="stockshare.name"/>
        </div>
        <div class="column" style="width: 10%">
          <el-input class="customInput" type="number" v-model="stockshare.perc">
            <template v-slot:suffix >
              %
            </template>
          </el-input>
        </div>
        <div class="column" style="width: 30%">
          <el-input class="customInput" v-model="stockshare.nacionalidad"/>
        </div>
      </div>
    </base-container>

  </div>
</template>

<script setup>
import colors from '@/assets/colors';
import {ref} from'vue';

const stockshares = ref([
  {
    id: 1,
    name: "",
    perc:5,
    nacionalidad: ""
  },
  {
    id: 2,
    name: "",
    perc:10,
    nacionalidad: ""
  },
  {
    id: 3,
    name: "",
    perc:8,
    nacionalidad: ""
  },
  {
    id: 4,
    name: "",
    perc:5,
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