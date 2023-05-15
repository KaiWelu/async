Vue.createApp({
  data() {
    return {
      seconds: 0,
      points: 0,
      top: "",
      left: "",
      hasMoved: false,
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
      if (this.isActive === false) {
        this.seconds = 15;
        this.points = 0;
        const decrement = setInterval(() => {
          if (this.isActive && !this.hasMoved) {
            this.seconds--;
            this.changePosition();
          } else if (this.isActive && this.hasMoved) {
            this.seconds--;
            this.hasMoved = false;
          } else {
            clearInterval(decrement);
          }
        }, 1000);
      }
    },
    whack() {
      if (this.isActive) {
        this.points++;
        this.changePosition();
      }
    },
    changePosition() {
      this.top = this.getRandomIntInclusive(1, 90).toString() + "%";
      this.left = this.getRandomIntInclusive(1, 90).toString() + "%";
      this.hasMoved = true;
    },
  },
}).mount("#app");
