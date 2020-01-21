<template>
  <v-content>
    <Menu />
    <v-container fluid fill-height pa-0 ma-0>
          <v-layout>
              <v-flex xs12 s12 md12 lg12 order-lg1 order-sm1>
                  <v-card tile flat class="work">
                      <v-card-title v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'justify-center work-title sm' : 'justify-center work-title']">
                          Work history
                      </v-card-title>
                      <div v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'bartitle barwork sm' : 'bartitle barwork']" />
                  </v-card>
                  <v-card tile flat class="work">
                  </v-card>
                  <v-card tile flat class="aerospace-card">
                      <v-card-title v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'aerospace-title sm' : 'aerospace-title']">帝京大学 理工学部航空宇宙工学科</v-card-title>
                      <div class="earo-bar" />
                      <v-card-text v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'aerospace-day sm' : 'aerospace-day']">
                        - 2016/03
                      </v-card-text>
                      <v-card-text v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'aerospace-detail sm' : 'aerospace-detail']">
                        研究テーマ：deep stall landingを行う小型無人航空機のHITLシミュレーションに関する研究<br>
                        キーワード：飛行力学・飛行制御・PX4/Arudpilot・XPlane・C++
                      </v-card-text>
                  </v-card>
                  <v-card tile flat class="work detail">
                      <v-card-title v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'aerospace-title sm' : 'aerospace-title']">
                        <a href="https://www.spiber.jp/">Spiber株式会社</a>
                      </v-card-title>
                      <div v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'earo-bar spiber sm' : 'earo-bar spiber']" />
                      <v-card-text v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'aerospace-day spiber sm' : 'aerospace-day spiber']">
                        2016/04 - 2018/06
                      </v-card-text>
                      <v-card-text v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'aerospace-detail spiber sm' : 'aerospace-detail spiber']">
                        新卒で入社。タンパク質繊維の基礎研究・複合材料の研究に携わりました。<br>
                        また、複合材料の研究開発については、研究開発体制の立ち上げから行いました。<br><br>
                        キーワード：タンパク質工学・複合材料工学・流体解析・機械設計
                      </v-card-text>
                      <img v-if="$vuetify.breakpoint.mdAndUp" src="/spider.jpeg" alt="spider" v-bind:class="[$vuetify.breakpoint.xs === true ? 'spider-pic sm' : 'spider-pic']">
                  </v-card>
                  <v-card tile flat class="work detail">
                      <v-card-title v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'aerospace-title sm' : 'aerospace-title']">
                        <a href="https://www.terra-drone.net/">TerraDrone株式会社</a>
                      </v-card-title>
                      <div v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'earo-bar spiber sm' : 'earo-bar spiber']" />
                      <v-card-text v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'aerospace-day spiber sm' : 'aerospace-day spiber']">
                        2018/06 - 2018/09
                      </v-card-text>
                      <v-card-text v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'aerospace-detail spiber sm' : 'aerospace-detail spiber']">
                        ハイブリッドドローンのプロジェクトマネージャーをしていました。<br>
                        ドローンは海外メーカーの物を使用しており、<br>実証実験やメーカーとの窓口などを行いました。<br>
                        また、知財管理の責任者として、<br>特許庁のベンチャー支援プログラム「IPAS」への応募と対応業務に従事しました。<br>
                        <br>
                        キーワード：ドローン・PX4/Arudpilot・測量・知財
                      </v-card-text>
                      <img v-if="$vuetify.breakpoint.mdAndUp" src="/drone1.jpg" alt="spider" v-bind:class="[$vuetify.breakpoint.xs === true ? 'spider-pic sm' : 'spider-pic']">
                  </v-card>
                  <v-card tile flat class="work detail">
                      <v-card-title v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'aerospace-title sm' : 'aerospace-title']">
                        <a href="https://www.digitalhearts.com/#scene01">株式会社デジタルハーツ</a>
                      </v-card-title>
                      <div v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'earo-bar spiber sm' : 'earo-bar spiber']" />
                      <v-card-text v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'aerospace-day spiber sm' : 'aerospace-day spiber']">
                        2018/10 - 2019/05
                      </v-card-text>
                      <v-card-text v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'aerospace-detail spiber sm' : 'aerospace-detail spiber']">
                        機械学習エンジニアとして、日本語校正サービス開発のための自然言語処理の研究開発に従事しました。<br>
                        Transformerをベースにした、２入力１出力の質問応答モデルの研究など、主にアルゴリズムの開発を担当しました。
                        <br><br>
                        キーワード：Python・Pytorch・LightGBM・Docker・Vue.js/Nuxt.js
                      </v-card-text>
                  </v-card>
                  <v-card tile flat class="work detail">
                      <v-card-title v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'aerospace-title sm' : 'aerospace-title']">
                        <a>株式会社APPSWINGBY</a>
                      </v-card-title>
                      <div v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'earo-bar spiber sm' : 'earo-bar spiber']" />
                      <v-card-text v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'aerospace-day spiber sm' : 'aerospace-day spiber']">
                        2018/12 - 2019/12
                      </v-card-text>
                      <v-card-text v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'aerospace-detail spiber sm' : 'aerospace-detail spiber']">
                        機械学習エンジニアとして、大手WebサイトのAIOpsを開発。<br>
                        システムの状態から、時系列予測や障害予知のための機械学習モデルを構築した。<br>
                        また、別プロジェクトでは自動システム構築のテンプレートをAWS Cloudformationを用いて開発した。
                        <br><br>
                        キーワード：Python・Pytorch・LightGBM・Docker・Vue.js/Nuxt.js・AWS・Azure
                      </v-card-text>
                  </v-card>
              </v-flex>
          </v-layout>
    </v-container>
  </v-content>
