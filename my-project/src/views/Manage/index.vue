<template>
    <div class="manage tc">
        <header-nav></header-nav>
        <button class="add" @click="add">新增</button>
        <div class="input-area" v-if="showAdd">
            <input type="text" placeholder="请输入人员姓名" v-model="inputData">
            <button id="confirm" @click="comfirmEvent">确定</button>
        </div>
        <table>
            <tr>
                <th>姓名</th>
                <th>操作</th>
            </tr>
            <tr v-for = "(item,index) in pepleData">
                <td>{{item.name}}</td>
                <td :id="index"><span @click="modify">编辑</span><span @click = "deleteData(item)">删除</span></td>
            </tr>
        </table>
        <div class="wrap" v-show="showEdit">
            <div class="content">
                <input placeholder="请输入编辑内容" v-model="editData" @keyup.enter="confrimEdit"/>
                <button @click = 'concel'>取消</button>
                <button @click = "confrimEdit">确定</button>
            </div>
        </div>
        <footer-nav  v-bind:class="{'isManage':isNowPage}"></footer-nav>
    </div>
</template>
<script>
    import HeaderNav from '../../components/header'
    import FooterNav from '../../components/footer'
    export default{
        components:{
            HeaderNav,
            FooterNav
        },
        data(){
            return {
                isNowPage: true,
                pepleData:[
                    {"name":"joe"},
                    {"name":"alisa"}
                ],
                showAdd:false,
                inputData:"",
                showEdit:false,
                editData:'',
                editId:0
            }
        },
        methods:{
            add(){
                this.showAdd = true;
            },
            comfirmEvent(){
                var v = this.inputData;
                if(v.trim()==""){
                    alert("请先输入数据");
                }else{
                    var json = {
                        "name":v
                    };
                    this.pepleData.push(json);
                    this.inputData = '';
                }
            },
            modify(e){
                this.showEdit = true;
                var index = e.target.offsetParent.id;
                this.editId = index;
            },
            deleteData(item){
                var index = this.pepleData.indexOf(item);
                // var index = e.target.offsetParent.id;
                 this.pepleData.splice(index,1);
            },
            concel(){
                this.showEdit = false;
                this.editData = '';
            },
            confrimEdit(){
                if(this.editData.trim()==''){
                    alert("请输入要修改的数据");
                }else{
                    this.pepleData[this.editId].name = this.editData;
                    this.editData = '';
                    this.showEdit = false;
                }
            }
        }
    }
</script>
<style scoped>
    .add{
        width:50%;
        margin:0 auto;
        border:1px solid #000;
        border-radius: 5px;
    }
    button{
        background:green;
        color:#fff;
    }
    table{
        width:80%;
        margin:0 auto;
    }
    .confirm{
        border:1px solid #000;
        border-radius: 5px;
    }
    .wrap{
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,.7);
        z-index:100000;
    }
    .content{
        width:300px;
        height:300px;
        position:fixed;
        left:50%;
        top:50%;
        margin-left:-150px;
        margin-top:-150px;
    }
    button{
        display:inline-block;
        outline:none;
    }
    input{
        width:200px;
        height:30px;
        font:12px/30px "微软雅黑";
        color:#000;
        border:1px solid #dede;
        border-radius: 5px;
        outline:none;
        margin-top:10px;
    }
</style>
