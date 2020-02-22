<template>
  <v-content>
    <Menu />
    <Title title="Who I am?" />
    <!-- <v-container fluid pa-0 fill-height ma-0>
        <v-layout>
            <v-flex xs12 s12 md12 lg12 order-lg1 order-sm1>
                <v-card tile flat class="who">
                    <v-card-title class="justify-center who-title">
                        Who I am?
                     </v-card-title>
    　               <div class="bartitle" />
                  </v-card>
              </v-flex>
          </v-layout>
    </v-container> -->
    <v-container fluid pa-0 fill-height ma-0>
        <v-layout>
            <v-flex xs12 s12 md12 lg12 order-lg1 order-sm1>
                <v-card tile flat class="who" align-center >
                  <div class="about">
                    <div class="justify-center about-title">
                        About
                    </div>
                    <div class="intro-self">
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
                      <img src="/face.png" alt="face picture" v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'face justify-center' : 'face']">
                    </div>
                  </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    <Star class="star1"/>
  </v-content>
</template>

<script>
import Menu from '~/components/menu.vue'
import Star from '~/components/star.vue'
import Title from '~/components/DetailTaitle.vue'

export default{
    components: {
      Menu,
      Star,
      Title
    },
    data () {
        return {
        }
    },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Tangerine&display=swap');
@import url('https://fonts.googleapis.com/css?family=Kosugi&display=swap');
@import url('assets/move-bar.scss');
@import 'node_modules/vuetify/src/styles/settings/_variables.scss';

.about {
  position: absolute;
  top: 10%;
  width: 100%;
}

.who {
  position: relative;
  background-color: #fff !important;
  height: 100%;
}

.who-title {
  z-index: 3;
  position: absolute;
  color: #929292;
  font-family: 'Tangerine', cursive !important;
  font-size: 60pt !important;
  top: 35% !important;
  width: 100%;
  margin:0 auto
}

.about-title {
  position: relative;
  color: #929292 !important;
  font-family: 'Tangerine', cursive !important;
  font-size: 60pt;
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

.intro-self {
  font-family: 'Kosugi', sans-serif;
  font-weight: 100;
  position: relative;
  color: #5d5d5d !important;
  font-size: 1.5vw ;
  line-height: 150%;
  padding-top: 45px;
  width: 55%;
  margin-left: 40%;
}

.bartitle {
  top: 45% ;
  position: absolute;
  width: 62%;
}

.face {
  position: relative;
  top: -207px;
  left: -205px;
  width: 30%;
  z-index: 50;
}

@media #{map-get($display-breakpoints, "xs-only")} {
  .who-title {
    position: relative;
    font-size: 7vw !important;
    border-image: url(/gradient.png) 1 stretch;
    border-bottom: solid 1px;
    margin: auto;
    width: 40%;
  }

  .about-title {
    font-size: 33pt;
    width: 90pt;
  }

  
.intro-self {
    font-size: 7pt !important;
    width: 200pt;
    padding-top: 160px;
    margin: 0 auto;
  }

  .bartitle {
    border-bottom: 0px;
  }

  .face {
    top: -333px;
    left: 67px;
    width: 100pt;
  }
}

@media #{map-get($display-breakpoints, "sm-only")} {
  .about {
    top: 25%;
  }

  .who-title {
    position: relative;
    font-size: 7vw !important;
    border-image: url(/gradient.png) 1 stretch;
    border-bottom: solid 1px;
    margin: auto;
    width: 33%;
  }

  .about-title {
    font-size: 45pt !important;
  }

  
.intro-self {
    margin-left: 39%;
    font-size: 10pt;
    width: 45%;
  }

  .bartitle {
    border-bottom: 0px;
  }

  .face {
    position: relative;
    top: -157pt;
    left: -130pt;
    width: 100pt;
  }
}

@media #{map-get($display-breakpoints, "md-only")} {
  .about {
    top: 15%;
  }

  .intro-self {
    padding-bottom: 0px;
  }

  .who-title {
    font-size: 70pt;
  }

  .bartitle {
    width: 63%;
  }

  .face {
    top: -255px;
  }
}

@media #{map-get($display-breakpoints, "lg-and-up")} {
  .who-title {
    font-size: 70pt !important;
  }

  .bartitle {
    width: 63%;
  }

 .face {
   top: -360px;
   left: -265px;
 }
}
</style>