<template>
    <v-card tile flat class="work-card">
        <v-card-title class="work-detail-title">
            {{ title }}
        </v-card-title>
        <div class="work-bar" />
        <v-card-text class="work-year">
            {{ year }}
        </v-card-text>
        <v-card-text class="work-detail">
          <p v-for="text in texts" :key="text.id">
            {{ text }}
          </p>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        title: String,
        year: String,
        texts: Array
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Tangerine&display=swap');
@import url('https://fonts.googleapis.com/css?family=Kosugi&display=swap');
@import url('assets/move-bar.scss');

.work-card {
  background-color: #fff !important;
  height: 25%;
  p {
      margin: 0;
  }
}

.work-detail-title {
  position: absolute;
  color: #929292 !important;
  font-family: 'Kosugi', sans-serif;
  font-size: 14pt !important;
  top: 3% !important;
  width: 45%;
  left: 7%;   
}

.work-bar {
  border-bottom: solid 1px ;
  border-left: solid 0px ;
  border-right: solid 0px ;
  border-top: solid 0px ;
  border-image: url("/gradient.png") 1 stretch;
  border-image-slice: 1;
  top: 30%;
  position: absolute;
  width: 90%;
}

.work-year {
  position: absolute;
  color: #929292 !important;
  font-family: 'Kosugi', sans-serif;
  font-size: 11pt !important;
  top: 6% !important;
  width: 20%;
  left: 70%;   
}
  
.work-detail {
  position: absolute;
  color: #929292 !important;
  font-family: 'Kosugi', sans-serif;
  font-size: 11pt !important;
  line-height: 150%;
  top: 33% !important;
  width: 60%;
  left: 8%;   
}
</style>