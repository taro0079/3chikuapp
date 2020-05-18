<template>
  <v-app>
    <div>
      <v-app-bar 
        color="deep-purple accent-4"
        dark>
        <img src="@/assets/icon3chiku.png"/>
        <v-toolbar-title class="pa-5">第三地区のアプリ</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon to="/"><v-icon>mdi-home</v-icon></v-btn>
      </v-app-bar>
    </div>
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>

export default {

  data: () => ({
    //
  }),
};
</script>
