Vue.createApp({
  data() {
    return {
      quote: "",
      author: "",
    };
  },
  methods: {
    getQuote() {
      let p = fetch("https://dummy-apis.netlify.app/api/quote")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.author = data.author;
          this.quote = data.quote;
        });
    },
  },
  async created() {
    this.getQuote();
  },
}).mount("#app");
