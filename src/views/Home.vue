/*/src/views/Home.vue*/
<template>
  <div class="home">
    <div class="head"></div>
    <el-button type="primary">主要按钮</el-button>
    <el-color-picker size="medium" @change="changeColor"> </el-color-picker>
    <div>
      <span class="font-test"> 看我到底变不变色 </span>
      <span class="font-test1"> 看我到底变不变色 </span>
    </div>
  </div>
</template>

<script>
import { changeThemeColor } from '@/utils/themeColorClient';
export default {
  name: 'Home',
  data() {
    return {};
  },
  methods: {
    changeColor(newColor) {
      changeThemeColor(newColor).then(() => {});
    },
  },
};
</script>
<style lang="scss" scoped>
.head {
  height: 100px;
  width: 100%;
  background-color: $main-color;
}
.font-test {
  font-size: 20px;
  line-height: 40px;
  color: $main-color;
}
.font-test1 {
  font-size: 20px;
  line-height: 40px;
  color: #000000;
}
</style>
