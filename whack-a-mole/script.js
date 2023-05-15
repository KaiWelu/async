Vue.createApp({
  data() {
    return {
      seconds: 0,
      points: 0,
      top: "",
      left: "",
    };
  },
  computed: {
    isActive() {
      if (this.seconds === 0) {
        return false;
      } else {
        return true;
      }
    },
    randomDistance() {
      return this.getRandomIntInclusive(1, 95);
    },
    position() {
      return {
        top: this.top,
        left: this.left,
      };
    },
  },
  methods: {
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    startGame() {
      this.seconds = 5;
      this.points = 0;
      const decrement = setInterval(() => {
        if (this.isActive) {
          this.seconds--;
          this.changePosition();
        } else {
          clearInterval(decrement);
        }
      }, 1000);
    },
    whack() {
      if (this.isActive) {
        this.points++;
        this.changePosition();
      }
    },
    changePosition() {
      (this.top = this.getRandomIntInclusive(1, 80).toString() + "%"),
        (this.left = this.getRandomIntInclusive(1, 80).toString() + "%");
    },
  },
}).mount("#app");
