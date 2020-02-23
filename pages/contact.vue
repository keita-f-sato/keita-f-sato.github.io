<template>
  <v-content>
      <Menu />
      <Title title="Contact" />
      <div class="text-center justify-center email">
        <div v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'email-detail sm' : 'email-detail']">
          <em>j7w1felix-sts136[at]outlook.com</em><br>
          メールアドレスの[at]は＠記号に置き換えてください<br><br>
        </div>
        <div class="icons">
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
      </div>
      <Star/>
  </v-content>
</template>

<script>
import Menu from '~/components/menu.vue'
import Title from '~/components/DetailTaitle.vue'
import Star from '~/components/star.vue'


export default{
    components: {
      Menu,
      Title,
      Star
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
  top: 37% !important;
  font-size: 45pt !important;
  left: -6%;
}

.email {
  color: #929292 !important;
  position: relative;
  top: -50%;
}

.email-detail {
    position: relative;
    font-size: 12pt !important;
}

.email-detail.sm {
    font-size: 10pt !important;
    width: 50%;
    margin: auto;
}

.icons {
    position: relative;
    width: 280pt;
    margin: auto;
}

.qiita {
    width: 24pt;
    left: 87pt;
    top: 1pt;
    position: absolute;
}

.qiita.sm {
    width: 24pt;
    left: 28pt;
    top: 1pt;
    margin-left: 60pt;
    position: absolute;
}

.v-content {
    padding: 0px 0px 0px 0px !important;
}
</style>