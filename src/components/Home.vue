<template>
    <div class="home_cont">
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <MenuBar />
                </el-aside>
                <el-main>
                    <listCont />
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    const Header = () => import('../views/Header.vue')
    const MenuBar = () => import('../views/MenuBar.vue')
    const listCont = () => import('../views/ListCont.vue')

    export default {
        name: 'Home',
        components: {
            Header,
            MenuBar,
            listCont
        }
    }
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
</style>