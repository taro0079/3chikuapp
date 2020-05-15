<template>
    <div>
        <v-row>
            <v-col
                v-for="(item, i) in items"
                :key=i
                cols="12"
                md="4">
                <v-card
                    :color="item.color"
                    :to="item.link"
                    dark>
                    <v-card-title v-text="item.title"></v-card-title>
                    <v-card-subtitle v-text="item.subtitle"></v-card-subtitle>
                    <v-card-actions>
                        <v-btn text> Go </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    data: () => ({
        items: [
            {
                color: 'deep-purple accent-1',
                title: '交通費申請',
                subtitle: '交通費申請フォームです。',
                link: 'shinsei'
            },
            {
                color: 'deep-purple accent-2',
                title: 'メンバー追加',
                subtitle: '交通費申請のメンバーを追加します。既存メンバーは必要ありません。',
                link: 'addmember'
            },
            {
                color: 'deep-purple accent-3',
                title: '申請履歴の閲覧',
                subtitle: '過去の申請履歴を閲覧することができます。',
                link: 'viewpast'
            },
            {
                color: 'deep-purple accent-4',
                title: 'たろうを讃える',
                subtitle: 'インターネットを介してもたろうを讃えることができます。',
                link: 'taro'

            }
        ]
    })
}
</script>