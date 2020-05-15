<template>
    <div>
        <v-row>
            <v-col>
                <p class="display-1"> 交通費申請 </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <dateselect />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import dateselect from '../components/dateselect.vue'
export default {
    components: {
        dateselect,
    },
}
</script>