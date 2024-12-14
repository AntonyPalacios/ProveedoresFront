<template>
<div>
  <div class="row">
    <div class="column" style="width: 20%;">
      <label>Tipo de persona</label>
      <el-radio-group v-model="ttipopersona" :text-color="colors.colorActivo" :fill="colors.colorActivo" >
        <el-radio label="NAT" border style="margin: 0">Natural</el-radio>
        <el-radio label="JUR" border style="margin: 0">Jurídica</el-radio>
      </el-radio-group>
    </div>
    <div class="column" style="width: 40%;">
      <label>Nombre/Razón social</label>
      <el-input placeholder="Ingrese nombre" class="customInput" style="width: 90%;margin-right: 20px;float: left" v-model="providerName"/>
    </div>
    <div class="column" style="width: 15%;">
      <label>Tipo documento</label>
      <el-select class="customInput" style="width: auto;margin-right: 25px" v-model="ttipoidentificacion">
        <el-option :value=1 label="DNI"/>
        <el-option :value=2 label="Pasaporte"/>
        <el-option :value=3 label="RUC"/>
        <el-option :value=4 label="CE"/>
      </el-select>
    </div>
    <div class="column" style="width: 30%;">
      <label>Identificacion</label>
      <el-input placeholder="Ingrese identificación" class="customInput" style="margin-right: 20px" v-model="identificacion"/>
    </div>
  </div>
  <div class="row">
    <div class="column" style="width: 50%;">
      <label>Correo electrónico</label>
      <el-input placeholder="Ingrese email" class="customInput" style="width: 90%;float: left" v-model="email" type="email"/>
    </div>
    <div class="column" style="width: 50%;">
      <label>Teléfono</label>
      <el-input placeholder="Ingrese teléfono" class="customInput" style="width: 100%;float: left" v-model="phone"/>
    </div>
  </div>
  <div class="row" style="justify-content: space-between">
    <div class="options">
      <label>Fecha de caducidad</label>
      <el-date-picker
          type="date"
          class="customInput"
          format="DD/MM/YYYY"
          v-model="fhasta"
      />
    </div>
    <div class="options">
      <label>Analista encargado</label>
      <el-input disabled placeholder="Analista" v-model="analyst"/>
    </div>
    <div class="options">
      <base-button @click="saveProvider(props.action)">Generar link</base-button>
    </div>
  </div>
</div>
</template>

<script setup>
import {ref} from 'vue';
import colors from "@/assets/colors";
import utilDates from "@/assets/utilDates";
import BaseButton from "@/components/ui/BaseButton";
import messageConstants from "@/assets/MessageConstants";
import {useRouter, useRoute} from "vue-router";
import {useStore} from "vuex";

const router = useRouter();
const route = useRoute();
const store = useStore();

// eslint-disable-next-line no-undef
const props = defineProps({
  action:{
    type: String,
    required: false,
    default: 'new'
  },
  data:{
    type: Object,
    required: false,
    default: null
  }
})
const data = ref(props.data);

const ttipopersona=ref(data.value ? data.value.ttipopersona:"NAT");
const providerName=ref(data.value ? data.value.providerName:"");
const ttipoidentificacion=ref(data.value ? data.value.ttipoidentificacion:1);
const identificacion=ref(data.value ? data.value.identificacion:"");
const email=ref(data.value ? data.value.email:"");
const phone=ref(data.value ? data.value.phone:"");
const fhasta=ref(data.value ? utilDates.stringToDate(data.value.fhasta):new Date());
const analyst = ref(data.value ? data.value.analyst:"Analista 1");

async function saveProvider(actionType){
  const providerPayload = {
    ttipopersona: ttipopersona.value,
    providerName: providerName.value,
    ttipoidentificacion: ttipoidentificacion.value,
    identificacion: identificacion.value,
    email: email.value,
    phone: phone.value,
    fhasta: fhasta.value,
    analyst: analyst.value,
  }
  if(actionType==='new'){
    await store.dispatch('provider/createProvider',providerPayload)
        .then(async () =>{
          messageConstants.setSuccessMessageBox('Proveedor creado correctamente.');
          await router.push({name:'infoProject',params:{id:route.params.id}});
        }).catch((error)=>{
          messageConstants.setErrorMessageBox(error);
        });
  }else{
    console.log("edit")
  }
}
</script>

<style scoped>
.column{
  margin-right: auto;
}
.column label{
  display: flex;
  margin: 15px 0;

}
.row{
  display: flex;
  margin: 15px 30px;

}

label {
  font-weight: bold;
  font-size: medium;
  text-align: left;
}
.customInput {
  --el-input-focus-border-color: v-bind(colors.colorPrimario);
  --el-select-input-focus-border-color: v-bind(colors.colorPrimario);
  --el-radio-button-checked-bg-color: v-bind(colors.colorPrimario);
  --el-radio-button-checked-border-color: v-bind(colors.colorPrimario);
  --el-radio-button-checked-text-color: v-bind(colors.colorActivo);
}
.options {
  display: flex;
  align-items: center;
  width: fit-content;
}
.options label {
  font-weight: bold;
  font-size: medium;
  text-align: left;
  margin-right: 20px;
}
</style>