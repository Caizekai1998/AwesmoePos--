<template>
    <div class="pos">
        <el-row>
            <el-col :span='7' class="pos-order test-1" id="order-list">
                <el-tabs type="card">
                    <el-tab-pane label="点餐">
                        <el-table :data="tableData" border style="width:100%">
                            <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                            <el-table-column prop="count" label="数量" width="50"></el-table-column>
                            <el-table-column prop="price" label="金额" width="70"></el-table-column>
                            <el-table-column  label="操作" fixed="right" width="100">
                                <template scope="scope">
                                    <el-button type="text" size="small" @click="delSingleGoode(scope.row)">删除</el-button>
                                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                </template>
                            </el-table-column>                
                        </el-table>

                        <div class="totalDiv">
                            <small>数量:</small>{{totalCount}} &nbsp;&nbsp;&nbsp; <small>金额:</small> {{totalMoney | numFilter}}元   
                        </div>

                        <div  class="div-btn">
                            <el-button type="warning">挂单</el-button>
                            <el-button type="danger" @click="delAllGoods">删除</el-button>
                            <el-button type="success" @click="checkout">结账</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">
                        
                    </el-tab-pane>
                    <el-tab-pane label="外卖">

                    </el-tab-pane>
                </el-tabs>        
            </el-col>


            <el-col :span="17">
               <div class="often-goods">
                   <div class="title">常用商品</div>
                   <div class="often-list">
                    <ul>
                        <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                            <span>{{goods.goodsName}}</span>
                            <span class="o-price">￥{{goods.price}}</span>
                        </li>
                    </ul>
                   </div>     
               </div>  

                <div class="goods-type">
                    <el-tabs type="" class="el-tabs">
                        <el-tab-pane label="汉堡">
                            <div>
                                <ul class="coolist">
                                    <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                                        <span class="foodImg"><img :src="goods.goodsImg" width="100%"/></span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="小食">
                           <ul class="coolist">
                                    <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                                        <span class="foodImg"><img :src="goods.goodsImg" width="100%"/></span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                            <ul class="coolist">
                                    <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                                        <span class="foodImg"><img :src="goods.goodsImg" width="100%"/></span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                            <ul class="coolist">
                                    <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                                        <span class="foodImg"><img :src="goods.goodsImg" width="100%"/></span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                        </el-tab-pane>
                    </el-tabs>
                </div>

            </el-col>
        </el-row>
    </div>
</template>

