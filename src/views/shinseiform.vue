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

        <v-row>
            <v-col>
                <v-select
                    :items="items"
                    v-model="name"
                    label="氏名"
                ></v-select>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-text-field
                    v-model="expense"
                    label="交通費"
                    id="id"
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-btn color="success" text>Submit</v-btn>
            </v-col>
            <v-col>
                <v-btn text> Cancel </v-btn>
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