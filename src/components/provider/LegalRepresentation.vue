<template>
  <div>
    <h2>Representacion Legal</h2>
    <base-container>
      <div class="row">
        <div class="column" style="width: 50%">
          <label>Razón social <span>*</span></label>
          <el-input class="customInput" v-model="razonSocial"/>
        </div>
        <div class="column" style="width: 50%">
          <label>Nombre comercial <span>*</span></label>
          <el-input class="customInput" v-model="nombreComercial"/>
        </div>
      </div>
      <div class="row">
        <div class="column" style="width: 50%;">
          <label>Tipo documento <span>*</span></label>
          <el-select class="customInput" v-model="ttipoidentificacion">
            <el-option :value=1 label="DNI"/>
            <el-option :value=2 label="Pasaporte"/>
            <el-option :value=3 label="RUC"/>
            <el-option :value=4 label="CE"/>
          </el-select>
        </div>
        <div class="column" style="width: 50%;">
          <label>Número documento <span>*</span></label>
          <el-input class="customInput" v-model="identificacion"/>
        </div>
      </div>
      <div class="row">
        <div class="column" style="width: 50%;">
          <label>Dirección <span>*</span></label>
          <el-input class="customInput" v-model="direccion"/>
        </div>
        <div class="column">
          <el-radio-group v-model="ctipocalle">
            <el-radio label="Avenida" size="large">Av.</el-radio>
            <el-radio label="Jiron" size="large">Jr.</el-radio>
            <el-radio label="Calle" size="large">Ca.</el-radio>
            <el-radio label="Pasaje" size="large">Psj.</el-radio>
          </el-radio-group>
        </div>
        <div class="column" style="width: 20%;">
          <label>Otro</label>
          <el-input class="customInput" v-model="ctipocalleOtro"/>
        </div>
      </div>
      <div class="row">
        <div class="column" style="width: 50%;">
          <label>Correo electrónico</label>
          <el-input class="customInput" type="email" v-model="email"/>
        </div>
        <div class="column" style="width: 25%">
          <label>Teléfono</label>
          <el-input class="customInput" v-model="telefono"/>
        </div>
        <div class="column" style="width: 25%">
          <label>Anexo</label>
          <el-input class="customInput" v-model="anexo"/>
        </div>
      </div>

    </base-container>
  </div>
</template>

<script setup>
import colors from '@/assets/colors'
import {ref, watch} from 'vue';
import {useStore} from 'vuex';

const store = useStore();

// eslint-disable-next-line no-undef
const props = defineProps({
  data: {
    type: Object,
    required: false,
    default: null
  },
  save: {
    type: Boolean,
    required: true
  }
})
const data = ref(props.data);

const razonSocial = ref(data.value ? data.value.razonSocial : "")
const nombreComercial = ref(data.value ? data.value.nombreComercial : "")
const ttipoidentificacion = ref(data.value ? data.value.ttipoidentificacion : 1)
const identificacion = ref(data.value ? data.value.identificacion : "")
const direccion = ref(data.value ? data.value.direccion : "")
const ctipocalle = ref(data.value ? data.value.ctipocalle : "Avenida")
const ctipocalleOtro = ref(data.value ? data.value.ctipocalleOtro : "")
const email = ref(data.value ? data.value.email : "")
const telefono = ref(data.value ? data.value.telefono : "")
const anexo = ref(data.value ? data.value.anexo : "")

watch(() => props.save, () => {
  if (props.save) {
    store.dispatch('providerForm/setLegalRepresentation', {
      razonSocial: razonSocial.value,
      nombreComercial: nombreComercial.value,
      ttipoidentificacion: ttipoidentificacion.value,
      identificacion: identificacion.value,
      direccion: direccion.value,
      ctipocalle: ctipocalle.value,
      ctipocalleOtro: ctipocalleOtro.value,
      email: email.value,
      telefono: telefono.value,
      anexo: anexo.value
    })
  }
})
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

.column .row {
  width: 100%;
  margin: 0;
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