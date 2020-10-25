<template>
  <div>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="textList"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      textList: [],
      search: '',
      headers: [
        { text: 'Fullname', align: 'start', sortable: 'false', value: 'name' },
        { text: 'Phone number', value: 'phone' },
        { text: 'Address line', value: 'address' },
        { text: 'City', value: 'city' },
        { text: 'State/Province/Region', value: 'state' },
        { text: 'Zip/Postal Code', value: 'zip' },
        { text: 'Country', value: 'country' },
      ],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      db.collection('payment')
        .orderBy('name')
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
          })
          this.textList = data
        })
    },
  },
}
</script>
