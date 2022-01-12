<template>
<div class="box" id="app">
    <div class="bg_img_sty">
      <div class="time_left_pos"><span class="mr15">{{cityName}}</span><span class="mr10">{{weather}}</span ><span class="fz22 text_num_family">{{airTemperature}}</span><span class="ml10">℃</span><span class="ml20 fz22 text_num_family">{{nowTime}}</span></div>
      <div class="running_days_pos">平台运行<span class="ml5 mr5 fz26 text_num_family">{{runningDays}}</span>天</div>

      <div class="pl30 pr30" style="margin-top: 71px;">
        
        <div class="cf">

          <!-- 左侧 -->
          <div class="mr30 fl w428">

            <!-- 企业融资需求 -->
            <div class="">
              <div class="title_box_sty">企业融资需求</div>
              <div class="mt15 mb10 cf fz15 cor_04a tac">
                <div class="fr w120">资金用途</div>
                <div class="fr w120">资金需求(万元)</div>
                <div class="ov">企业名称</div>
              </div>
              <div class="list_box_1">
                <ul id="con1"  :class="{anim:animate==true}">
                  <li class="cf tac" v-for='(item,index) in items' :key="index">
                    <div class="fr w120 cor_f">{{item.loan}}</div>
                    <div class="fr w120 cor_f">{{item.demand}}</div>
                    <div class="ov"><p class="pl10 tal ell cor_04a">{{item.enterprise_name}}</p></div>
                  </li>
                </ul>
              </div>
            </div><!-- 企业融资需求 -->

            <!-- 小模块 -->
            <div class="mt30">
              <ul class="df fw fldr jcsb">
                <li class="menu_data_1">
                  <div class=""><span class="fz24 text_num_family">{{initdata1.zcqy}}</span>家</div>
                  <div class="mt5">注册企业</div>
                </li>
                <li class="menu_data_2">
                  <div class=""><span class="fz24 text_num_family">{{initdata1.sqrzqy}}</span>家</div>
                  <div class="mt5">申请融资企业</div>
                </li>
                <li class="menu_data_3">
                  <div class=""><span class="fz24 text_num_family">{{initdata1.hzjg}}</span>家</div>
                  <div class="mt5">合作机构</div>
                </li>
                <li class="menu_data_4">
                  <div class=""><span class="fz24 text_num_family">{{initdata1.fbproductnumber}}</span>个</div>
                  <div class="mt5">发布产品</div>
                </li>
                <li class="menu_data_5">
                  <div class=""><span class="fz24 text_num_family">{{initdata1.rzmoney}}</span>亿</div>
                  <div class="mt5">融资金额</div>
                </li>
                <li class="menu_data_6">
                  <div class=""><span class="fz24 text_num_family">{{initdata1.xuqiumoney}}</span>亿</div>
                  <div class="mt5">融资需求</div>
                </li>
              </ul>
            </div><!-- 小模块 -->

            <!-- 银行信贷产品 -->
            <div class="pt10">
              <div class="title_box_sty">银行信贷产品</div>
              <ul class="pt20 pb20 flex_box aic jcc tac fz13 cor_04a">
                <li class="w80 mr10">银行名称</li>
                <li class="item">贷款产品</li>
                <li class="item">援信金额</li>
                <li class="item">贷款对象</li>
                <li class="item">利率</li>
                <li class="item">期限</li>
              </ul>
              <div class="cf">
                <div class="mr10 fl w80">
                  <ul class="tab_catalogue_item">
                    <div style="overflow-y: scroll; height: 310px;">
                       <li :class="dataIndex == index ? 'active' : '' " :data-num="index" @click="tabClick($event)" v-for="(item,index) in getproductlist1" :key="index">
                        <span>{{item.name}}</span>
                      </li>
                    </div>
                   
                  </ul>
                </div>
                <div class="ov">
                  <div class="area_block_1">
                    <!-- 工商银行 -->
                    <ul class="scroll_h" :class="dataIndex==index ? 'db' : 'dn' " v-for="(item,index) in getproductlist1" :key="index">
                      <li class="flex_box aic jcc h64 bb1 fz12 cor_f tac" v-for="(item1,index1) in item.product" :key="index1">
                        <div class="item">{{item1.name}}</div>
                        <div class="item">
                          <div class="">{{item1.price}}</div>
                          <div class="mt10">万元</div>
                        </div>
                        <div class="item">{{item1.object}}</div>
                        <div class="item">
                          <div class="">{{item1.rate}}%</div>
                          <!-- <div class="mt10">4.45%</div> -->
                        </div>
                        <div class="item">{{item1.term}}</div>
                      </li>
                    </ul><!-- 工商银行 -->
                  </div>
                </div>
              </div>
            </div><!-- 银行信贷产品 -->

          </div><!-- 左侧 -->

          <!-- 右侧 -->
          <div class="ml30 fr w428">
            <!-- 政府助贷平台 -->
            <div>
              <div class="title_box_sty">政府助贷平台</div>
              <div class="area_block_4">
                <div class="cf" :class="{anim_2:animateTwo==true}" style="width: 9999px;">
                  <ul class="fl w428" v-for='(item,index) in itemsTwo' :key="index">
                    <li v-for="(item1,index1) in item" :key="index1">
                      <p class="pt10 pb10 fz18 tac cor_04a">{{item1.name}}</p>
                      <div class="box_item flex_box aic jcc tac" @click="showClick(item1.id)">
                        <div class="item1">
                          <p class="fz12 cor_f4b"><span class="fz20 text_num_family">{{item1.price}}</span>/万</p>
                          <p class="mt20 fz12 cor_f">贷款金额</p>
                        </div>
                        <div class="item1">
                          <p class="fz12 cor_f4b"><span class="fz20 text_num_family">{{item1.year_added}}</span>/万</p>
                          <p class="mt20 fz12 cor_f">较年初新增</p>
                        </div>
                        <div class="item1">
                          <p class="fz12 cor_f4b"><span class="fz20 text_num_family">{{item1.Increase}}</span>%</p>
                          <p class="mt20 fz12 cor_f">增幅</p>
                        </div>
                        <div class="item1">
                          <p class="fz12 cor_f4b"><span class="fz20 text_num_family">{{item1.loan_count}}</span>/笔</p>
                          <p class="mt20 fz12 cor_f">助贷笔数</p>
                        </div>
                        <div class="item1">
                          <p class="fz12 cor_f4b"><span class="fz20 text_num_family">{{item1.help_count}}</span>/户</p>
                          <p class="mt20 fz12 cor_f">帮扶户数</p>
                        </div>

                        <!-- 弹窗 -->
                        <div class="popup_box_pos" v-if="indexShow == item1.id&&indexShow!=undefined">
                          <p class="fz16 tac">{{item1.name}}办事指南<img src="@/assets/images/close.png" alt="" @click.stop="showClick(undefined)"></p>
                          <p class="mt5 lh24 tal"><span class="pl30 fz14 fwb">政策名称：</span>{{item1.policy_name}}</p>
                          <p class=" lh24 tal"><span class="pl30 fz14 fwb">惠及对象：</span>{{item1.policy_object}}</p>
                          <p class="lh24 clamp_5 tal"><span class="pl30 fz14 fwb">优惠待遇：</span>{{item1.daiyu}}</p>
                        </div><!-- 弹窗 -->

                      </div>
                    </li>
                  </ul>
                </div>
                <!-- 索引点 -->
                <div class="mt15 tac">
                  <span class="dot_sty" v-for="(item,index) in itemsTwo.length" :key="index" :class='currentIndex == index ? "active" : ""'></span>
                </div>
              </div>
            </div><!-- 政府助贷平台 -->

            <!-- 成交信息 -->
            <div>
              <div class="title_box_sty">成交信息</div>
              <div class="mt10 cf" style="margin-top: 12px;">
                <div class="fl wp50">
                  <p class="fz16 fwb tac cor_04a">线上合作信息</p>
                  <div class="re">
                    <div id="chart_1"></div>
                    <p class="chart_title_1">成交笔数</p>
                  </div>
                </div>
                <div class="fl wp50">
                  <p class="fz16 fwb tac cor_04a">线下审批信息</p>
                  <div class="re">
                    <div id="chart_2"></div>
                    <p class="chart_title_1">成交笔数</p>
                  </div>
                </div>
              </div>
              <div class="cf">
                <div class="fl box_sty_6">
                  <div class="cf tac">
                    <div class="wp33 fl">
                      <div class=""><span class="fz20 text_num_family">{{xianshangtongji.today}}</span>/笔</div>
                      <div class="mt5">今日成交</div>
                    </div>
                    <div class="wp33 fl">
                      <div class=""><span class="fz20 text_num_family">{{xianshangtongji.monday}}</span>/笔</div>
                      <div class="mt5">本月成交</div>
                    </div>
                    <div class="wp33 fl">
                      <div class=""><span class="fz20 text_num_family">{{xianshangtongji.all}}</span>/笔</div>
                      <div class="mt5">累计成交</div>
                    </div>
                  </div>
                </div>
                <div class="fr box_sty_6" style="margin-right: -10px;">
                  
                  <div class="cf tac">
                    <div class="wp33 fl">
                      <div class=""><span class="fz20 text_num_family">{{xianxiatongji.today}}</span>/笔</div>
                      <div class="mt5">今日成交</div>
                    </div>
                    <div class="wp33 fl">
                      <div class=""><span class="fz20 text_num_family">{{xianxiatongji.monday}}</span>/笔</div>
                      <div class="mt5">本月成交</div>
                    </div>
                    <div class="wp33 fl">
                      <div class=""><span class="fz20 text_num_family">{{xianxiatongji.all}}</span>/笔</div>
                      <div class="mt5">累计成交</div>
                    </div>
                  </div>
                </div>
              </div>
            </div><!-- 成交信息 -->

          </div><!-- 右侧 -->

          <!-- 中间 -->
         <div class="shadow">
           <div class="shadow1"></div>
            <div class="dit" id="container">
            <!-- 地图 -->
            <!-- <div class="area_block_2">
              <div class="coordinate_sty_pos" style="top: 400px;left: 500px;"> -->
                <!-- 1 -->
                <!-- <div class="tips_box_1 df aic jcc fldc" style="top: 0;left: -246px;">
                  <p class="fz14 tac cor_04a">各项存款余额</p>
                  <div class="mt10 fz14 cor_f4b">余额 <span>7022971</span>万 | 新增 <span>5400966</span>万</div>
                  <p class="mt20 fz14 tac cor_04a">各项贷款余额</p>
                  <div class="mt10 fz14 cor_f4b">余额 <span>592558</span>万 | 新增 <span>699364</span>万</div>
                </div> -->
                <!-- 1 -->
                <!-- <img src="images/icon_01.png" class="img2" alt="" /> -->
              <!-- </div> -->
              
              <!-- <div class="coordinate_sty_pos" style="top: 358px;left: 580px;"> -->
                <!-- 2 -->
                <!-- <div class="tips_box_2 df jcc fldc">
                  <div>
                    <p class="fz18">建设银行</p>
                    <p class="mt10">位置:高安市瑞州中路130号</p>
                    <p class="mt10">电话:18807950520</p>
                  </div>
                  <div class="mt20">
                    <p class="fz18">建设银行（高安瑞州支行）</p>
                    <p class="mt10">位置:高安市筠泉路89号</p>
                    <p class="mt10">电话:15207957310</p>
                  </div>
                </div> -->
                <!-- 2 -->
                <!-- <img src="images/icon_02.png" class="img2" alt="" />
              </div>
               -->
              <!-- <img src="images/icon_map_bg.png" class="wp100" alt="" /> -->
            </div>
         </div>
            <!-- 地图 -->
            <!-- 银行存贷款数据 -->
            <div class="mt30 area_block_3">
              <p class="fz15 lh26 fwb cor_037 clamp_2">{{getdeal1.huizong}}</p>
              <div class="cf">
                <div class="fl title_left_fz df fldc jcsa">
                  <p>银</p>
                  <p>行</p>
                  <p>存</p>
                  <p>贷</p>
                  <p>款</p>
                  <p>数</p>
                  <p>据</p>
                </div>
                <div class="ov">
                  <div class="">
                    <ul class="pt20 pb20 cf fz15 cor_04a tac">
                      <li class="fl w106">银行名称</li>
                      <li class="fl w122">各项存款余额</li>
                      <li class="fl w110">较年初净增</li>
                      <li class="fl w70">增幅</li>
                      <li class="fl w70">占比</li>
                      <li class="fl w130">各项贷款余额</li>
                      <li class="fl w110">较年初净增</li>
                      <li class="fl w70">增幅</li>
                      <li class="ov">占比</li>
                    </ul>
                  </div>
                  <div class="list_box_2">
                    <ul id="con2" :class="{anim_3:animateThree==true}" class="fz15 cor_f">
                      <li class="cf tac" v-for='(item,index) in itemsThree' :key="index">
                        <div class="fl w106"><img :src="'http://rz.cendo.cn'+item.mechanism_image" class="img1 vm" alt="" /><span class="ml5">{{item.name}}</span></div>
                        <div class="fl w122">{{item.deposit}}</div>
                        <div class="fl w110">{{item.deposit_year_increase}}</div>
                        <div class="fl w70">{{item.deposit_clean_increase}}</div>
                        <div class="fl w70">{{item.deposit_roportion}}</div>
                        <div class="fl w130">{{item.loan_balance}}</div>
                        <div class="fl w110">{{item.loan_year_increase}}</div>
                        <div class="fl w70">{{item.loan_clean_increase}}</div>
                        <div class="ov">{{item.loan_roportion}}</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div><!-- 银行存贷款数据 -->
          </div><!-- 中间 -->

        </div>

      </div>

    </div><!-- bg_img_sty -->
