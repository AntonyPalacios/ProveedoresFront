<template>
  <div>
    <section>
      <label>Datos del proyecto</label>
    </section>
    <base-container>
      <div class="row">
        <div class="column">
          <label>Nombre del proyecto</label>
          <el-input disabled v-model="projectName"/>
        </div>
        <div class="column">
          <label>Tipo proyecto</label>
          <el-input disabled v-model="projectType"/>
        </div>
        <div class="column">
          <label>Código del proyecto</label>
          <el-input disabled v-model="projectCode"/>
        </div>
      </div>
      <div class="row">
        <div class="options">
          <label>Fecha de Inicio</label>
          <el-date-picker
              disabled
              type="date"
              class="customInput"
              format="DD/MM/YYYY"
              v-model="fdesde"
          />
        </div>
        <div class="options">
          <label>Fecha de Caducidad</label>
          <el-date-picker
              disabled
              type="date"
              class="customInput"
              format="DD/MM/YYYY"
              v-model="fhasta"
          />
        </div>
        <div class="options">
          <label>Estado</label>
          <el-select class="customInput" placeholder="Seleccionar" disabled v-model="state">
            <el-option value="1">Activo</el-option>
            <el-option value="0">Inactivo</el-option>
          </el-select>
        </div>
        <div class="options">
          <label>Analista Encargado</label>
          <el-select class="customInput" placeholder="Seleccionar" disabled v-model="analyst">
            <el-option value="1">Analista 1</el-option>
            <el-option value="2">Analista 2</el-option>
          </el-select>
        </div>
      </div>
    </base-container>
  </div>
</template>

<script setup>
// import {useRouter} from 'vue-router';
// import {useStore} from 'vuex';
import {ref} from 'vue';
import utilDates from "@/assets/utilDates";

// const router = useRouter();
// const store = useStore();

// eslint-disable-next-line no-undef
const props = defineProps({
  data: {
    type: Object,
    required: false,
    default: null
  }
})
const data = ref(props.data);

const projectName = ref(data.value ? data.value.projectName : "");
const projectType = ref(data.value ? data.value.projectType : "");
const projectCode = ref(data.value ? data.value.projectCode : "");
const fdesde = ref(data.value ? utilDates.stringToDate(data.value.fdesde) : new Date());
const fhasta = ref(data.value ? utilDates.stringToDate(data.value.fhasta) : new Date());
const state = ref(data.value ? data.value.state : true);
const analyst = ref(data.value ? data.value.analyst : 1);


</script>

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
  margin: 15px 15px;
}

.row label {
  font-size: small;
}

.column {
  display: inline-block;
}

.column label {
  font-size: small;
}

.options {
  display: inline-flex;
  justify-content: space-between;
  margin-right: 20px;
}

.options label {
  margin-right: 10px;
}

.row .options:last-child {
  margin-right: 0;
}

section {
  text-align: left;
  margin-bottom: 10px;
}

label {
  font-weight: bold;
  font-size: medium;
  text-align: left;
}
</style>