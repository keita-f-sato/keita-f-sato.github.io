<template>
    <v-container fluid pa-0 fill-height ma-0>
        <v-layout>
            <v-flex xs12 s12 md12 lg12 order-lg1 order-sm1>
                <v-card tile flat class="detail-title">
                    <v-card-title class="justify-center title-text">
                        {{ title }}
                     </v-card-title>
    　               <div class="bartitle" />
                  </v-card>
              </v-flex>
          </v-layout>
    </v-container>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss">
@import 'node_modules/vuetify/src/styles/settings/_variables.scss';
@import url('assets/move-bar.scss');

.detail-title {
  position: relative;
  background-color: #fff !important;
  height: 100%;
}

.title-text {
  z-index: 3;
  position: absolute;
  color: #929292;
  font-family: 'Tangerine', cursive !important;
  font-size: 60pt !important;
  top: 35% !important;
  width: 100%;
  margin:0 auto
}

.bartitle {
  top: 45% ;
  position: absolute;
  width: 62%;
}

@media #{map-get($display-breakpoints, "xs-only")} {
  .title-text {
    position: relative;
    font-size: 7vw !important;
    border-image: url(/gradient.png) 1 stretch;
    border-bottom: solid 1px;
    margin: auto;
    width: 40%;
  }

  .bartitle {
    border-bottom: 0px !important;
  }
}

@media #{map-get($display-breakpoints, "sm-only")} {
  .title-text {
    position: relative;
    font-size: 7vw !important;
    border-image: url(/gradient.png) 1 stretch;
    border-bottom: solid 1px;
    margin: auto;
    width: 33%;
  }

  .bartitle {
    border-bottom: 0px !important;
  }
}

@media #{map-get($display-breakpoints, "md-only")} {
  .title-text {
    font-size: 70pt;
  }

  .bartitle {
    width: 63%;
  }
}

@media #{map-get($display-breakpoints, "lg-and-up")} {
  .title-text {
    font-size: 70pt !important;
  }

  .bartitle {
    width: 63%;
  }
}
</style>