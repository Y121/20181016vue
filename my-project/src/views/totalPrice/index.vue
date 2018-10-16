<template>
    <div>
        <header-nav></header-nav>
        <footer-nav v-bind:class="{'isPrice':isThisPage}"></footer-nav>
    </div>
</template>
<script>
    import FooterNav from '../../components/header'
    import HeaderNav from '../../components/footer'
    export default{
        components:{
            HeaderNav,
            FooterNav
        },
        data(){
            return{
                isThisPage:true
            }
        }
    }
</script>
