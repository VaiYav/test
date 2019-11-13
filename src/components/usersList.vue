<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-row
                    align="center"
                    justify="center"
                    class="grey lighten-5"
                >
                    <user v-for="(userData, userDataIndex) in data('users')" :data="userData" :key="userDataIndex"></user>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UsersList',
  components: {
    user: () => import('@/components/user')
  },
  computed: {
    ...mapGetters({
      data: 'app/data'
    })
  }
}
</script>

<style scoped>

</style>
