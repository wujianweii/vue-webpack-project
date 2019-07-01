// import { say } from './util';
// say();

// import Vue from 'vue';
// import './style/common.scss';
// import { getData } from './util';

// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!'
//   },
//   created() {
//     this.fetchData();
//   },
//   methods: {
//     async fetchData() {
//       const data = await getData();
//       this.message = data;
//     }
//   }
// });

import Vue from 'vue';
import App from './App.vue';

import './style/common.scss';

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})