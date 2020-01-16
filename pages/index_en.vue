<template>
  <v-layout>
    <v-flex xs3 s3 md3 lg3 order-lg1 order-sm1 class="About">
        <v-card tile flat class="card">
            <v-card-title class="justify-center Cardtitle">
                About me
            </v-card-title>
            <div class="bar" />
            <v-card-text class="text text-center">
              自己紹介です。
            </v-card-text>
        </v-card>
    </v-flex>
    <v-flex xs3 s3 md3 lg3 order-lg2 order-sm2 class="Work">
        <v-card tile flat class="card">
            <v-card-title class="justify-center Cardtitle">
                Work
            </v-card-title>
            <div class="bar" />
            <v-card-text class="text text-center">
               これまでしてきた仕事についてです。
            </v-card-text>
        </v-card>
    </v-flex>
    <v-flex xs3 s3 md3 lg3 order-lg3 order-sm3 class="Skill">
        <v-card tile flat class="card">
            <v-card-title class="justify-center Cardtitle">
                Skill
            </v-card-title>
            <div class="bar" />
            <v-card-text class="text text-center">
              私のスキルについてです。
            </v-card-text>
        </v-card>
    </v-flex> 
    <v-flex xs3 s3 md3 lg3 order-lg4 order-sm4 class="Contact">
        <v-card tile flat class="card">
          <v-card-title class="justify-center Cardtitle">
              Contact
          </v-card-title>
          <div class="bar" />
          <v-card-text class="text text-center">
              連絡先です。
          </v-card-text>
          <v-card-text class="lan">
            <a href="/">JP/EN</a>
          </v-card-text>
          <v-divider />
        </v-card>
    </v-flex> 
  </v-layout>
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
  height: 16%;
  font-size: 2.8rem;
  position: absolute;
  top: 30%;
  width: 100%;
  margin: 0;
}

.bar {
  border-bottom: solid 1px ;
  border-color: #B3B0B0;
  border-image-slice: 1;
  top: 47%;
  position: absolute;
  width: 40%;
  left: 30%
}

.text {
  position: absolute;
  top: 50%;
  width: 100%;
  margin: 0;
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