<template>
    <button class="ft-button" :class="[`btn-${type}`]">
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
    name: "FtButton",
})
export default class extends Vue {
    @Prop({ default: 'default' }) private type!: String
    mounted(){
        console.log(this.type)
    }
}
</script>

<style lang='scss' scoped>
    .ft-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        &:hover,
        &:focus {
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
        }
    }
</style>