export default {
  profile: {
    name: "Saul Paredes",
    image: "profile.jpg",
    onclick() {
      console.log("Hola");
    },
  },
  items: [
    {
      id: 0,
      title: "Home",
      icon: "fa-house-user",
      onClick() {
        console.log("Home");
      },
    },
    {
      id: 1,
      title: "Reports",
      icon: "fa-screwdriver-wrench",
      onClick() {
        console.log("Reports");
      },
    },
    {
      id: 2,
      title: "About",
      icon: "fa-fire",
      onClick() {
        console.log("About");
      },
    },
  ],
};
