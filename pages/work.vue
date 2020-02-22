<template>
  <v-content>
    <Menu />
    <Title title="Work history" />
    <v-container fluid fill-height pa-0 ma-0>
      <v-layout>
        <v-flex xs12 s12 md12 lg12 order-lg1 order-sm1>
          <WorkCard v-for="work in details" :key="work.title" :title="work.title" :year="work.year" :texts="work.texts"/>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- <Star/> -->
  </v-content>
</template>


<script>
import Menu from '~/components/menu.vue'
import Title from '~/components/DetailTaitle.vue'
import Star from '~/components/star.vue'
import WorkCard from '~/components/WorkCard.vue'

export default{
    components: {
      Menu,
      Title,
      Star,
      WorkCard
    },
    data () {
        return {
            details: [
              { 
                title: '帝京大学 理工学部航空宇宙工学科', 
                year: '- 2016/03', 
                texts:[
                  '研究テーマ：deep stall landingを行う小型無人航空機のHITLシミュレーションに関する研究', 
                  'キーワード：飛行力学・飛行制御・PX4/Arudpilot・XPlane・C++'
                  ]
              },
              { 
                title: 'Spiber株式会社', 
                year: '2016/04 - 2018/06', 
                texts:[
                  '新卒で入社。タンパク質繊維の基礎研究・複合材料の研究に従事。',
                  'また、複合材料の研究開発については、研究開発体制の立ち上げを実施した。',
                  '　',
                  'キーワード：タンパク質工学・複合材料工学・流体解析・機械設計'
                ]
              },
              { 
                title: 'TerraDrone株式会社', 
                year: '2018/06 - 2018/09', 
                texts:[
                  'ハイブリッドドローンのプロジェクトマネージャーとして、ドローンの実証実験と運用に従事。',
                  'また、ドローンは海外製のものを使用しており、メーカーとの連絡窓口も経験した。',
                  'その他に、知財管理の責任者として、特許庁のベンチャー支援プログラム「IPAS」への応募と対応業務に従事。',
                  '　',
                  'キーワード：ドローン・PX4/Arudpilot・測量・知財'
                ]
              },
              { 
                title: '株式会社デジタルハーツ', 
                year: '2018/10 - 2019/05', 
                texts:[
                  '機械学習エンジニアとして、日本語校正サービス開発のための自然言語処理の研究開発に従事。',
                  'Transformerをベースにした、２入力１出力の質問応答モデルの研究など、主にアルゴリズムの開発を担当。',
                  '　',
                  'キーワード：Python・Pytorch・LightGBM・Docker・Vue.js/Nuxt.js',
                ]
              },
              { 
                title: '株式会社APPSWINGBY', 
                year: '2018/12 - 2019/12', 
                texts:[
                  '機械学習エンジニアとして、大手WebサイトのAIOpsを開発。',
                  'システムの状態から、時系列予測や障害予知のための機械学習モデルを構築した。',
                  'また、別プロジェクトでは自動システム構築のテンプレートをAWS Cloudformationを用いて開発した。',
                  '　',
                  'キーワード：Python・Pytorch・LightGBM・Docker・Vue.js/Nuxt.js・AWS・Azure',
                ]
              },
            ],
        }
    },
}
</script>

<style>
</style>