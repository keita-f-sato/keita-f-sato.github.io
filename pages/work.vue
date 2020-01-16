<template>
  <v-content>
    <v-navigation-drawer clipped app right permanent width=128 color=#fff>
        <v-list rounded class="menulist">
            <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
                <v-list-item-content>
                    <v-list-item-title class="menu">{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-container fluid fill-height pa-0 ma-0>
          <v-layout>
              <v-flex xs12 s12 md12 lg12 order-lg1 order-sm1>
                  <v-card tile flat class="work">
                      <v-card-title class="justify-center work-title">
                          Work history
                      </v-card-title>
                      <div class="barwork" />
                  </v-card>
                  <v-card tile flat class="work">
                  </v-card>
                  <v-card tile flat class="aerospace-card">
                      <v-card-title class="aerospace-title">
                        帝京大学 理工学部 航空宇宙工学科 卒業
                      </v-card-title>
                      <div class="earo-bar" />
                      <v-card-text class="aerospace-day">
                        2016/03
                      </v-card-text>
                      <v-card-text class="aerospace-detail">
                        研究テーマ：deep stall landingを行う小型無人航空機のHITLシミュレーションに関する研究
                      </v-card-text>
                  </v-card>
                  <v-card tile flat class="work">
                    
                  </v-card>
                  <v-card tile flat class="work">
                  </v-card>
                  <v-card tile flat class="work">
                  </v-card>
                  <v-card tile flat class="work">
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
            items : [
                { title: 'Top', link: '/' },
                { title: 'About', link: '/about' },
                { title: 'Work', link: '/work' },
                { title: 'Skill', link: '/skill' },
                { title: 'Contact', link: '/contact' },
            ]
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Tangerine&display=swap');
@import url('https://fonts.googleapis.com/css?family=Kosugi&display=swap');
.work {
  background-color: #fff !important;
  height: 50%;
}

.work-title {
  position: absolute;
  color: #929292 !important;
  font-family: 'Tangerine', cursive !important;
  font-size: 7vw !important;
  top: 70% !important;
  width: 100%;
  left: 7%;
}

.barwork {
  border-bottom: solid 1px ;
  border-image: url("/gradient.png") 1 stretch;
  border-image-slice: 1;
  top: 90%;
  position: absolute;
  width: 100%;
  right: 30%;
  opacity:0;
  animation-name:sample02;
  animation-duration:3s; 
  animation-fill-mode: forwards;
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

.aerospace-card {
  background-color: #fff !important;
  height: 15%;
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

.aerospace-day {
  position: absolute;
  color: #929292 !important;
  font-family: 'Kosugi', sans-serif;
  font-size: 11pt !important;
  top: 9% !important;
  width: 100%;
  left: 70%;   
}

.aerospace-detail {
  position: absolute;
  color: #929292 !important;
  font-family: 'Kosugi', sans-serif;
  font-size: 11pt !important;
  top: 45% !important;
  width: 100%;
  left: 10%;   
}

.earo-bar {
  border-bottom: solid 1px ;
  border-image: url("/gradient.png") 1 stretch;
  border-image-slice: 1;
  top: 50%;
  position: absolute;
  width: 100%;
  right: 20%;
}
</style>