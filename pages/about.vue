<template>
  <v-content>
    <Menu />
    <v-container fluid pa-0 fill-height ma-0>
          <v-layout>
              <v-flex xs12 s12 md12 lg12 order-lg1 order-sm1>
                  <v-card tile flat class="who">
                      <v-card-title
                        v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'justify-center who-title sm' : 'justify-center who-title']">
                          Who I am?
                      </v-card-title>
                      <div v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'bartitle sm' : 'bartitle']" />
                  </v-card>
              </v-flex>
          </v-layout>
    </v-container>
    <v-container fluid pa-0 fill-height ma-0>
        <v-layout>
            <v-flex xs12 s12 md12 lg12 order-lg1 order-sm1>
                <v-card tile flat class="who" align-center >
                    <div v-bind:class="[$vuetify.breakpoint.xs === true ? 'justify-center about-title sm' : 'justify-center about-title']">
                        About
                    </div>
                    <div v-bind:class="[$vuetify.breakpoint.xs === true ? 'intro-self sm' : 'intro-self']">
                        <img src="/face.png" alt="face picture" v-bind:class="[$vuetify.breakpoint.xs === true ? 'face sm' : 'face']">
                        名前：佐藤恵太<br>
                        出身：山形<br>
                        学歴：帝京大学 理工学部 航空宇宙工学科<br>
                        好きなもの：飛行機・バレー・ラグビー<br><br>
                        はじめまして！佐藤恵太と申します。<br>
                        バイオ/複合材料研究者<br>
                        ドローンエンジニア<br>
                        機械学習エンジニアを経て、<br>
                        現在はフリーでお仕事しています。<br><br>
                        趣味はバレーで、友達とバレーサークル作るぐらいには好きです。<br>
                        なお、プレーは上手くないので猛練習中・・・
                    </div>
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
        }
    },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Tangerine&display=swap');
@import url('https://fonts.googleapis.com/css?family=Kosugi&display=swap');
@import url('assets/move-bar.scss');

.who {
  position: relative;
  background-color: #fff !important;
  height: 100%;
}

.who-title {
  position: absolute;
  color: #929292 !important;
  font-family: 'Tangerine', cursive !important;
  font-size: 60pt !important;
  top: 35% !important;
  width: 100%;
}

.who-title.sm {
  font-size: 45pt !important;
}

.about-title {
  position: relative;
  color: #929292 !important;
  font-family: 'Tangerine', cursive !important;
  font-size: 60pt !important;
  top: 10% !important;
  text-align:center;
  width: 150pt;
  margin: auto;
  border-bottom: solid 1px ;
  border-left: solid 0px ;
  border-right: solid 0px ;
  border-top: solid 0px ;
  border-image: url("/gradient.png") 1 stretch;
  border-image-slice: 1;
}

.about-title.sm {
  font-size: 45pt !important;
}


.intro-self {
  font-family: 'Kosugi', sans-serif;
  font-weight: 100;
  position: relative;
  color: #5d5d5d !important;
  font-size: 1.5vw !important;
  line-height: 150%;
  text-align:center;
  top: 31% !important;
  width: 430pt;
  margin: auto;
}

.intro-self.sm {
  font-size: 7pt !important;
  top: 30% !important;
  width: 200pt;
}

.bartitle {
  top: 43% ;
  position: absolute;
  width: 62%;
}

.bartitle.sm {
  width: 80%;
}

.face {
  position: absolute;
  top: -105pt;
  left: 38%;
  width: 100pt;
}

.face.sm {
  top: -100pt%;
  left: 24%;
  width: 100pt;
}
</style>