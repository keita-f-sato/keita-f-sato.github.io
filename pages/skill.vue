<template>
  <v-content>
      <Menu />
      <v-container fluid pa-0 fill-height ma-0>
        <v-layout>
          <v-flex xs12 s12 md12 lg12 order-lg1 order-sm1>
            <v-card tile flat class="base">
              <v-card-title
                v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'justify-center skill-main-title sm' : 'justify-center skill-main-title']">
                  SKILL
              </v-card-title>
              <div v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'bartitle skill sm' : 'bartitle skill']" />
              <v-card-text v-bind:class="[$vuetify.breakpoint.xs === true ? 'justify-center tokui-title sm' : 'justify-center tokui-title']">
                スキル
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid pa-0 fill-height ma-0>
          <v-layout>
            <v-flex xs12 s12 md12 lg12 order-lg1 order-sm1>
              <v-card tile flat class="skills">
                <v-list-item v-for="skill_item in skills" :key="skill_item.skill" v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'v-list-item skill-itmes sm' : 'v-list-item skill-itmes']">
                  <v-list-item-content>
                    <v-list-item-title v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'skill-title sm' : 'skill-title']">{{ skill_item.skill }}</v-list-item-title>
                  </v-list-item-content>
                  <v-rating
                    :value=skill_item.rate
                    color="amber"
                    dense
                    half-increments
                    readonly
                    :size="[$vuetify.breakpoint.smAndDown === true ? '10' : '14']"
                  ></v-rating>
                </v-list-item>
              </v-card>
            </v-flex>
          </v-layout>
      </v-container>
  </v-content>
</template>


<script>
import Menu from '~/components/menu.vue'

export default {
  data () {
        return {
            skills : [
                { skill: 'python', rate: '5'},
                { skill: 'Fusion360', rate: '4.5'},
                { skill: '複合材料工学', rate: '4.5'},
                { skill: '機械設計', rate: '4.5'},
                { skill: 'Pytorch', rate: '4'},
                { skill: 'Julia', rate: '4'},
                { skill: 'PX4/Arudpilot', rate: '4'},
                { skill: '制御工学', rate: '4'},
                { skill: 'vue.js/nuxt.js', rate: '3.5'},
                { skill: 'HTML/CSS/Javascript', rate: '3.5'},
                { skill: 'AWS', rate: '3.5'},
                { skill: 'Wordpress', rate: '3.5'},
                { skill: 'C++', rate: '3'},
                { skill: 'タンパク質工学', rate: '3'},
                { skill: 'OpenFOAM', rate: '2.5'},
                { skill: 'Rust', rate: '2'},
                { skill: 'Azure', rate: '2'},
                { skill: 'GO', rate: '1'},
            ],
        }
  },
  components: {
     Menu
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Tangerine&display=swap');
@import url('https://fonts.googleapis.com/css?family=Kosugi&display=swap');
@import url('assets/move-bar.scss');

.skill-main {
  position: relative;
  background-color: #fff !important;
  height: 100%;
}

.skill-main-title {
  position: absolute;
  color: #929292 !important;
  font-family: 'Tangerine', cursive !important;
  font-size: 60pt !important;
  top: 29% !important;
  width: 100%;
}

.skill-main-title.sm {
  font-size: 45pt !important;
}

.tokui-title {
  font-family: 'Kosugi', sans-serif;
  position: absolute;
  color: #929292 !important;
  font-size: 30pt !important;
  top: 90%;
  left:42%;
  border-bottom: solid 1px ;
  border-left: solid 0px ;
  border-right: solid 0px ;
  border-top: solid 0px ;
  border-image: url("/gradient.png") 1 stretch;
  border-image-slice: 1;
}

.tokui-title.sm {
  font-size: 19pt !important;
  left: 24%;
  width: 40%;
}

.base {
    height: 100%;
}

.skills {
    height: 100%;
}

.skill-title {
    color: #929292 !important;
}

.skill-title.sm {
    font-size: 10pt !important;
}

.v-list-item.skill-itmes {
    width:50% !important;
    left:27%;
}

.v-list-item.skill-itmes.sm {
    width: 80% !important;
    left:2%;
}

.bartitle.skill {
  top: 36% ;
  position: absolute;
  width: 62%;
}

.bartitle.skill.sm {
  width: 86%;
}

.earo-bar.skill {
  border-bottom: solid 1px ;
  border-image: url("/gradient.png") 1 stretch;
  border-image-slice: 1;
  top: 100%;
  position: absolute;
  width: 90pt;
}

.earo-bar.skill.sm {
  width: 105%;
}
</style>