<template>
    <div>
        <el-menu default-active="1-1" class="el-menu-vertical-demo">
            <el-submenu :index="item.index" v-for="(item , index) in listCont" :key="index">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.title}}</span>
                </template>
                <el-menu-item-group v-for="(child , index) in item.children" :key="index">
                    <el-menu-item :index="child.index">{{child.title}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
    data() {
        return {
            listCont:[]
        }
    },
    mounted() {
        this.getMockData()
    },
    methods: {
        getMockData() {
            this.$axios.post("/api/menubar",{
                power:'1'
            }).then(res => {
                this.listCont = res.data.data;
            }).catch(err => {
                alert(err)
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 903px;
    }
</style>