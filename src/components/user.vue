<template>
    <v-card
            class="mx-auto"
            max-width="344"
            outlined
    >
        <v-list-item three-line>
            <v-list-item-content>
                <div class="overline mb-4">{{data.email}}</div>
                <v-list-item-title class="headline mb-1">User</v-list-item-title>
                <v-list-item-subtitle>{{data.first_name}} {{data.last_name}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
            >
                <v-img
                        height="80"
                        width="80"
                        :src="data.avatar"
                ></v-img>
            </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
            <v-btn text>Button</v-btn>
            <v-btn text>Button</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
  name: 'User',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>

</style>
