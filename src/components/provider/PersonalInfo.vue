<template>
<div>
  <h2>Datos personal</h2>
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
      <div class="column" style="width: 30%">
        <label>Giro o Actividad económica - Principal <span>*</span></label>
        <el-input class="customInput" v-model="giroPrincipal"/>
      </div>
      <div class="column" style="width: 30%">
        <label>Giro o Actividad económica - Secundaria</label>
        <el-input class="customInput" v-model="giroSecundario"/>
      </div>
      <div class="column" style="width: 10%">
        <label>Tipo documento</label>
        <el-select class="customInput" v-model="ttipoidentificacion">
          <el-option :value=1 label="DNI"/>
          <el-option :value=2 label="Pasaporte"/>
          <el-option :value=3 label="RUC"/>
          <el-option :value=4 label="CE"/>
        </el-select>
      </div>
      <div class="column" style="width: 30%">
        <label>Número documento <span>*</span></label>
        <el-input class="customInput" v-model="identificacion"/>
      </div>
    </div>
    <div class="row">
      <div class="column" style="width: 40%">
        <label>Programa anticorrupción - Ley 30424 <span>*</span></label>
        <div class="column">
          <el-radio-group v-model="anticorrupcion">
            <el-radio :label=true size="large">SÍ</el-radio>
            <el-radio :label=false size="large">NO</el-radio>
          </el-radio-group>
          <el-date-picker
              type="date"
              class="customInput"
              format="DD/MM/YYYY"
              v-model="fanticorrupcion"
          />
        </div>
      </div>
      <div class="column" style="width: 40%">
        <label>Nombre del encargado de prevención</label>
        <el-input class="customInput" v-model="encargadoPrevencion"/>
      </div>
      <div class="column" style="width: 20%">
        <label>Licita con el estado</label>
        <el-radio-group v-model="licitaEstado">
          <el-radio :label=true size="large">SÍ</el-radio>
          <el-radio :label=false size="large">NO</el-radio>
        </el-radio-group>
      </div>
    </div>
  </base-container>
</div>
</template>

<script setup>
import colors from '@/assets/colors';
import utilDates from "@/assets/utilDates";
import {watch, ref} from 'vue';
import {useStore} from 'vuex';

const store = useStore();

// eslint-disable-next-line no-undef
const props = defineProps({
  data:{
    type: Object,
    required: false,
    default: null
  },
  save:{
    type: Boolean,
    required: true
  }
})
const data = ref(props.data);

const razonSocial = ref(data.value?data.value.razonSocial:"")
const nombreComercial = ref(data.value?data.value.nombreComercial:"")
const giroPrincipal = ref(data.value?data.value.giroPrincipal:"")
const giroSecundario = ref(data.value?data.value.giroSecundario:"")
const ttipoidentificacion = ref(data.value?data.value.ttipoidentificacion:1)
const identificacion = ref(data.value?data.value.identificacion:"")
const anticorrupcion = ref(data.value?data.value.anticorrupcion:false)
const fanticorrupcion = ref(data.value?utilDates.stringToDate(data.value.fanticorrupcion):new Date())
const encargadoPrevencion = ref(data.value?data.value.encargadoPrevencion:"")
const licitaEstado = ref(data.value?data.value.licitaEstado:false)

watch(()=>props.save, ()=>{
  if(props.save){
    store.dispatch('providerForm/setPersonalInfo',{
      razonSocial: razonSocial.value,
      nombreComercial: nombreComercial.value,
      giroPrincipal: giroPrincipal.value,
      ttipoidentificacion: ttipoidentificacion.value,
      identificacion: identificacion.value,
      anticorrupcion: anticorrupcion.value,
      fanticorrupcion: fanticorrupcion.value,
      encargadoPrevencion: encargadoPrevencion.value,
      licitaEstado: licitaEstado.value
    })
  }})

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
span{
  color: v-bind(colors.colorActivo);
}
.customInput {
  --el-input-focus-border-color: v-bind(colors.colorPrimario);
}
.row .column{
  margin-right: 30px;
}
.row .column:last-child{
  margin-right: 0;
}
div label {
  font-weight: bold;
  font-size: small;
  float: left;
  margin-bottom: 10px;
}
</style>