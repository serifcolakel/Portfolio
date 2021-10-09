module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    animation: {
      "bounce-slow": "bounce 3s linear infinite",
      // "ping-slow": "ping 3s linear infinite",
    },

    colors: {
      "brand-yellow": "#FFFF00",
      "brand-color": "#000000",
      "brand-gray": "#efefef",
      "background-aboutme": "#8B8B8B",
      "blue-background": "#2941ab",
      "def-text-color": "#1a0413",
      "primary-brand-color": "#5d3ebc",
      "primary-white": "#FFFFFF",
      "primary-green": "#1ed760",
      "secondary-brand-color": "#9bfde1",
      "button-brand-color": "#B4FEE9",
      "image-color": "#030303",
      "image-color-1": "#fb5b0f",
    },
    backgroundImage: (theme) => ({
      bghome:
        "linear-gradient(75deg, rgba(251,91,15,1) 32%, rgba(17,17,17,1) 0%)",
      bgcontact:
        "linear-gradient(110deg, rgba(17,17,17,1) 58%, rgba(251,91,15,1) 58%)",
      bgskills:
        "linear-gradient(35deg,rgba(251,91,15,0.7) 10%, rgba(17,17,17,0.7) 90%)",
      "free-bg":
        "url('https://content-tooling.spotifycdn.com/images/b236bf87-bfd5-4bcb-b51a-77881073039c_lie_circles.svg')",
      "mobile-bg":
        "url('https://content-tooling.spotifycdn.com/images/af63e367-ad10-4063-a8e2-5a50ae2a4b28_lie_circles-mobile.svg')",
    }),
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
