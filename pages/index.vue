<template>
  <v-content>
    <v-container fluid pa-0 fill-height ma-0>
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
                    私のスキルについてです。
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
              <v-card-text class="lan">
                <a href="/index_en">JP/EN</a>
              </v-card-text>
              <v-divider />
            </v-card>
        </v-flex> 
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Topcard from '~/components/TopCard.vue'

export default {
  components: {
    Topcard
  }
}
</script>

<style scoped>
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
  top: 30%;
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
</style>