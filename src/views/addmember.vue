<template>
<div>
    <v-row>
        <v-col>
            <p class="display-1">メンバー追加</p>
        </v-col>
    </v-row>
    <v-row>
        <v-col
            v-for="(item, i) in items"
            :key=i>
            <v-text-field
                :v-model="item.name"
                :label="item.label"
            ></v-text-field>
        </v-col>
    </v-row>
    <v-row class="text-center">
        <v-col>
            <v-btn color="success">submit</v-btn>
        </v-col>
    </v-row>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        items: [
            {
                name: 'name',
                label: '名前を入力してください',
                rule: 'namerule',
            },
            
        ]
            


    }),
    methods: {
        pForm: function() {
            axios.post('http;//localhost:8000/adduser', )
        }
    }
}
</script>