</template>
<script>
import AMap from "AMap"
export default {
  name: 'box',
  data () {
    return {
      indexItem: true,
      indexShow: '', //企业助贷平台弹窗显隐
      initdata1: [], //获取基本配置
      getdeal1: {}, //获取成交信息和大屏中间字的汇总信息
      xianshangtongji: {},
      xianshangName: [],
      xianshangvalue: [],
      xianxiaName: [],
      xianxiavalue: [],
      xianxiatongji: {},
       nowTime:'', //年月日显示
      cityName: '高安', //城市名
      weather: '晴', //天气
      airTemperature: '28-32',
      runningDays: '', //平台运行天数
      dataIndex: 0, //银行信贷产品tab切换
      animate:false,
      animateTwo: false,
      animateThree: false,
      currentIndex: 0, //用作索引圆点切换
      getproductlist1: [], //机构产品
      items:[],
      itemsTwo:[],
      itemsThree:[],
      lnglats: [
        // [115.369863, 28.420129]
        // [108.909074, 34.254225],
        // [108.910766, 34.254348],
        // [108.910495, 34.253531],
        // [108.909502, 34.253571],
      ],
      markerArr: []
    }
  },
  created(){
      // setInterval(this.scroll,1000);
    },
    mounted() {
      this.aniPlay();
      this.aniPlayTwo();
      this.aniPlayThree();
      this.nowTimes();
      
      this.getmapdata()
      this.financeGovern() //获取政府助贷平台
      this.demand()  //企业融资需求
      this.initdata()  //获取基本配置
      this.loandata() //获取银行机构贷款数据
      this.getdeal() //获取成交信息和大屏中间字的汇总信息
      this.getproductlist() //机构产品
      this.getweather() // 天气
      
    },
    methods: {
      showClick (index) { //企业助贷平台弹窗显隐
      this.indexShow = index
      // let that = this
      // let items = null
      // if (this.indexItem) {
      //   that.indexItem = false
      //   items = setTimeout(function(){
      //     that.indexShow = ''
      //     that.indexItem = true
      //   },5000)
      // } else {
      //   clearTimeout(items)
      //    that.indexItem = true
      // }
      // clearTimeout(items)
      // items = setTimeout(function(){
      //   that.indexShow = ''
      //   that.indexItem = false
      // },5000)
      },
      getweather() {
      this.$axios({
        // 天气
        method: "get",
        url: "/api/ysscreen/getweather",
      }).then((res) => {
        let { data } = res.data;
        this.weather = data.condition.condition;
        this.airTemperature = data.condition.temp;
      });
    },
      financeGovern() {
        this.$axios({  //获取政府助贷平台
          method: 'get',
          url: '/api/screen/financeGovern'
        }).then(res=>{
          let { data } = res.data
          let arrLength = data.length; // 数组长度
          let num = 4;  // 每页显示 10 条
          let index = 0;
          for (let i = 0; i < arrLength; i++) {
                if (i % num === 0 && i !== 0) { // 可以被 10 整除
                    this.itemsTwo.push(data.slice(index, i));
                    index = i;
                };
                if ((i + 1) === arrLength) {
                      this.itemsTwo.push(data.slice(index, (i + 1)));
                }
          };
        })
      },
       demand() {
        this.$axios({  //企业融资需求
          method: 'get',
          url: '/api/screen/demand'
        }).then(res=>{
          let { data } = res.data
          this.items = data
        })
      },
      initdata() {
        this.$axios({  //获取基本配置
          method: 'get',
          url: '/api/screen/initdata'
        }).then(res=>{
          let { data } = res.data
          this.initdata1 = data
          this.runningDays = data.run_days
        })
      },
      loandata() {
        this.$axios({  //获取银行机构贷款数据
          method: 'get',
          url: '/api/screen/loandata'
        }).then(res=>{
          let { data } = res.data
          this.itemsThree = data
        })
      },
      getdeal() {
        this.$axios({  //获取成交信息和大屏中间字的汇总信息
          method: 'get',
          url: '/api/screen/getdeal'
        }).then(res=>{
          let { data } = res.data
          this.getdeal1 = data
          this.xianshangtongji = data.xianshangtongji
          this.xianxiatongji = data.xianxiatongji
          this.ChartOne();
          this.ChartTwo();
        })
      },
      getproductlist() {
        this.$axios({  //机构产品
          method: 'get',
          url: '/api/screen/getproductlist'
        }).then(res=>{
          let { data } = res.data
          this.getproductlist1 = data
        })
      },
      getmapdata () {
          this.$axios({  //金融地图数据
            method: 'get',
            url: '/api/screen/getmapdata'
          }).then(res=>{
            let { data } = res.data
            data.map(item => {
              let arr = [Number(item.lng),Number(item.lat)]
              this.lnglats.push(arr)
              this.markerArr.push(item)
            })
          })
          let that = this
          setTimeout(function(){
            that.establish()
          },1000)
          
      },
      establish () {
       
        // console.log(this.lnglats)
        // AMap.moveCamera(CameraUpdateFactory.zoomTo(1))
         var map = new AMap.Map("container", {
           resizeEnable: true,
            // zoom: 20, //设置地图显示的缩放级别
           center: [115.3842627,28.4304492], 
          //  center: [115.369863, 28.420129], [115.173227,28.37237]
           mapStyle: "amap://styles/d9b7b5ab46ba4ddc961ea246f207f6ac",
          //  zooms: [2,20], //设置地图显示的缩放级别
           });//初始化地图
      //信息窗口实例
      
      var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
      //遍历生成多个标记点
       for (var i = 0; i < this.lnglats.length; i++) {
        var marker = new AMap.Marker({
          position: this.lnglats[i],//不同标记点的经纬度
          icon:'http://rz.cendo.cn/'+this.markerArr[i].mechanism_image,
          map: map
        });
         var marker1 = new AMap.Marker({
          position: this.lnglats[60],//不同标记点的经纬度
          icon:'http://rz.cendo.cn/'+this.markerArr[60].mechanism_image,
          map: map
        });
         // <div>
                  //   <p class="fz18">${this.markerArr[i].name}</p>
                  //   <p class="mt10">位置:${this.markerArr[i].address}</p>
                  //   <p class="mt10">电话:${this.markerArr[i].phone}</p>
                  // </div>
        marker.content =  `<div>
            <div>
                <div class="tips_box_2 df jcc fldc">
                  <div class="mt20">
                    <p class="mt10">银行名称：${this.markerArr[i].name}</p>
                    <p class="mt10 mt11">网点名称：${this.markerArr[i].branches}</p>
                    <p class="mt10 mt11">位置：${this.markerArr[i].address}</p>
                    <p class="mt10 mt11">联系人：${this.markerArr[i].head_name}</p>
                    <p class="mt10 mt11">电话：${this.markerArr[i].phone}</p>
                  </div>
                </div>
              </div>
            </div>`;
        marker1.content = `<div>
            <div>
                <div class="tips_box_2 df jcc fldc">
                  <div class="mt20">
                    <p class="mt10">银行名称：${this.markerArr[60].name}</p>
                    <p class="mt10 mt11">网点名称：${this.markerArr[60].branches}</p>
                    <p class="mt10 mt11">位置：${this.markerArr[60].address}</p>
                    <p class="mt10 mt11">联系人：${this.markerArr[60].head_name}</p>
                    <p class="mt10 mt11">电话：${this.markerArr[60].phone}</p>
                  </div>
                </div>
              </div>
            </div>`;
        marker.on('click', markerClick);
        // console.log(markerClick)
        // console.log(marker)
        marker.emit('click', {target: marker1});//默认初始化不出现信息窗体,打开初始化就出现信息窗体

      }
      function markerClick(e) {
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
      }
      // map.add(markers)
     
      map.setFitView();
      map.setCenter([115.3842627,28.4304492]); 
      map.setZoom(16)
      
     
      },
      // establish(){
      //   var map = new AMap.Map("container", {
      //       zoom: 16, //设置地图显示的缩放级别
      //       center: [115.369863, 28.420129], //设置地图中心点坐标
      //       mapStyle: "amap://styles/d9b7b5ab46ba4ddc961ea246f207f6ac"
      //    });
      //    // 创建一个 Marker 实例：（标记点）
      //    var infoWindow = new AMap.InfoWindow({
      //       isCustom: true,  //使用自定义窗体
      //       content: '',  //传入 dom 对象，或者 html 字符串
      //       offset: new AMap.Pixel(280, 200), //相对基点的偏移量
      //       content:  `<div class="area_block_2">
      //         <div class="coordinate_sty_pos" style="top: 330px;left: 430px;">
      //           <div class="tips_box_1 df aic jcc fldc" >
      //             <p class="fz14 tac cor_04a">各项存款余额</p>
      //             <div class="mt10 fz14 cor_f4b">余额 <span>7022971</span>万 | 新增 <span>5400966</span>万</div>
      //             <p class="mt20 fz14 tac cor_04a">各项贷款余额</p>
      //             <div class="mt10 fz14 cor_f4b">余额 <span>592558</span>万 | 新增 <span>699364</span>万</div>
      //           </div>
      //         </div>`
      //     });
      //     // infoWindow.open(map, new AMap.LngLat(115.369863, 28.420129));
      //     var infoWindow1 = new AMap.InfoWindow({
      //       isCustom: true,  //使用自定义窗体
      //       content: '',  //传入 dom 对象，或者 html 字符串
      //       offset: new AMap.Pixel(130, 200), //相对基点的偏移量
            // content: `<div class="area_block_2">
            // <div class="coordinate_sty_pos" style="top: 340px;left: 810px;">
            //     <div class="tips_box_2 df jcc fldc">
            //       <div>
            //         <p class="fz18">建设银行</p>
            //         <p class="mt10">位置:高安市瑞州中路130号</p>
            //         <p class="mt10">电话:18807950520</p>
            //       </div>
            //       <div class="mt20">
            //         <p class="fz18">建设银行（高安瑞州支行）</p>
            //         <p class="mt10">位置:高安市筠泉路89号</p>
            //         <p class="mt10">电话:15207957310</p>
            //       </div>
            //     </div>
            //   </div>
            // </div>`
      //     });
      //     function showInfoOver(){
      //         infoWindow.open(map, new AMap.LngLat(115.369863, 28.420129));
      //     }
      //     function showInfoOut(){
      //         infoWindow.close();
      //     }
      //     function showInfoOver1(){
      //         infoWindow1.open(map, new AMap.LngLat(115.3756,28.42443));
      //     }
      //     function showInfoOut1(){
      //         infoWindow1.close();
      //     }
      //   let markerArr = [
      //     {
      //       index: 1,
      //       icon:require('@/assets/images/icon_02.png'),
      //       position:new AMap.LngLat(115.369863, 28.420129),
      //       title: "高安市政府"
      //     },
      //     {
      //       index: 2,
      //       icon:require('@/assets/images/icon_01.png'),
      //       position:new AMap.LngLat(115.3756,28.42443),
      //       title: "建设银行"
      //     }
      //   ]
      //   markerArr.map(item=>{
      //     var marker = new AMap.Marker({
      //     icon: item.icon,
      //     position: item.position, // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      //     title: item.title,
          
      //   });
      //   if (item.index == 1) {
      //     marker.on('mouseover', showInfoOver);
      //     marker.on('mouseout', showInfoOut);
      //   }
      //   if (item.index == 2) {
      //     marker.on('mouseover', showInfoOver1);
      //     marker.on('mouseout', showInfoOut1);
      //   }
      //   map.add(marker);
      //   })
        
       
      // },
      nowTimes(){
        this.timeFormate(new Date());
        setInterval(this.nowTimes,1000);
         this.clear();
      },
      //显示当前时间（年月日时分秒）
      timeFormate(timeStamp) {
        let year = new Date(timeStamp).getFullYear();
        let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
        let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
        let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
        let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
        let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
        let week = new Date(timeStamp).getDay();
        let weeks = ["日","一","二","三","四","五","六"];
        let getWeek = "星期" + weeks[week];
        // this.nowTime = year + "年" + month + "月" + date +"日"+" "+hh+":"+mm+':'+ss+getWeek  ;
        this.nowTime = year + "-" + month + "-" + date +" "+" "+hh+":"+mm+":"+ss;
      },

      clear(){
        clearInterval(this.nowTimes)
        this.nowTimes = null;
      },

      scroll:function() {
        this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(()=>{
          this.items.push(this.items[0]); // 将数组的第一个元素添加到数组的
          this.items.shift();  //删除数组的第一个元素
          this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        },500)
      },

      scrollTwo:function() {
        this.animateTwo=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(()=>{
          this.itemsTwo.push(this.itemsTwo[0]); // 将数组的第一个元素添加到数组的
          this.itemsTwo.shift();  //删除数组的第一个元素
          this.animateTwo=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        },500)
      },

      scrollThree:function() {
        this.animateThree=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(()=>{
          this.itemsThree.push(this.itemsThree[0]); // 将数组的第一个元素添加到数组的
          this.itemsThree.shift();  //删除数组的第一个元素
          this.animateThree=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        },500)
      },

      aniPlay() {
        setInterval(this.scroll,3000);
      },

      aniPlayTwo() {
        setInterval(()=>{
          this.scrollTwo();
          this.dotSwiper();
        },8000);
      },

      aniPlayThree() {
        setInterval(this.scrollThree,3000);
      },

      ChartOne: function() {
        this.getdeal1.xianshang.map(item=>{
          let obj = {color:'',y:0}
          obj.color = b(item)
          obj.y = Number(item.value)
          this.xianshangName.push(item.name)
          this.xianshangvalue.push(obj)
        })
        function b(d){
              return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);
          }
        this.chart = Highcharts.chart('chart_1',{
          chart: {
          backgroundColor: 'transparent'
        },
          title: {
            text: '我在这里',
            style: {
              color: '#fff',
              fontSize:'0px'
            }
          },
          xAxis: {
            lineColor: '#0b244c',
            lineWidth: 1,
            tickLength: 0, //不出现刻度线
            categories: this.xianshangName,
            labels : {
              align: 'center',
              style : {
                'fontSize' : '6px',
                'color': '#fff',
                fontFamily: '微软雅黑'
              },
              formatter: function() { 
                var labelVal = this.value;
                var reallyVal = '';
                var lvl = labelVal.length;
                if(lvl > 1){
                  for(var i=1;i<=lvl;i++){
                    reallyVal += labelVal.substr(i-1,1)+"<br/>";
                  }
                }
                return reallyVal.substring(0,reallyVal.length-5);
              }
            }
          },
          yAxis:[{
            lineColor: '#0b244c',
            lineWidth: 1,
            showEmpty: false, //不出现刻度
            gridLineWidth: 1,
            gridLineColor: '#0b244c',
            min: 0,
            max: 50,
            tickAmount: 6,
            labels : {
              x: -8,
              style : {
                'fontSize' : '10px',
                'color': '#2aa7d3',
                fontFamily: '微软雅黑'
              }
            },
            title: {
              text:''
            }
          }
          ],
          legend: {
            enabled: false
          },
          colors:[
            '#3da9ff'//颜色
          ],
          tooltip: {
            enabled: true,
            backgroundColor: 'rgba(0,0,0,.5)',
            borderColor:'rgba(0,0,0,.5)',
            shadow: 'false',
            borderRadius: 2,
            style: {
              color: '#fff',
              align: 'center',
              fontSize:'12px',
              fontWeight:'normal'
            }
          },

          //数据列
          series: [{
            type:'column',
            name:'链接',
            data: this.xianshangvalue,
            borderColor: 'transparent',
            pointWidth: 6,
            dataLabels: {
              enabled: false,
              // verticalAlign: 'top', // 竖直对齐方式，默认是 center
              overflow: 'none',
              crop:false,
              style : {
                color: '#fff',
                'fontSize' : '12px',
                'fontWeight' : 'none',
                'textOutline': "none", //解决图表中标签数据数字带有阴影的问题
                'fontFamily': '微软雅黑'
              }
            }
          }],
          navigation: {
            buttonOptions: {
              enabled: false
            }
          },
          credits: {
            href: '#',
            text: '智慧环境监测系统',
            enabled: false //不显示版权
          }
        })
      },

      ChartTwo: function() {
        this.getdeal1.xianxia.map(item=>{
          let obj = {color:'',y:0}
          obj.color = b(item)
          obj.y = Number(item.value)
          this.xianxiaName.push(item.name)
          this.xianxiavalue.push(obj)
        })
        function b(d){
              return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);
          }
        this.chart = Highcharts.chart('chart_2',{
          chart: {
          backgroundColor: 'transparent'
        },
          title: {
            text: '我在这里',
            style: {
              color: '#fff',
              fontSize:'0px'
            }
          },
          xAxis: {
            lineColor: '#0b244c',
            lineWidth: 1,
            tickLength: 0, //不出现刻度线
            categories:this.xianxiaName,
            labels : {
              align: 'center',
              style : {
                'fontSize' : '6px',
                'color': '#fff',
                fontFamily: '微软雅黑'
              },
              formatter: function() { 
                var labelVal = this.value;
                var reallyVal = '';
                var lvl = labelVal.length;
                if(lvl > 1){
                  for(var i=1;i<=lvl;i++){
                    reallyVal += labelVal.substr(i-1,1)+"<br/>";
                  }
                }
                return reallyVal.substring(0,reallyVal.length-5);
              }
            }
          },
          yAxis:[{
            lineColor: '#0b244c',
            lineWidth: 1,
            showEmpty: false, //不出现刻度
            gridLineWidth: 1,
            gridLineColor: '#0b244c',
            min: 0,
            max: 50,
            tickAmount: 6,
            labels : {
              x: -8,
              style : {
                'fontSize' : '10px',
                'color': '#2aa7d3',
                fontFamily: '微软雅黑'
              }
            },
            title: {
              text:''
            }
          }
          ],
          legend: {
            enabled: false
          },
          colors:[
            '#3da9ff'//颜色
          ],
          tooltip: {
            enabled: true,
            backgroundColor: 'rgba(0,0,0,.5)',
            borderColor:'rgba(0,0,0,.5)',
            shadow: 'false',
            borderRadius: 2,
            style: {
              color: '#fff',
              align: 'center',
              fontSize:'12px',
              fontWeight:'normal'
            }
          },

          //数据列
          series: [{
            type:'column',
            name:'链接',
            data:this.xianxiavalue,
            borderColor: 'transparent',
            pointWidth: 6,
            dataLabels: {
              enabled: false,
              // verticalAlign: 'top', // 竖直对齐方式，默认是 center
              overflow: 'none',
              crop:false,
              style : {
                color: '#fff',
                'fontSize' : '12px',
                'fontWeight' : 'none',
                'textOutline': "none", //解决图表中标签数据数字带有阴影的问题
                'fontFamily': '微软雅黑'
              }
            }
          }],
          navigation: {
            buttonOptions: {
              enabled: false
            }
          },
          credits: {
            href: '#',
            text: '智慧环境监测系统',
            enabled: false //不显示版权
          }
        })
      },

      tabClick: function(e) {
        // dataIndex
        // console.log(e.currentTarget.dataset.num)
        this.dataIndex = e.currentTarget.dataset.num;
      },

      dotSwiper: function() {
        this.currentIndex+=1;
        if(this.currentIndex > 1) {
          this.currentIndex = 0;
        }
      }
    }
}
</script>
<style lang="less">
.box {
   
}
.popup_box_pos {
  // position: relative;
  .tac {
    //  position: relative;
    img {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 20px;
      height: 20px;
    }
  }
}
.amap-info-content {
  position: initial;
}
.amap-info-contentContainer.bottom-center {
  padding-bottom: 0;
  transform: translate(8px,32px);
}
.amap-info-content {
  // padding: 0;
  background: rgba(255, 250, 250, 0);
}
.amap-info-close {
  color: rgba(255, 250, 250, 0);
}
.bottom-center .amap-info-sharp {
  display: none;
}
a:hover {
   color: rgba(255, 250, 250, 0);
}
</style>
