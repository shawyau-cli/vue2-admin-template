import Vue from 'vue';
const files = require.context('.', false, /\.js$/);
const filters = {};

files.keys().forEach((key) => {
  if (key === './index.js') return;
  filters[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
