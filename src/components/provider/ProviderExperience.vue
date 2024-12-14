<template>
  <div>
    <h2>Experiencia <span>*</span></h2>
    <base-container>
      <div class="row">
        <label>Años de experiencia en el mercado</label>
        <el-input style="width: 20%;" class="customInput" type="number"/>
      </div>
    </base-container>
  </div>
</template>

<script setup>
import colors from '@/assets/colors';

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

span {
  color: v-bind(colors.colorActivo);
}

.customInput {
  --el-input-focus-border-color: v-bind(colors.colorPrimario);
}

.row label {
  margin-left: 0px;
}

.row .customInput {
  margin: 0 auto 0 30px;
}

div label {
  font-weight: bold;
  font-size: small;
  float: left;
  margin-bottom: 10px;
}
</style>