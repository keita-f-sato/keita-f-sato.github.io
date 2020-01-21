<template>
  <v-content>
    <v-container v-if="dataLoadFinish === true" fluid pa-0 fill-height ma-0>
      <v-layout　wrap>
        <v-flex xs12 sm12 md3 lg3 order-lg1 order-sm1 class="About">
            <v-card tile flat class="card" href="/about">
                <v-card-title v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'justify-center Cardtitle sm' : 'justify-center Cardtitle']">
                  About
                  <div v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'bar sm' : 'bar']" />
                  <v-card-text v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'text text-center sm' : 'text text-center']">
                    自己紹介です。
                  </v-card-text>
                </v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 sm12 md3 lg3 order-lg2 order-sm2 class="Work">
            <v-card tile flat class="card" href="/work">
              <v-card-title v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'justify-center Cardtitle sm' : 'justify-center Cardtitle']">
                Work
                <div v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'bar sm' : 'bar']" />
                <v-card-text v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'text text-center sm' : 'text text-center']">
                  これまでしてきた仕事についてです。
                </v-card-text>
              </v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 sm12 md3 lg3 order-lg3 order-sm3 class="Skill">
            <v-card tile flat class="card" href="/skill">
                <v-card-title v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'justify-center Cardtitle sm' : 'justify-center Cardtitle']">
                    Skill
                    <div v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'bar sm' : 'bar']" />
                  <v-card-text v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'text text-center sm' : 'text text-center']">
                    スキルについてです。
                  </v-card-text>
                </v-card-title>
            </v-card>
        </v-flex> 
        <v-flex xs12 sm12 md3 lg3 order-lg4 order-sm4 class="Contact">
            <v-card tile flat class="card" href="/contact">
              <v-card-title height="30%" v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'justify-center Cardtitle sm' : 'justify-center Cardtitle']">
                  Contact
                  <div v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'bar sm' : 'bar']" />
                <v-card-text v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'text text-center sm' : 'text text-center']">
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
          dataLoadFinish: true     
        }
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

.Welcome.sm {
  color: #fff;
  position: absolute;
  top: 35%;
  left: 0%;
  font-size: 20pt;
  font-weight: 100;
  width: 100%;
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

.Cardtitle.sm {
  color: rgb(255, 255, 255);
  font-size: 7vmin;
  position: relative;
  top: 20%;
  width: 100%;
  margin: 0;
}

.bar {
  border-bottom: solid 1px ;
  border-image: url("/gradient.png") 1 stretch;
  border-image-slice: 1;
  top: 125%;
  position: absolute;
  width: 40%;
  left: 30%;
}

.bar.sm {
  top: 95%;
  width: 30%;
  left: 35%;
  margin: auto;
}

.text {
  position: absolute;
  top: 145%;
  width: 100%;
  margin: 0;
  color: #c7c7c7 !important;
  left: 1%
}

.text.sm {
  top: 100%;
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
  width: 80%;
}

.first-bar.sm {
  width: 88%;
  top: 43%; 
}

</style>