</template>


<script>
import Menu from '~/components/menu.vue'

export default{
    components: {
      Menu
    },
    data () {
        return {
            drawer: true,
            pics : [
              { src : '/spider.jpeg'},
              { src : '/tool.jpg'},
              { src : '/ex.jpg'},
            ]
        }
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Tangerine&display=swap');
@import url('https://fonts.googleapis.com/css?family=Kosugi&display=swap');
@import url('assets/move-bar.scss');

.work {
  background-color: #fff !important;
  height: 50%;
}

.work.detail {
  height: 30%;
}

.work-title {
  position: absolute;
  color: #929292 !important;
  font-family: 'Tangerine', cursive !important;
  font-size: 60pt !important;
  top: 70% !important;
  width: 100%;
}

.work-title.sm {
  font-size: 45pt !important;
}

.bartitle.barwork {
  top: 90%;
  position: absolute;
  width: 65%;
}

.bartitle.barwork.sm {
  top: 90%;
  width: 75%;
}

.aerospace-card {
  background-color: #fff !important;
  height: 25%;
}

.aerospace-title {
  position: absolute;
  color: #929292 !important;
  font-family: 'Kosugi', sans-serif;
  font-size: 14pt !important;
  top: 3% !important;
  width: 100%;
  left: 7%;   
}

.aerospace-title.sm {
  font-size: 6pt !important;
  left: 0%;
}

.aerospace-day {
  position: absolute;
  color: #929292 !important;
  font-family: 'Kosugi', sans-serif;
  font-size: 11pt !important;
  top: 6% !important;
  width: 35%;
  left: 70%;   
}

.aerospace-day.sm {
  font-size: 7pt !important;
  left: 64%;
  width: 35%;
}

.aerospace-day.spiber {
  top: 5% !important;
  width: 40%;
}

.aerospace-day.spiber.sm {
  font-size: 7pt !important;
  left: 50%;
}

.aerospace-detail {
  position: absolute;
  color: #929292 !important;
  font-family: 'Kosugi', sans-serif;
  font-size: 11pt !important;
  line-height: 150%;
  top: 45% !important;
  width: 100%;
  left: 8%;   
}

.aerospace-detail.sm {
  font-size: 7pt !important;
  left: 5%;   
  top: 28%!important;
  width: 77%;
  }

.aerospace-detail.spiber {
  top: 30% !important;
}

.aerospace-detail.spiber.sm {
  font-size: 7pt !important;
  top: 25% !important;
  left: 5%;  
  line-height: 150%; 
  width: 77%;
}

.earo-bar {
  border-bottom: solid 1px ;
  border-image: url("/gradient.png") 1 stretch;
  border-image-slice: 1;
  top: 30%;
  position: absolute;
  width: 90%;
}

.earo-bar.sm {
  width: 105%;
}

.earo-bar.spiber {
  top: 25%;
}

.earo-bar.spiber.sm {
  width: 90%;
}

.spider-pic {
  top: 35%;
  left: 70%;
  position: absolute;
  width: 20%;
}

a {
  text-decoration: none !important;
  color: #929292 !important;
}


</style>