/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bubble1' :
          "url('https://wallstmemes.com/bubble-sm-even.bdbcace9a900fd16.svg')",
        'bubble2' :
          "url('https://wallstmemes.com/bubble-sm-odd.89b22519fbe92fb4.svg')",
          "whitepaper" : "url('/src/assets/svgs/banner-mobile.svg')",
      },
      backgroundPosition: {
        'bubble1' : "center",
        'bubble2' : "center",
        'whitepaper' : 'center',
      },
      backgroundSize : {
        'bubble1' : '100%, 100%',
        'bubble2' : '100%, 100%',
        'whitepaper' : '100%, 100%',
      },
      fontFamily: {
        samiq: ["Balsamiq Sans", "cursive"],
      },
    },
  },
  plugins: [],
};
//https://wallstmemes.com/bubble-sm-odd.89b22519fbe92fb4.svg
