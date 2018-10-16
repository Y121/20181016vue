<template>
    <div>
        <header-nav></header-nav>
        欢迎来到首页
        <footer-nav v-bind:class="{'isIndex':isNowPage}"></footer-nav>
    </div>
</template>
<script>
    import HeaderNav from "../../components/header"
    import FooterNav from "../../components/footer"
    export default{
        components:{
            HeaderNav,
            FooterNav
        },
        data(){
            return{
                isNowPage: true
            }
        }
    }
</script>