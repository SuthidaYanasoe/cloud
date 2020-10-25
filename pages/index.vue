<template>
  <div>
    <h3>Shipping</h3>
    <br />
    <v-form ref="form" v-model="valid">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="name"
            prepend-icon="mdi-account"
            label="Fullname"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="address"
            prepend-icon="mdi-home"
            label="Address line"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="city"
            label="City"
            prepend-icon="mdi-home"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="state"
            prepend-icon="mdi-home"
            label="State/Province/Region"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="zip"
            label="Zip/Postal Code"
            prepend-icon="mdi-home"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="country"
            label="Country"
            prepend-icon="mdi-home"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="phone"
            prepend-icon="mdi-cellphone"
            label="Phone number"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn :disabled="!valid" color="error" @click="addData"> Submit </v-btn>
    </v-form>
  </div>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      valid: false,
      zip: '',
      country: '',
      state: '',
      city: '',
      address: '',
      phone: '',
      name: '',
      arr: {},
    }
  },
  methods: {
    addData() {
      const data = {
        phone: this.phone,
        name: this.name,
        zip: this.zip,
        country: this.country,
        state: this.state,
        city: this.city,
        address: this.address,
      }
      db.collection('payment')
        .doc()
        .set(data)
        .then(function () {
          console.log('Document successfully written! -> MyForm')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>
<style>
.theme--dark.v-application {
  background-image: url(https://i.pinimg.com/originals/10/da/c1/10dac177e7b22cd1f368ecb50f5dd9ef.gif);
  background-size: cover;
  max-width: 1920px;
  max-height: 1080px;
}
</style>
