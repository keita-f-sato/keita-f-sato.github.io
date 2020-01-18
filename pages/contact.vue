<template>
  <v-content>
      <Menu />
      <v-container fluid pa-0 fill-height ma-0>
        <v-layout>
          <v-flex xs12 s12 md12 lg12 order-lg1 order-sm1>
            <v-card tile flat height="100%">
              <v-card-title
                v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'justify-center contact-title sm' : 'justify-center contact-title']">
                  Contact
              </v-card-title>
              <div v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'bartitle contact sm' : 'bartitle contact']" />
              <div class="text-center email mx-auto">
                <div v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'email-detail sm' : 'email-detail']">
                    <em>j7w1felix-sts136[at]outlook.com</em><br>
                    （メールアドレスの[at]は＠記号に置き換えてください）<br><br>
                </div>
                <a href="https://qiita.com/keta-sts136">
                    <img src="qiita-favicon.png" v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'qiita sm' : 'qiita']"/>
                </a>
                <a href="https://github.com/keita-f-sato">
                    <v-icon large>fab fa-github-square</v-icon>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100008217198305">
                    <v-icon large>fab fa-facebook-square</v-icon>
                </a>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </v-content>
</template>

<script>
import Menu from '~/components/menu.vue'

export default{
    components: {
      Menu
    },
    data () {
        return {
        }
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Tangerine&display=swap');
@import url('https://fonts.googleapis.com/css?family=Kosugi&display=swap');
@import url('assets/move-bar.scss');

.contact-title {
  position: absolute;
  color: #929292 !important;
  font-family: 'Tangerine', cursive !important;
  font-size: 60pt !important;
  top: 35% !important;
  width: 100%;
}

.contact-title.sm {
  font-size: 45pt !important;
}

.bartitle.contact {
  top: 45% ;
  position: absolute;
  width: 62%;
}

.bartitle.contact.sm {
  width: 80%;
}

.email {
  color: #929292 !important;
  position: relative;
  top: 50%;
  width: 310pt;
}

.email-detail {
    font-size: 12pt !important;
}

.email-detail.sm {
    font-size: 10pt !important;
    margin: auto;
    width: 50%;
}

.qiita {
    width: 24pt;
    left: 102pt;
    top: 56pt;
    position: absolute;
}

.qiita.sm {
    width: 24pt;
    left: 42pt;
    top: 58pt;
    margin-left: 60pt;
    position: absolute;
}
</style>