<script>
import axios from   'axios';
import { type } from 'os';
export default {
    name:'pos',
    data(){
        return{
            tableData:[
            //     {
            //     goodsName:'可口可乐',
            //     price:8,
            //     count:999
            // },{
            //      goodsName:'香辣鸡腿堡',
            //     price:16,
            //     count:999
            // },{
            //      goodsName:'川香燃辣撸串桶',
            //     price:11,
            //     count:999
            // },{
            //      goodsName:'堡卷翅桶',
            //     price:6,
            //     count:999
            // }
            ],
            oftenGoods:[
                 {
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:10,
              goodsName:'香脆鸡柳',
              price:17
          }
            ],
            type0Goods:[
                {
                    goodsId:11,
                    goodsImg:'https://img.4008823823.com.cn/kfcios/Version/683_780930.jpg',
                    goodsName:'香辣鸡腿堡',
                    price:'18'
                },
                {
                    goodsId:12,
                    goodsImg:'https://img.4008823823.com.cn/kfcios/Version/680_774050.jpg',
                    goodsName:'超级翅桶',
                    price:'6.6'
                },
                {
                    goodsId:13,
                    goodsImg:'https://img.4008823823.com.cn/kfcios/Version/650_706727.jpg',
                    goodsName:'WOW桶随心配',
                    price:'38.9'
                },
                {
                    goodsId:14,
                    goodsImg:'https://img.4008823823.com.cn/kfcios/Version/650_706727.jpg',
                    goodsName:'芝士培根牛排',
                    price:'65'
                },
                {
                    goodsId:15,
                    goodsImg:'https://img.4008823823.com.cn/kfcios/Version/637_673706.jpg',
                    goodsName:'芝士培根牛堡',
                    price:'49.5'
                },
                {
                    goodsId:16,
                    goodsImg:'https://img.4008823823.com.cn/kfcios/Version/637_673706.jpg',
                    goodsName:'芝士培根牛堡',
                    price:'49.5'
                },
                {
                    goodsId:17,
                    goodsImg:'https://img.4008823823.com.cn/kfcios/Version/637_673706.jpg',
                    goodsName:'芝士培根牛堡',
                    price:'49.5'
                },
                {
                    goodsId:18,
                    goodsImg:'https://img.4008823823.com.cn/kfcios/Version/637_673706.jpg',
                    goodsName:'芝士培根牛堡',
                    price:'49.5'
                },
                {
                    goodsId:15,
                    goodsImg:'https://img.4008823823.com.cn/kfcios/Version/637_673706.jpg',
                    goodsName:'芝士培根牛堡',
                    price:'49.5'
                },
                {
                    goodsId:15,
                    goodsImg:'https://img.4008823823.com.cn/kfcios/Version/637_673706.jpg',
                    goodsName:'芝士培根牛堡',
                    price:'49.5'
                },
                {
                    goodsId:15,
                    goodsImg:'https://img.4008823823.com.cn/kfcios/Version/637_673706.jpg',
                    goodsName:'芝士培根牛堡',
                    price:'49.5'
                },
                {
                    goodsId:15,
                    goodsImg:'https://img.4008823823.com.cn/kfcios/Version/637_673706.jpg',
                    goodsName:'芝士培根牛堡',
                    price:'49.5'
                },
                {
                    goodsId:15,
                    goodsImg:'https://img.4008823823.com.cn/kfcios/Version/637_673706.jpg',
                    goodsName:'芝士培根牛堡',
                    price:'49.5'
                },
                {
                    goodsId:15,
                    goodsImg:'https://img.4008823823.com.cn/kfcios/Version/637_673706.jpg',
                    goodsName:'芝士培根牛堡',
                    price:'49.5'
                },
                {
                    goodsId:15,
                    goodsImg:'https://img.4008823823.com.cn/kfcios/Version/637_673706.jpg',
                    goodsName:'芝士培根牛堡',
                    price:'49.5'
                },
                {
                    goodsId:15,
                    goodsImg:'https://img.4008823823.com.cn/kfcios/Version/637_673706.jpg',
                    goodsName:'芝士培根牛堡',
                    price:'49.5'
                },
            ],
             totalMoney:0,
             totalCount:0
        }
    },
    mounted:function(){
        var orderHeiht=document.body.clientHeight;
        document.getElementById('order-list').style.height=orderHeiht+'px';
    },
    methods:{
        //商品是否已经存在于订单列表中
        addOrderList(goods){

            this.totalMoney=0;
            this.totalCount=0;

            let isHave = false;
            for(let i=0;i<this.tableData.length;i++){
                if(this.tableData[i].goodsId==goods.goodsId){
                    isHave = true;
                }
            }
            //根据判断的值写业务逻辑
             if(isHave){
                let arr = this.tableData.filter(o=>o.goodsId == goods.goodsId);
                arr[0].count++;
            }else{
                let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1}
                this.tableData.push(newGoods);
            } 
                this.getAllMoney();
        },     
        //删除单个商品
        delSingleGoode(goods){  
            this.tableData = this.tableData.filter(o=>o.goodsId != goods.goodsId);
            this.getAllMoney();
        },
        //删除所有订单
        delAllGoods(){
            this.tableData=[];
            this.totalMoney=0;
            this.totalCount=0;
        },
        //结账
        checkout(){
            if(this.totalCount!=0){
                this.tableData=[];
                this.totalMoney=0;
                this.totalCount=0;
                this.$message({
                    message:'结账成功，祝您生活愉快！',
                    type:'success'
                })
            }else{
                this.$message.error('购物车为空，无法结账！')
            }
        },
        //汇总数量金额
        getAllMoney(){
            this.totalMoney=0;
            this.totalCount=0;
            if(this.tableData){
                //计算汇总金额和数量
                this.tableData.forEach((element)=>{
                    this.totalCount+=element.count;
                    this.totalMoney=this.totalMoney+(element.price*element.count);
                })
                }
            }
        },
        filters: {
            numFilter (value) {
            // 截取当前数据到小数点后两位
                let realVal = parseFloat(value).toFixed(2)
                return realVal
  }
}
    }
</script>

<style scoped>
.pos-order{
    background-color: #f9fafc;
    border-right: 1px solid #c0ccba;
    height: 100%;
    overflow-y: auto;
}
.test-1::-webkit-scrollbar{
    width: 10px;
    height: 1px;
}
.test-1::-webkit-scrollbar-thumb {
        border-radius: 10px;
         -webkit-box-shadow: inset 0 0 5px rgba(124, 117, 117, 0.1);
        background: #e2edf3;
    }
.div-btn{
    margin: 10px
}
.title{
    height: 20px;
    border-bottom: 1px solid #d3dce6;
    background-color: #f9fafc;
    padding: 10px;
    text-align: left;
}
.often-list ul li{
    list-style: none;
    float: left;
    border: 1px solid #e5e9f2;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
    cursor: pointer;
}
.o-price{
    color: #58b7ff;
}
.goods-type{
    clear: both;
}
.coolist li{
    list-style: none;
    width: 23%;
    border: 1px solid #e5e9f2;
    height: auto;
    overflow: hidden;
    background-color: #ffffff;
    padding: 2px;
    float: left;
    margin: 2px;
    cursor: pointer;
}
.coolist li span{
    display: block;
    float: left;
}
.foodImg{
    width: 40%;
}
.foodName{
    font-size: 16px;
    padding-left: 10px;
    color: brown;
    white-space: nowrap;
}
.foodPrice{
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
    color: #58b7ff;
}
.totalDiv{
    background-color: #ffffff;
    padding: 10px;
    border-bottom: 1px solid #e5e9f2;
}
.el-tabs{
    padding: 10px;
}
</style>