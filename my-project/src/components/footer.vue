<template>
    <div class="footer fixed">
        <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/Manage">设置</router-link></li>
            <li><router-link to="/totalPrice">统计总价</router-link></li>
        </ul>
    </div>
</template>
<style scoped>
    /* 在<style>标签上添加scoped，声明作用域，样式效果只在该页面内生效，不污染全局。 */
    .footer{
        width:100%;
        height:50px;
    }
    ul{
        display: flex;
        width:100%;
        height:100%;
        line-height: 50px;
    }
    ul li{
        flex-direction: row;
        width:50%;
        border:1px solid #fff;
        background:#dedede;
    }
    .isIndex li:first-child{background-color:#d3d3d3;}
    .isIndex li:first-child a{color:#41b883;}
    .isManage li:last-child{background-color:#d3d3d3;}
	.isManage li:last-child a{color:#41b883;}
    .isPrice li:last-child{background-color:#d3d3d3;}
	.isPrice li:last-child a{color:#41b883;}

</style>


