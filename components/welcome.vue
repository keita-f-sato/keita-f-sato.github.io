<template>
    <transition name="fade">
      <v-container v-if="dataLoadFinish === false " fluid pa-0 fill-height ma-0>
        <v-layout　wrap>
          <v-flex xs12 sm12 md12 lg12>
            <v-card tile flat class="first-card">
              <v-card-title class="justify-center Welcome">
                Welcome Keita's Portfolio!!
                <div class="first-bar" />
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </transition>
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

<style lang="scss">
@import 'assets/move-bar.scss';
@import 'assets/variables.scss';
@import 'node_modules/vuetify/src/styles/settings/_variables.scss';

.first-card {
  background-image: $main-gradient;
  height: 100%;
  max-width: 1500px;
}

.Welcome {
  color: #fff;
  position: absolute;
  top: 45%;
  left: 13%;
  font-size: 50pt;
  font-weight: 100;
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
  width: 90%;
}


@media #{map-get($display-breakpoints, "sm-and-down")} {
  .first-bar {
      top: 4px;
  }

  .Welcome {
    left: 0%;
    font-size: 20pt;
    width: 100%;
  }
}

@media #{map-get($display-breakpoints, "lg-and-up")} {
  .first-bar {
      width: 1216px;
      top: 28px;
      right: 143px;
  }

  .Welcome {
    left: 0%;
    font-size: 60pt;
    width: 100%;
  }
}

@media #{map-get($display-breakpoints, "md-only")} {
  .first-bar {
      width: 952px;
      top: 16px;
      right: 203px;
  }

  .Welcome {
    left: 0%;
    font-size: 35pt;
    width: 100%;
  }
}
</style>