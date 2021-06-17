<template>
    <el-card>
        <el-form ref="form" :model="form" label-width="100px" size="small" @submit.native.prevent="handleSubmit">
            <el-row :gutter="40" :class="{'mod-card-body-height' : items.length > 6 && !filterExtend}">
                <el-col :span="8" v-for="item in items" :key="item.label">
                    <el-form-item :label="item.label">
                        <!-- <item v-bind="item" /> -->
                        <component 
                            :is="'el-' + item.type" 
                            :placeholder='item.label'  
                            v-model="form[item.name]" 
                            :type='item.componentType' 
                            :value-format='item.valueFormat'
                            :clearable='item.clearable'
                            >
                            <template v-if="item.type === 'select'">
                                <el-option  v-for="(jtem, index) in item.option" :key="index" :label="jtem.label" :value="jtem.value"></el-option>
                            </template>
                        </component>
                    </el-form-item>
                </el-col>
                <el-col :span="8" v-if="items.length < 3">
                    <slot name="buttons">
                        <el-button size="small">重置</el-button>
                        <el-button size="small" type="primary">提交</el-button>
                    </slot>
                </el-col>
            </el-row>
            <el-row type="flex" justify="end" v-if="items.length > 3">
                <el-button v-if="items.length > 6" type="text" size="small" @click="handleFilterExtend()">{{ filterExtendText }}<i :class="[filterExtend ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i></el-button>
                <slot name="buttons">
                    
                    <el-button size="small">重置</el-button>
                    <el-button size="small" type="primary" @click="handleSubmit()">提交</el-button>
                </slot>
            </el-row>
        </el-form>
    </el-card>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import Item from './item.vue';
    @Component({
        name: "ProForm",
        components: {
            Item
        }
    })
    export default class extends Vue {
        @Prop({
           type: Array,
           required: true,
           default: []
        })
        private items !: Array<any>;
        private form: Object = {
        }

        private filterExtendText = '展开';
        private filterExtend = false;
        private selectStyle = 'abc'

        mounted () {
            console.log(this.$slots)
        }

        handleSubmit() {
            console.log(this.form)
            this.$emit('finish', this.form)
        }



        private handleFilterExtend() {
            console.log( !this.filterExtend, this.items.length)
            this.filterExtend = !this.filterExtend
            this.filterExtendText = this.filterExtend ? '收起' : '展开'
        }
    }
</script>

<style scoped>
    ::v-deep .mod-card-body-height {
        height: 112px !important;
        overflow: hidden !important;
    }

</style>