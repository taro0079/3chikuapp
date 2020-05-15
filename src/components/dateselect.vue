<template v-slot:activator="{ on }">
    <v-text-field
    v-model="date"
        label="対象日付"
        prepend-icon="mdi-calendar-blank"
        readonly
        v-on="on"
    ></v-text-field>
</template>