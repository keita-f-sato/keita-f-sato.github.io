<template>
    <v-card tile flat class="work-card">
      <div class="title-box">
        <v-card-title class="work-detail-title">
            {{ title }}
        </v-card-title>
        <div class="work-year">
            {{ year }}
        </div>
      </div>
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
@import 'node_modules/vuetify/src/styles/settings/_variables.scss';

.title-box {
  width: 715px;
  height: 60px;
  border-bottom: solid 1px ;
  border-left: solid 0px ;
  border-right: solid 0px ;
  border-top: solid 0px ;
  border-image: url("/gradient.png") 1 stretch;
  border-image-slice: 1;
}

.work-card {
  background-color: #fff !important;
  height: 25%;
  max-width: 1100px;
  margin: 0 auto;
  p {
      margin: 0;
  }
}

.work-detail-title {
  float: left;
  color: #929292 !important;
  font-family: 'Kosugi', sans-serif;
  font-size: 14pt !important;
  width: 400px;
  padding: 15px 15px 15px 45px;
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
  float: right;
  padding: 20px 20px 20px 20px;
  color: #929292 !important;
  font-family: 'Kosugi', sans-serif;
  font-size: 14pt !important;
}
  
.work-detail {
  position: absolute;
  color: #929292 !important;
  font-family: 'Kosugi', sans-serif;
  font-size: 11pt !important;
  line-height: 150%;
  top: 33% !important;
  width: 80%;
  left: 3%;   
}

@media #{map-get($display-breakpoints, "xs-only")} {
  .work-card {
    height: 35%;
  }
  .title-box {
    width: 100%;
    height: 75px;
  }

  .work-detail-title {
    float: none;
    padding: 15px 0px 0px 30px;
    width: 350px
  }

  .work-year {
    float: none;
    padding: 0px 0px 20px 30px;
    font-size: 13pt !important;
 }

 .work-detail {
   padding: 0px;
   padding-left: 10px;
   width: 95%;
   top: 25%;
   font-size: 9pt !important;
 }
}

@media #{map-get($display-breakpoints, "sm-only")} {
  .work-card {
    height: 30%;
  }
  .title-box {
    width: 530px;
  }

  .work-detail-title {
    padding: 15px 0px 15px 30px;
    width: 350px
  }

  .work-year {
    padding: 20px 15px 20px 0px;
    font-size: 13pt !important;
 }

 .work-detail {
   width: 100%;
   top: 25%;
   font-size: 9pt !important;
 }
}

@media #{map-get($display-breakpoints, "md-only")} {
 .work-detail {
   font-size: 10pt !important;
 }
}
</style>