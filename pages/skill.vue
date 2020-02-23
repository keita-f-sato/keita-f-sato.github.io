<template>
  <v-content>
    <Menu />
    <Title title="SKILL" />
      <v-container fluid pa-0 fill-height ma-0>
          <v-layout>
            <v-flex v-if="$vuetify.breakpoint.mdAndUp" xs12 s12 md2 lg4 order-lg1 order-sm1>
              <v-card class="side-card" elevation=0>
                <div class="pics right">
                  <img src="python-logo-symbol-5.png" alt="python" class="logs"/>
                  <img src="docker-vector-logo-small.png" alt="docker" class="logs"/>
                  <img src="PX4-Logo-Black.png" alt="PX4" class="logs"/>
                  <img src="azure.png" alt="azure" class="logs"/>
                </div>
              </v-card>
            </v-flex>
            <v-flex xs12 s12 md8 lg4 order-lg2 order-sm1>
              <v-card tile flat class="skills">
                <div v-for="value in skills" :key="value.name" class="skill-box"> 
                  <h4>{{ value.name }} </h4>
                  <v-list-item v-for="skill_item in value.item" :key="skill_item.skill" class="skill-itmes">
                    <v-list-item-content>
                      <v-list-item-title class="skill-title">{{ skill_item.skill }} </v-list-item-title>
                    </v-list-item-content>
                    <p>{{ skill_item.rate }}</p>
                    <v-rating
                      :value=skill_item.rate
                      color="amber"
                      dense
                      half-increments
                      readonly
                      :size="[$vuetify.breakpoint.smAndDown === true ? '10' : '14']"
                    ></v-rating>
                  </v-list-item>
                </div>
              </v-card>
            </v-flex>
            <v-flex v-if="$vuetify.breakpoint.mdAndUp" xs12 s12 md2 lg4 order-lg3 order-sm1>
              <v-card class="side-card" elevation=0>
                <div class="pics left">
                  <img src="pytorch-logo-dark.png" alt="pytorch" class="logs"/>
                  <img src="tensorflow.png" alt="tensorflow" class="logs"/>
                  <img src="julia.png" alt="julia" class="logs"/>
                  <img src="rust.png" alt="julia" class="logs"/>
                  <img src="openfoam-logo-large.png" alt="openfoam" class="logs"/>
                  <img src="nuxt2.png" alt="nuxt" class="logs"/>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
      </v-container>
      <!-- <Star/> -->
  </v-content>
</template>


<script>
import Menu from '~/components/menu.vue'
import Title from '~/components/DetailTaitle.vue'
import Star from '~/components/star.vue'


export default {
  data () {
        return {
            skills : [
              {
                name: "言語",
                item: [
                  { skill: 'python', rate: '5'},
                  { skill: 'Julia', rate: '4'},
                  { skill: 'HTML/CSS/Javascript', rate: '3.5'},
                  { skill: 'C++', rate: '3'},
                  { skill: 'Rust', rate: '2'},
                  { skill: 'GO', rate: '1'},
                ]
              },
              {
                name: "ツール",
                item: [
                  { skill: 'Fusion360', rate: '4.5'},
                  { skill: 'Pytorch', rate: '4'},
                  { skill: 'PX4/Arudpilot', rate: '4'},
                  { skill: 'vue.js/nuxt.js', rate: '4'},
                  { skill: 'Docker', rate: '4'},
                  { skill: 'Keras/Tensorflow', rate: '4'},
                  { skill: 'DB(MySQL/Elasticsearch)', rate: '3.5'},
                  { skill: 'Wordpress', rate: '3'},
                  { skill: 'OpenFOAM', rate: '2.5'},
                ]
              },
              {
                name: "専門分野",
                item: [
                  { skill: '複合材料工学', rate: '4.5'},
                  { skill: '機械設計', rate: '4.5'},
                  { skill: '制御工学', rate: '4'},
                  { skill: 'タンパク質工学', rate: '3'},
                ]
              },
              {
                name: "その他",
                item: [
                  { skill: 'バレーボール', rate: '3.5'},
                  { skill: 'AWS', rate: '3.5'},
                  { skill: 'Azure', rate: '2'},
                ]
              },
            ]
        }
  },
  components: {
     Menu,
     Title,
     Star
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Tangerine&display=swap');
@import url('https://fonts.googleapis.com/css?family=Kosugi&display=swap');
@import url('assets/move-bar.scss');
@import 'node_modules/vuetify/src/styles/settings/_variables.scss';


.side-card {
  height: 100%;
}

.skill-title {
  color: #929292 !important;
  float: left;
}

.base {
    height: 100%;
}

.skills {
    height: 100%;
    h4 {
      color: #929292 !important;
      font-weight: 100;
      padding-top: 10px;
    }
}

.skill-itmes {
  width: 380px;
  min-height: 30px;
}

.v-list-item__content {
  padding: 6px 0;
}

.skill-box {
  width: 350px;
  margin: auto;
}

.skill-itmes p {
  color: #929292;
  float: left;
  margin: 0;
} 

.pics {
  padding-top: 200px;
}

.logs {
  width: 100px;
  margin: 20px auto;
  display: block;
}

.right {
  padding-left: 0px;
}
.left {
  padding-right: 0px;
}

@media #{map-get($display-breakpoints, "md-only")} {
  .right {
    padding-left: 50px;
  }

  .left {
    padding-right: 50px;
  }

}
</style>