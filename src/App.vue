<template>
  <v-app>
    <v-overlay :value="loader"></v-overlay>
    <v-content>
      <v-pagination
              @input="fetchUsers"
              v-model="page"
              :length="pagination.total_pages"
              :total-visible="7"
      ></v-pagination>
      <users-list></users-list>
    </v-content>

  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',

  components: {
    usersList: () => import('@/components/usersList')
  },
  data: () => ({
    page: 1
  }),
  computed: {
    ...mapGetters({
      pagination: 'app/pagination',
      loader: 'app/loader'
    })
  },
  methods: {
    ...mapActions({
      fetchData: 'app/fetchData',
      toggleLoader: 'app/toggleLoader'
    }),
    fetchUsers(page) {
      this.toggleLoader(true)
      this.fetchData({ query: 'users', params: { page }})
    }
  },
  created() {
    this.fetchUsers(this.page)
  }
}
</script>
