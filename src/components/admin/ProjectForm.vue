<template>
<div>
  <div class="row">
    <label>Nombre del proyecto</label>
    <el-input class="customInput" placeholder="Ingrese nombre" style="margin-right: 30px" v-model="projectName"/>
    <label>Tipo de proyecto</label>
    <el-select class="customInput" :style="style" placeholder="Seleccionar" v-model="projectType">
      <el-option value="1">Proyecto 1</el-option>
      <el-option value="2">Proyecto 2</el-option>
      <el-option value="3">Proyecto 3</el-option>
    </el-select>
    <label v-if="props.action==='edit'">Código del proyecto</label>
    <el-input v-if="props.action==='edit'" class="customInput" disabled style="width: 30%" v-model="projectCode"/>
  </div>
  <div class="row">
    <label>Descripción</label>
  </div>
  <div class="row" style="width: 75%">
    <el-input class="customInput" placeholder="Descripcion" type="textarea" rows="3" resize="none" v-model="description"/>
  </div>
  <div class="row">
    <div class="options">
      <label>Fecha de Inicio</label>
      <el-date-picker
          type="date"
          class="customInput"
          format="DD-MM-YYYY"
          v-model="fdesde"
      />
    </div>
    <div class="options">
      <label>Fecha de Caducidad</label>
      <el-date-picker
          type="date"
          class="customInput"
          format="DD-MM-YYYY"
          v-model="fhasta"
      />
    </div>
    <div class="options">
      <label>Estado</label>
      <el-select class="customInput" placeholder="Seleccionar" v-model="state">
        <el-option :value=true label="Activo"/>
        <el-option :value=false label="Inactivo"/>
      </el-select>
    </div>
    <div class="options">
      <label>Analista Encargado</label>
      <el-select class="customInput" placeholder="Seleccionar" v-model="analyst">
        <el-option :value=1 label="Analista 1"/>
        <el-option :value=2 label="Analista 2"/>
      </el-select>
    </div>
  </div>
  <div class="create">
    <base-button v-if="props.action==='new'" @click="saveProject(props.action)">Crear Proyecto</base-button>
    <base-button v-else @click="saveProject(props.action)">Guardar Cambios</base-button>
  </div>
</div>
</template>

<script setup>
import colors from "@/assets/colors";
import messageConstants from "@/assets/MessageConstants";
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';
import {ref,computed} from 'vue';

const router = useRouter();
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

const projectName = ref(data.value?data.value.projectName:"");
const projectType = ref(data.value?data.value.projectType:"");
const projectCode = ref(data.value?data.value.projectCode:"");
const description = ref(data.value?data.value.description:"");
const fdesde = ref(data.value?data.value.fdesde:new Date());
const fhasta = ref(data.value?data.value.fhasta:new Date());
const state = ref(data.value?data.value.state:true);
const analyst = ref(data.value?data.value.analyst:1);


async function saveProject(actionType) {
  const projectPayload = {
    projectName: projectName.value,
    projectType: projectType.value,
    description: description.value,
    state: state.value,
    analyst: analyst.value
  }
  if(actionType==='new'){
    await store.dispatch('project/createProject',projectPayload)
        .then(async () =>{
          messageConstants.setSuccessMessageBox('Proyecto creado correctamente.');
          await router.push('/project');
        }).catch((error)=>{
          messageConstants.setErrorMessageBox(error);
        });
  }else{
    console.log("edit")
  }
}


const style = computed(()=>{
  if(props.action ==='edit'){
    return 'width: 30%;margin-right: 30px;'
  }else{
    return 'width: 30%;'
  }
})


</script>

<style scoped>
.row {
  display: flex;
  margin: 15px 30px;
  justify-content: space-between;
}

.row .options:last-child{
  margin-right: 0;
}
label {
  font-weight: bold;
  font-size: medium;
  width: 30%;
  text-align: left;
}

.customInput {
  --el-input-focus-border-color: v-bind(colors.colorPrimario);
  --el-select-input-focus-border-color: v-bind(colors.colorPrimario);
}

.options {
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
}

.options label {
  font-weight: bold;
  font-size: small;
  text-align: left;
  margin-right: 20px;
}
button {
  margin: 30px auto 15px;
}
</style>