<!-- 日付データピッカーのコンポーネント-->
<template>
<v-menu
    ref="startMenu"
    v-model="startMenu"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="start"
    transition="scale-transition"
    min-width="290px"
    offset-y>
    <template v-slot:activator="{ on }">
        <v-text-field
        v-model="start"
            label="対象日付"
            prepend-icon="mdi-calendar-blank"
            dense
            readonly
            outlined
            hide-details
            v-on="on"
        ></v-text-field>
    </template>
    <v-date-picker
        v-model="start"
        no-title
        scrollable
        >
        <v-spacer></v-spacer>
        <v-btn
        text
        color="primary"
        @click="startMenu = false"
        > Cancel

        </v-btn>
        <v-btn
        text
        color="primary"
        @click="$refs.startMenu.save(start)"
        >
        OK
        </v-btn>
    </v-date-picker>
</v-menu>
</template>
<script>
export default {
   data: ()  => ({
       startMenu: false,
       start: null 

   })
}
</script>