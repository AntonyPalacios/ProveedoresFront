<template>
  <button class="myButton"><slot></slot>
  </button>
</template>

<script setup>
import colors from "@/assets/colors";
import {ref} from 'vue'
// eslint-disable-next-line no-undef
const props = defineProps({
  color:{
    type: String,
    required: false,
    default:'colorActivo'
  },
  size:{
    type: String,
    required: false,
    default: 'medium'
  }
});

const color = ref(props.color);

</script>

<style scoped>
.myButton{
  border: solid 1px v-bind(colors[color]);
  color: v-bind(colors.colorClaro);
  background-color: v-bind(colors[color]);
  border-radius: 2px;
  height: auto;
  width: auto;
  font-size: v-bind(size);
  padding: 5px 20px;
  display: flex;
}
</style>