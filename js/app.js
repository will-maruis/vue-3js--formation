const app = Vue.createApp({
  data() {
    return {
      icon: "😉******",
      showIcon: true,
      estConnecter: false,
      user: {
        name: "les profs",
        age: 25,
        city: "fuveau",
      },
    };
  },

  methods: {
    augmenterAge() {
      this.user.age++;
    },

    diminuerAge() {
      this.user.age--;
    },

    connexion() {
      this.user.name = "will";
      this.showIcon = false;
      this.estConnecter = true;
    },

    deConnexion() {
      this.user.name = "les profs";
      this.showIcon = true;
      this.estConnecter = false;
    },
  },
});

app.mount("#app");
