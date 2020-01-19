<template>
  <v-content>
    <transition name="fade">
      <v-container v-if="dataLoadFinish === false" fluid pa-0 fill-height ma-0>
        <v-layout　wrap>
          <v-flex xs12 sm12 md12 lg12 calss="first-content">
            <v-card tile flat class="first-card">
              <v-card-title class="Welcome">Welcome Keita's Portfolio!!</v-card-title>
              <div v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'first-bar sm' : 'first-bar']" />
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </transition>
    <v-container v-if="dataLoadFinish === true" fluid pa-0 fill-height ma-0>
      <v-layout　wrap>
        <v-flex xs12 sm12 md3 lg3 order-lg1 order-sm1 class="About">
            <v-card tile flat class="card" href="/about">
                <v-card-title class="justify-center Cardtitle">
                  About
                  <div class="bar" />
                  <v-card-text class="text text-center">
                    自己紹介です。
                  </v-card-text>
                </v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 sm12 md3 lg3 order-lg2 order-sm2 class="Work">
            <v-card tile flat class="card" href="/work">
              <v-card-title class="justify-center Cardtitle">
                Work
                <div class="bar" />
                <v-card-text class="text text-center">
                  これまでしてきた仕事についてです。
                </v-card-text>
              </v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 sm12 md3 lg3 order-lg3 order-sm3 class="Skill">
            <v-card tile flat class="card" href="/skill">
                <v-card-title class="justify-center Cardtitle">
                    Skill
                    <div class="bar" />
                  <v-card-text class="text text-center">
                    スキルについてです。
                  </v-card-text>
                </v-card-title>
            </v-card>
        </v-flex> 
        <v-flex xs12 sm12 md3 lg3 order-lg4 order-sm4 class="Contact">
            <v-card tile flat class="card" href="/contact">
              <v-card-title height="30%" class="justify-center Cardtitle">
                  Contact
                  <div class="bar" />
                <v-card-text class="text text-center">
                    連絡先です。
                </v-card-text>
              </v-card-title>
              <!-- <v-card-text class="lan">
                <a href="/index_en">JP/EN</a>
              </v-card-text> -->
            </v-card>
        </v-flex> 
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data () {
        return {
          dataLoadFinish: false     
        }
    },
  mounted() {
    setTimeout(() => {
      this.dataLoadFinish = true
    }, 2000)
  }
}
</script>

<style scoped>
@import url('assets/move-bar.scss');

.first-card {
  background-image: linear-gradient(#BD7CF9, #DE5A91);
  height: 100%;
}

.Welcome {
  color: #fff;
  position: absolute;
  top: 35%;
  left: 13%;
  font-size: 50pt;
  font-weight: 100;
}

.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}

.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}

.card {
  position: relative;
  background-image: linear-gradient(#12092C, #12092C);
  height: 100%;
  z-index: 1;
}

.card::before {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(#BD7CF9, #DE5A91);
  z-index: -1;
  transition: opacity 0.5s linear;
  opacity: 0;
}

.card:hover::before {
  opacity: 0.65;
}

.Cardtitle {
  color: rgb(255, 255, 255);
  font-size: 7vmin;
  position: relative;
  top: 33%;
  width: 100%;
  margin: 0;
}

.bar {
  border-bottom: solid 1px ;
  border-image: url("/gradient.png") 1 stretch;
  border-image-slice: 1;
  top: 100%;
  position: absolute;
  width: 40%;
  left: 30%
}

.text {
  position: absolute;
  top: 100%;
  width: 100%;
  margin: 0;
  color: #c7c7c7 !important;
  left: 1%
}

.lan {
  text-align: right;
  position: absolute;
  top: 0%;
  width: 100%;
  margin: 0;
}

a {
  text-decoration: none !important;
  color: #fff !important;
  font-size: 12pt !important;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}

.first-bar {
  border-bottom: solid 1px ;
  border-color: #fff;
  border-image-slice: 1;
  opacity:0;
  animation-name:sample02;
  animation-duration:2s; 
  animation-fill-mode: forwards;
  position: relative;
  top: 45%;
  left: -20%;
}

.first-bar.sm {
  width: 80%;
}

</style>