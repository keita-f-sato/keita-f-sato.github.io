<template>
    <v-navigation-drawer 
      app 
      right 
      permanent
      overlay-opacity=1
      mini-variant
      width=192 
      color=#fff
    >
        <v-list rounded class="menulist">
            <v-list-item v-for="menu in menues" :key="menu.title" :to="menu.link" link>
                <v-list-item-icon>
                  <v-icon>{{ menu.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="menu">{{ menu.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <div v-bind:class="[$vuetify.breakpoint.smAndDown === true ? 'scroll-sm loading' : 'scroll loading']">
            <span>S</span>
            <span>C</span>
            <span>R</span>
            <span>O</span>
            <span>L</span>
            <span>L</span>
        </div>
    </v-navigation-drawer>
</template>

<script>
export default{
    data () {
        return {
            drawer: true,
            menues : [
                { title: 'Top', link: '/top', icon: 'fas fa-home'},
                { title: 'About', link: '/about', icon: 'fas fa-user'},
                { title: 'Work', link: '/work', icon: 'fas fa-wrench'},
                { title: 'Skill', link: '/skill', icon: 'fas fa-code'},
                { title: 'Contact', link: '/contact', icon: 'fas fa-phone-square'},
            ]
        }
    },
    watch: {
      group () {
        this.drawer = true
      }
    }
}
</script>

<style>
@import url('assets/scroll.scss');
.menu {
    color: #929292 !important;
}

.menulist {
    position: absolute !important;
    top: 33% ;
}

.v-navigation-drawer__border {
  background-color: #fff !important;
}
</style>