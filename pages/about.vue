<template>
  <v-content>
    <v-navigation-drawer app right overlay-opacity="0" v-model="drawer" width=128 color=#fff>
        <v-list rounded class="menulist">
            <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
                <v-list-item-content>
                    <v-list-item-title class="menu">{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <div class="scroll loading">
            <span>S</span>
            <span>C</span>
            <span>R</span>
            <span>O</span>
            <span>L</span>
            <span>L</span>
        </div>
    </v-navigation-drawer>
    <v-container fluid pa-0 fill-height ma-0>
          <v-layout>
              <v-flex xs12 s12 md12 lg12 order-lg1 order-sm1>
                  <v-card tile flat class="who">
                      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                      <v-card-title class="justify-center who-title">
                          Who I am?
                      </v-card-title>
                      <div class="bartitle" />
                  </v-card>
              </v-flex>
          </v-layout>
    </v-container>
    <v-container fluid pa-0 fill-height ma-0>
        <v-layout>
            <v-flex xs12 s12 md12 lg12 order-lg1 order-sm1>
                <v-card tile flat class="who">
                    <v-card-title class="justify-center about-title">
                        About
                    </v-card-title>
                    <v-card-text class="intoroduction-title">自己紹介</v-card-text>
                    <img src="/face.png" alt="face picture" class="face">
                    <v-card-text class="intro-self">
                        名前：佐藤恵太<br>
                        出身：山形<br>
                        学歴：帝京大学 理工学部 航空宇宙工学科<br>
                        好きなもの：飛行機・バレー🏐<br><br>
                        その他：<br>
                        はじめまして！佐藤恵太と申します。<br>
                        バイオ/複合材料研究者・ドローンエンジニア・機械学習エンジニア<br>
                        を経て、現在はフリーでお仕事しています。<br>
                        今年の夏からオーストラリア🇦🇺に留学予定です。<br>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
  </v-content>
</template>


<script>
export default{
    data () {
        return {
            drawer: false,
            items : [
                { title: 'Top', link: '/' },
                { title: 'About', link: '/about' },
                { title: 'Work', link: '/work' },
                { title: 'Skill', link: '/skill' },
                { title: 'Contact', link: '/contact' },
            ]
        }
    },
    watch: {
      group () {
        this.drawer = false
      }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Tangerine&display=swap');
@import url('https://fonts.googleapis.com/css?family=Kosugi&display=swap');
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

.about-title {
  position: absolute;
  color: #929292 !important;
  font-family: 'Tangerine', cursive !important;
  font-size: 60pt !important;
  top: 10% !important;
  width: 100%;
}

.menu {
    color: #929292 !important;
}

.menulist {
    position: absolute;
    top: 33% ;
}

.v-navigation-drawer__border {
  background-color: #fff!important;
}

.intoroduction-title {
  position: absolute;
  color: #929292 !important;
  font-size: 15pt !important;
  top: 20% !important;
  width: 100%;
  left: 45%;
}

.intro-self {
  font-family: 'Kosugi', sans-serif;
  font-weight: 100;
  position: absolute;
  color: #5d5d5d !important;
  font-size: 1.5vw !important;
  line-height: 150%;
  top: 32% !important;
  width: 70%;
  left: 35%;  
}

.scroll {
  color: #929292 !important;
  font-size: 15pt !important;
  position: absolute;
  top: 92%;
  left: 18%;
}

.bartitle {
  border-bottom: solid 1px ;
  border-image: url("/gradient.png") 1 stretch;
  border-image-slice: 1;
  top: 43%;
  position: absolute;
  width: 100%;
  right: 35%;
  opacity:0;
  animation-name:sample02;
  animation-duration:3s; 
  animation-fill-mode: forwards;
}

.face {
  position: absolute;
  top: 35%;
  left: 15%;
  width: 20%;
}

@keyframes sample02 {
0% {
 opacity: 1;
 transform: translateX(-1000px);
}
 100% {
 opacity:1;
 transform: translateX(0px);
 } 
}

.loading span {
  display: inline-block;
  margin: 0 -.075em;
  animation: loading 1.2s infinite alternate;
}
.loading span:nth-child(2) {
  animation-delay: .1s;
}
.loading span:nth-child(3) {
  animation-delay: .2s;
}
.loading span:nth-child(4) {
  animation-delay: .3s;
}
.loading span:nth-child(5) {
  animation-delay: .4s;
}
.loading span:nth-child(6) {
  animation-delay: .5s;
}
.loading span:nth-child(7) {
  animation-delay: .6s;
}
@keyframes loading {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>