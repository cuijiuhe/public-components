<template>
  <!-- 功能页面  -->
  <div class="mod-page">
    
    <el-card class="mod-card mod-filter" shadow="never">
      <ft-buttons>按钮</ft-buttons>
      <ft-buttons type='primary'>登陆</ft-buttons>
      <ft-buttons :type='12'>删除</ft-buttons>
      <ft-buttons type='info'>删除</ft-buttons>
      <ft-buttons type='warning'>删除</ft-buttons>
      <ft-buttons type='danger'>删除</ft-buttons>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'CheckPage'
})
export default class extends Vue {
}
</script>
<style lang='scss' scoped>
    

</style>
