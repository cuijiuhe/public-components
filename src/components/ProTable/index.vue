<template>
    <el-card>
        <div class="mod-card-header">
            <!-- 标题如没有则可以不添加 -->
            <h2 class="mod-card-title">{{tableOption.tableDescribe}}</h2>
            <div class="mod-card-tool">
                <slot name="tableBtn"></slot>
            </div>
        </div>
        <el-table :data="data"
            @selection-change="handleSelectionChange"
            stripe
            :border="tableOption.isSelection"
        >
            <el-table-column
            v-if="tableOption.isSelection"
            type="selection"
            width="63"
            fixed="left"
          ></el-table-column>
            <el-table-column
                v-if="tableOption.isNumber"
                fixed
                label="序号"
                type="index"
                width="77"
            ></el-table-column>
            <template v-for="column of columns">
                <el-table-column v-if='column.type === "function"' :key="column.name" :label="column.title" :prop='column.name' :width="column.width">
                    <template slot-scope='scope'>
                        <!-- <el-switch v-model="scope.row.isOpen" active-color="#409EFF" inactive-color="#ccc"></el-switch> -->
                        <span>{{ column.callback && column.callback(scope.row) }}</span>
                    </template>
                </el-table-column>

                <el-table-column v-else-if='column.type === "isSwitch"' :key="column.name" :label="column.title" :prop='column.name' :width="column.width">
                    <template slot-scope='scope'>
                        <el-switch :value="column.callback(scope.row)" disabled active-color="#409EFF" inactive-color="#ccc"></el-switch>
                    </template>
                </el-table-column>

                <el-table-column v-else-if='column.type === "link"' :key="column.name" :label="column.title" :width="column.width">
                    <template slot-scope="scope">
                        <a class="customerName" @click="column.callback(scope.row)">{{scope.row[column.name]}}</a>
                    </template>
                </el-table-column>
                <el-table-column v-else :key="column.name" :label="column.title" :prop='column.name' :width="column.width"></el-table-column>

            </template>


            <el-table-column
            fixed="right"
            label="操作"
            width="150">
                <template slot-scope="scope">
                    <slot name="options" :rows='scope.row'></slot>
                </template>
            </el-table-column>
        </el-table>

        <div class="mod-card-footer">
        <el-pagination v-if='this.tableOption.total'
          :total="tableOption.total"
          :page-size="tableOption.pageSize"
          :page-sizes="defaultPageArr"
          background
          layout="total, sizes, prev, pager, next"
          @current-change="handleCurrentChange"
          @size-change="selsChange"
        />
      </div>
    </el-card>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
    @Component({
        name: "ProTable",
    })
    export default class extends Vue {
        @Prop({
           type: Array,
           required: true,
           default: () => []
        })
        private columns !: Array<any>;

        @Prop({
           type: Array,
           required: true,
           default: () => []
        })
        private data !: Array<any>;

        @Prop({
           type: Object,
           required: true,
           default: () => {
               return {

               }
            }
        })
        private tableOption !: Object;

        private defaultPageArr: Array<any> = [10, 20, 30, 40];

        mounted () {
            (this.tableOption as any).pageArr ? this.defaultPageArr = (this.tableOption as any).pageArr : '';
        }

        handleShowDialogDetail (val: any) {
            console.log(val)

        }

        // 选择展示条数
        private selsChange(val: any) {
            console.log(val)
            this.$emit('getData', val);
            // this.filterForm.pageSize = val;
            // this.getTableList();
        }

          // 表格index改变时
        private handleCurrentChange(val: any) {
            console.log(val)
            // this.filterForm.pageIndex = val;
            // this.getTableList();
        }

        private handleSelectionChange(val: any) {
            this.$emit('getRows', val);
        }
    }
</script>

<style>
    .mod-card-footer {
        float: right;
        margin-top: 20px;
    }
    .customerName {
        color: #108ee9;
        cursor: pointer;
    }
</style>