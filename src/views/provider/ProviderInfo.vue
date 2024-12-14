<template>
<div>
  <section>
    <label>Datos del proveedor</label>
  </section>
  <base-container>
    <div class="row">
      <div class="column" style="width: 20%;">
        <label>Tipo de persona</label>
        <el-input class="customInput" style="width: auto;margin-right: 25px" placeholder="Natural"/>
      </div>
      <div class="column" style="width: 40%;">
        <label>Nombre/Razón social</label>
        <el-input placeholder="Ingrese nombre" class="customInput" style="width: 90%;margin-right: 20px;float: left"/>
      </div>
      <div class="column" style="width: 15%;">
        <label>Tipo documento</label>
        <el-input class="customInput" style="width: auto;margin-right: 25px" placeholder="RUC">
        </el-input>
      </div>
      <div class="column" style="width: 30%;">
        <label>Identificacion</label>
        <el-input placeholder="Ingrese identificación" class="customInput" style="margin-right: 20px"/>
      </div>
    </div>
    <div class="row">
      <div class="column" style="width: 50%;">
        <label>Correo electrónico</label>
        <el-input placeholder="Ingrese email" class="customInput" style="width: 90%;float: left"/>
      </div>
      <div class="column" style="width: 50%;">
        <label>Teléfono</label>
        <el-input placeholder="Ingrese teléfono" class="customInput" style="width: 100%;float: left"/>
      </div>
    </div>
    <div class="row">
      <div class="options">
        <label>Fecha de creacion</label>
        <el-date-picker
            type="date"
            class="customInput"
        />
      </div>
      <div class="options">
        <label>Fecha de caducidad</label>
        <el-date-picker
            type="date"
            class="customInput"
        />
      </div>
      <div class="options">
        <label>Última modificación</label>
        <el-date-picker
            type="date"
            class="customInput"
        />
      </div>
    </div>
    <div class="row">
      <div class="options">
        <label>Estado</label>
        <el-input placeholder="Activo"/>
      </div>
      <div class="options">
        <label>Analista encargado</label>
        <el-input placeholder="Analista 1"/>
      </div>
      <div class="options">
        <label>Estado Evaluación</label>
        <el-input placeholder="Sin evaluar"/>
      </div>
      <div class="options">
        <label>Fecha evaluación</label>
        <el-date-picker
            type="date"
            class="customInput"
        />
      </div>
    </div>
  </base-container>
</div>
</template>

<script setup>
import BaseContainer from "@/components/ui/BaseContainer";
import colors from '@/assets/colors';
</script>

<style scoped>
column{
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
  margin-right: 20px;
}
.options label {
  font-weight: bold;
  font-size: medium;
  text-align: left;
  margin-right: 20px;
}
.row .options:last-child {
  margin-right: 0;
}
section {
  text-align: left;
  margin-bottom: 10px;
}

</style>