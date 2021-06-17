<template>
    <button class="ft-button" :class="[`btn-${type}`, {'is-round': round, 'is-circle': circle}]"
        @click='handleClick'
    >
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
    name: "FtButton",
    props: {
        circle: {
            type: Boolean,
            required: false,
            default: false
        }
    }
})
export default class extends Vue {
    @Prop({ default: 'default' }) private type!: String;

    @Prop({ default: false }) private round!: Boolean;

    // @Prop({ default: false }) private circle!: Boolean;
    mounted(){
        console.log(this.circle)
    }

    handleClick (e :any) {
        this.$emit('click', e)
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

    .btn-danger {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
        &:hover,
        &:focus {
            background: #f78989;
            border-color: #f78989;
            color: #fff;
        }
    }

    .ft-button.is-round {
        border-radius: 20px;
        padding: 12px 23px;
    }
    .ft-button.is-circle {
        border-radius: 50%;
        padding: 12px;
    }
</style>