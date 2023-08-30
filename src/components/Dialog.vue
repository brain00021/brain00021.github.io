<template>
    <Teleport to="body">
        <div class="dialog" v-show="openStatus">
            <div class="dialog-wrapper">
                <div class="close" @click="hide">
                <i class="bi bi-x-lg"></i>
                </div>
                <slot></slot> 
            </div>
        </div>
    </Teleport>
</template>
<script >
import { defineComponent } from 'vue';
export default defineComponent({
    name:'dialog',
    components: {
    },
    data() {
        return {
            openStatus:false
        }
    },
    props: {
        openStatus: {
            type: Number,
            default: 100
        }
    },
    methods: {
        show() {
            this.openStatus = true;
        },
        hide(){
            this.openStatus = false;
            this.$emit('close')
        }
    },
    async mounted() {
    }
})
</script>
<style scoped>
</style>
<style lang="scss" scoped>
/* scss import */
.close{
    width:100px;
    color:#fff;
    font-weight:bold;
}
.dialog{
    position:fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    height:100vh;
    top:0;
    left:0;
    z-index: 999;
}
</style>
