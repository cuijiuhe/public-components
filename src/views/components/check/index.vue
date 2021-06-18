<template>
  <!-- 功能页面  -->
  <div class="mod-page">
    <PageList :items='items' :columns="columns" :data='data' server='fn()' :tableOption='tableOption' @getData='getData' @getRows='getRows'>

      <template #buttons>
        <!-- <h1>Here might be a page title</h1> -->
      </template>
      <!-- 表格按钮插槽 -->
      <template #tableBtn>
        <el-button type="primary" size="small" @click="handleShowDialogForm()">添加列表</el-button>
        <el-button type="default" size="small" @click="toggleSelection()">取消选择</el-button>
      </template>

      <template #options="rows">
        <el-button type="text" size="small" @click="handleShowDialogDetail(rows)">查看</el-button>
        <el-dropdown trigger="click">
          <el-button type="text" size="small">更多<i class="el-icon-arrow-down el-icon--right"></i></el-button>
          <el-dropdown-menu slot="dropdown" size="small">
          <el-dropdown-item size="small" @click.native="handleEditItem">编辑</el-dropdown-item>
          <el-dropdown-item size="small" @click.native="handleDeleteItem">删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
    </PageList>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import PageList from '@/components/PageList/index.vue'
@Component({
  name: 'CheckPage',
  components: {
    PageList
  }
})
export default class extends Vue {
  
        items: Array<any> = [
            {
                label: '活动名称',
                name: 'name', //接口要的字段
                type: 'input',
                clearable: true
            },
            {
                label: '活动选项',
                name: 'active',
                type: 'select',
                option: [
                    {
                        value: '01',
                        label: '篮球'
                    },
                    {
                        value: '02',
                        label: '跑步'
                    },
                    {
                        value: '03',
                        label: '游泳'
                    }
                ]
            },
            {
              label: '范围个人对个',
              name: 'activeTime',
              type: 'date-picker',
              valueFormat: 'yyyy-MM-DD HH:mm:ss',
              componentType: 'monthrange' //日期选择的种类
            },
            {
              label: '活动事件方法',
              name: 'activeTime',
              type: 'date-picker',
              valueFormat: 'yyyy-MM-DD HH:mm:ss',
            },
            {
              label: '活件方法',
              name: 'activeTime',
              type: 'date-picker',
              valueFormat: 'yyyy-MM-DD HH:mm:ss',
            },
            {
              label: '活件方法2',
              name: 'activeTime',
              type: 'date-picker',
              valueFormat: 'yyyy-MM-DD HH:mm:ss',
            },
            {
              label: '活动事法3',
              name: 'activeTime',
              type: 'date-picker',
              valueFormat: 'yyyy-MM-DD HH:mm:ss',
            }
        ]
        columns: Array<any> = [
          {
            name: 'type',
            title: '类型',
            type: 'function',
            width: '300',
            callback: (row: any) => {   //格式化数据的方法
              let resault = row.type === 1 ? '在线' : '离线';
              return resault;
            }
          },
          {
            name: 'private',
            title: '省份'
          },
          {
            name: 'time',
            title: '序时间号'
          },
          {
            name: 'happy',
            title: '快乐',
            type: 'link',
            callback: (row: Object) => {
              console.log(row,'链接')
            }
          },
          {
            name: 'isOpen',
            title: '开关',
            type: 'isSwitch',
            callback: (row: any) => {
              let rel = null;
              row.isOpen === 'true' ? rel = true : rel = false;
              return rel;
            }
          }
          
        ]
        data = [
          {
            private: '北京',
            time: '3232',
            type: 1,
            happy: '分数链接',
            isOpen: 'true'
          }, 
          {
            private: '北京',
            time: '3232',
            type: '好',
            happy: '链接',
            isOpen: 'false'
          }
        ]

        tableOption = {
          total: 123,
          pageSize: 10,
          isNumber: true, //序号
          isSelection: true, //checkbox
          tableDescribe: '32', //checkbox
          isBorder: true, //是否需要纵向表格
          pageArr: [40, 50 ,60] //分页数组

        }
  // handleClick () {
  //   console.log(32)
  // }

  handleShowDialogDetail (val: Object) {
    console.log(val)
  }

  // mounted () {
  //   const eventDoc: any = document;
  //   eventDoc.querySelector('.strs').innerHTML = this.str;
  // }
  fn(){
    
  }
  getData (val: any) {

    console.log('获取数据', val);
  }

  getRows (val: any) {
    console.log(val,'row')
  }

}
</script>
<style lang='scss' scoped>
    

</style>
