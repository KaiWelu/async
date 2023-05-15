Vue.createApp({
  data() {
    return {
      isHidden: true,
      randomTime: 1,
    };
  },
  methods: {
    booMe() {
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      this.randomTime = getRandomIntInclusive(1, 4) * 1000;
      setInterval(() => {
        this.isHidden = false;
      }, this.randomTime);
      setInterval(() => {
        this.isHidden = true;
        this.randomTime = getRandomIntInclusive(1, 4) * 1000;
      }, this.randomTime * 2);
    },
  },
  async created() {
    this.booMe();
  },
}).mount("#text-display");

// const display = document.body.querySelector("#text-display");

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
// }

// let randomTime = getRandomIntInclusive(2, 4) * 1000;
// setInterval(() => {
//   display.textContent = "Booo!";
// }, randomTime);

// setInterval(() => {
//   display.textContent = "";
// }, randomTime * 2);
