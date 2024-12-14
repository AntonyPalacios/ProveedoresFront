<template>
  <div>
    <the-header/>
    <div class="page">
      <h1>Formulario Proveedor</h1>
      <div>
        <el-steps :active="active" finish-status="success" class="steps" align-center>
          <el-step/>
          <el-step/>
        </el-steps>
      </div>
      <div v-show="active===0">
        <base-container class="bcontainer">
          <el-radio-group v-model="ttipopersona">
            <el-radio label="NAT" size="large" class="radio">Natural</el-radio>
            <el-radio label="JUR" size="large">Jurídica</el-radio>
          </el-radio-group>
        </base-container>
        <PersonalInfo :data="personalInfo" :save="saveFirstPage"/>
        <TaxResidence :data="taxResidence" :save="saveFirstPage"/>
        <LegalRepresentation :data="legalRepresentation" :save="saveFirstPage"/>
      </div>
      <div v-show="active===1">
        <h2>Directores, Gerentes / Ejecutivos y Accionistas principales</h2>
        <ProviderCEO :data="providerCeos" :save="saveSecondPage"/>
        <ProviderStockshare :data="providerStockshares" :save="saveSecondPage"/>
        <ProviderExperience :data="providerExperience" :save="saveSecondPage"/>
        <ProviderService :data="providerServices" :save="saveSecondPage"/>
      </div>
      <div class="actions">
        <base-button v-if="active===1" @click="previousPage">Atras</base-button>
        <base-button v-if="active===0" @click="nextPage" class="right">Siguiente</base-button>
        <base-button v-if="active===1" @click="saveProviderForm">Guardar</base-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import PersonalInfo from "@/components/provider/PersonalInfo";
import TaxResidence from "@/components/provider/TaxResidence";
import LegalRepresentation from "@/components/provider/LegalRepresentation";
import ProviderCEO from "@/components/provider/ProviderCEO";
import ProviderStockshare from "@/components/provider/ProviderStockshare";
import ProviderExperience from "@/components/provider/ProviderExperience";
import ProviderService from "@/components/provider/ProviderService";
import {ref, computed} from 'vue';
import colors from '@/assets/colors';
import {useStore} from 'vuex';
import BaseButton from "@/components/ui/BaseButton";

const store = useStore();

const active = ref(0);
const saveFirstPage = ref(false);
const saveSecondPage = ref(false);
const ttipopersona = ref("NAT");


const personalInfo = computed(()=>{
  return store.getters['providerForm/getPersonalInfo']
})
const taxResidence = computed(()=>{
  return store.getters['providerForm/getTaxResidence']
})
const legalRepresentation = computed(()=>{
  return store.getters['providerForm/getLegalRepresentation']
})
const providerCeos = computed(()=>{
  return store.getters['providerForm/getProviderCeos']
})
const providerStockshares = computed(()=>{
  return store.getters['providerForm/getProviderStockshares']
})
const providerExperience = computed(()=>{
  return store.getters['providerForm/getProviderExperience']
})
const providerServices = computed(()=>{
  return store.getters['providerForm/getProviderServices']
})
function nextPage(){
  saveFirstPage.value=true
  active.value=1;
}
function previousPage() {
  saveSecondPage.value=true
  active.value = 0;
}

function saveProviderForm(){
  //TODO save provider form


}
</script>

<style scoped>
h1 {
  color: v-bind(colors.colorPrimario);
  margin-bottom: 20px;
}

.steps {
  width: 30%;
  margin: 20px auto;
}

.radio {
  margin-right: 100px;
}

.bcontainer {
  width: fit-content;
  margin: 0 auto;
}

.page {
  margin: 0 50px;
}
.actions{
  margin-top: 15px;
  width: 25%;
  justify-content: space-between;
  display: flex;
  float: right;
}
</style>