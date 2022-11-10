module.exports = {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Helvetica Neue",
        "Inter",
        "Helvetica",
        "Arial",
        "Montserrat",
        "Source Sans Pro",
        "Roboto",
      ],
    },
    extend: {
      screens: {
        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1800px",
      },
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "1/20": "5%",
        "2/20": "10%",
        "3/20": "15%",
        "4/20": "20%",
        "5/20": "25%",
        "6/20": "30%",
        "7/20": "35%",
        "8/20": "40%",
        "9/20": "45%",
        "10/20": "50%",
        "11/20": "55%",
        "12/20": "60%",
        "13/20": "65%",
        "14/20": "70%",
        "15/20": "75%",
        "16/20": "80%",
        "17/20": "85%",
        "18/20": "90%",
        "19/20": "95%",
        "9/50": "18%",
        "11/50": "22%",
        "12/50": "24%",
        "24/50": "48%",
        "18/100": "18%",
        "19/100": "19%",
        "23/100": "23%",
        12: "3rem",
        14: "3.5rem",
        18: "4.5rem",
        28: "7rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        100: "25rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        160: "40rem",
        168: "42rem",
        172: "44rem",
        180: "45rem",
        200: "50rem",
        240: "60rem",
      },
      minWidth: {
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        28: "7rem",
        48: "12rem",
        56: "14rem",
      },
      maxWidth: {
        0: "0",
      },
      height: {
        "1/2": "50%",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "1/20": "5%",
        "2/20": "10%",
        "3/20": "15%",
        "4/20": "20%",
        "5/20": "25%",
        "6/20": "30%",
        "7/20": "35%",
        "8/20": "40%",
        "9/20": "45%",
        "10/20": "50%",
        "11/20": "55%",
        "12/20": "60%",
        "13/20": "65%",
        "14/20": "70%",
        "15/20": "75%",
        "16/20": "80%",
        "17/20": "85%",
        "18/20": "90%",
        "19/20": "95%",
        "9/50": "18%",
        "11/50": "22%",
        "12/50": "24%",
        "19/100": "19%",
        "23/100": "23%",
        14: "3.5rem",
        18: "4.5rem",
        28: "7rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        100: "25rem",
        120: "30rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        168: "42rem",
        172: "44rem",
        180: "45rem",
        200: "50rem",
        240: "60rem",
      },
      minHeight: {
        6: "1.5rem",
        10: "2.5rem",
        32: "8rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
        128: "32rem",
        200: "50rem",
        224: "56rem",
      },
      padding: {
        40: "10rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        112: "28rem",
      },
      margin: {
        "-4": "-1rem",
        "-8": "-2rem",
        40: "10rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        112: "28rem",
      },
      borderWidth: {
        3: "3px",
        5: "5px",
        6: "6px",
      },
      opacity: {
        10: 0.1,
        20: 0.2,
        30: 0.3,
        40: 0.4,
        50: 0.5,
        60: 0.6,
        70: 0.7,
        80: 0.8,
        90: 0.9,
        95: 0.95,
        99: 0.99,
      },
      zIndex: {
        "-10": -10,
        "-40": -40,
        1: 1,
        100: 100,
        200: 200,
        300: 300,
      },
      colors: {
        "black-50": "rgba(0, 0, 0, 0.5)",
        "black-80": "rgba(0, 0, 0, 0.8)",
        "white-5": "rgba(255, 255, 255, 0.05)",
        "white-10": "rgba(255, 255, 255, 0.1)",
        "white-20": "rgba(255, 255, 255, 0.2)",
        "white-30": "rgba(255, 255, 255, 0.3)",
        "white-40": "rgba(255, 255, 255, 0.4)",
        "white-50": "rgba(255, 255, 255, 0.5)",
        "white-60": "rgba(255, 255, 255, 0.6)",
        "white-70": "rgba(255, 255, 255, 0.7)",
        "white-80": "rgba(255, 255, 255, 0.8)",
        "white-85": "rgba(255, 255, 255, 0.85)",
        "white-90": "rgba(255, 255, 255, 0.9)",
        "white-95": "rgba(255, 255, 255, 0.95)",
        "white-96": "rgba(255, 255, 255, 0.96)",
        "white-98": "rgba(255, 255, 255, 0.98)",
        "white-99": "rgba(255, 255, 255, 0.99)",
        "black-2": "rgba(0, 0, 0, 0.02)",
        "black-4": "rgba(0, 0, 0, 0.04)",
        "black-5": "rgba(0, 0, 0, 0.05)",
        "black-8": "rgba(0, 0, 0, 0.08)",
        "black-10": "rgba(0, 0, 0, 0.1)",
        "black-20": "rgba(0, 0, 0, 0.2)",
        "black-30": "rgba(0, 0, 0, 0.3)",
        "black-40": "rgba(0, 0, 0, 0.4)",
        "black-50": "rgba(0, 0, 0, 0.5)",
        "black-60": "rgba(0, 0, 0, 0.6)",
        "black-70": "rgba(0, 0, 0, 0.7)",
        "black-80": "rgba(0, 0, 0, 0.8)",
        "black-90": "rgba(0, 0, 0, 0.9)",
        "black-95": "rgba(0, 0, 0, 0.95)",
        "black-98": "rgba(0, 0, 0, 0.98)",
        "columbia-gray": "rgb(238, 238, 238)",
        "columbia-light-gray": "rgb(245, 245, 245)",
        "columbia-light-gray-80": "rgba(245, 245, 245, 0.8)",
        "columbia-light-gray-90": "rgba(245, 245, 245, 0.9)",
        "columbia-light-gray-95": "rgba(245, 245, 245, 0.95)",
        "columbia-dark-gray": "rgb(230, 230, 230)",
        "columbia-dark-gray2": "rgb(200, 200, 200)",
        "columbia-blue": "rgb(29, 79, 145)",
        "columbia-blue-5": "rgba(29, 79, 145, 0.05)",
        "columbia-blue-10": "rgba(29, 79, 145, 0.1)",
        "columbia-blue-20": "rgba(29, 79, 145, 0.2)",
        "columbia-blue-30": "rgba(29, 79, 145, 0.3)",
        "columbia-blue-40": "rgba(29, 79, 145, 0.4)",
        "columbia-blue-50": "rgba(29, 79, 145, 0.5)",
        "columbia-blue-60": "rgba(29, 79, 145, 0.6)",
        "columbia-blue-70": "rgba(29, 79, 145, 0.7)",
        "columbia-blue-80": "rgba(29, 79, 145, 0.8)",
        "columbia-blue-90": "rgba(29, 79, 145, 0.9)",
        "columbia-blue-95": "rgba(29, 79, 145, 0.95)",
        "columbia-blue-98": "rgba(29, 79, 145, 0.98)",
        "columbia-blue-99": "rgba(29, 79, 145, 0.99)",
        "columbia-secondary-blue": "rgb(108, 173, 223)",
        "columbia-secondary-blue-5": "rgba(108, 173, 223, 0.05)",
        "columbia-secondary-blue-10": "rgba(108, 173, 223, 0.1)",
        "columbia-secondary-blue-20": "rgba(108, 173, 223, 0.2)",
        "columbia-secondary-blue-30": "rgba(108, 173, 223, 0.3)",
        "columbia-secondary-blue-40": "rgba(108, 173, 223, 0.4)",
        "columbia-secondary-blue-50": "rgba(108, 173, 223, 0.5)",
        "columbia-secondary-blue-60": "rgba(108, 173, 223, 0.6)",
        "columbia-secondary-blue-70": "rgba(108, 173, 223, 0.7)",
        "columbia-secondary-blue-80": "rgba(108, 173, 223, 0.8)",
        "columbia-secondary-blue-85": "rgba(108, 173, 223, 0.85)",
        "columbia-secondary-blue-90": "rgba(108, 173, 223, 0.9)",
        "columbia-secondary-blue-95": "rgba(108, 173, 223, 0.95)",
        "columbia-secondary-blue-98": "rgba(108, 173, 223, 0.98)",
        "columbia-secondary-blue-99": "rgba(108, 173, 223, 0.99)",
        "columbia-button-blue": "#008EE0",
        "columbia-footer": "rgb(65, 81, 108)",
        "columbia-footer-80": "rgb(65, 81, 108, 0.8)",
        "columbia-footer-90": "rgb(65, 81, 108, 0.9)",
        "default-color": "rgb(20, 20, 20)",
        "default-blue": "rgba(0, 51, 102)",
        "default-blue-light": "rgba(0, 51, 102, 0.75)",
        "default-white": "rgba(255, 255, 255, 0.98)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 0 15px -3px rgba(0, 0, 0, 0.2)",
        "flat-card": "0 0 20px rgba(0, 0, 0, 0.02)",
        day: "0 0 10px rgba(0, 0, 0, 0.1)",
        "slide-menu": "0 20px 30px rgba(0, 0, 0, 0.5)",
        header: "0 0 20px rgba(0, 0, 0, 0.02)",
        menu: "0 0 20px rgba(0, 0, 0, 0.25)",
        "card-lg": "0 0 25px rgba(0, 0, 0, 0.15)",
        "square-card": "0 0 20px rgba(0, 0, 0, 0.05)",
        "square-card-lg": "0 0 20px rgba(0, 0, 0, 0.1)",
        button: "0 0 10px rgba(0, 0, 0, 0.2)",
        "button-lg": "0 0 10px rgba(0, 0, 0, 0.3)",
      },
      transitionProperty: {
        width: "width",
        height: "height",
        spacing: "margin, padding",
        filter: "filter, opacity, color",
      },
      scale: {
        102: "1.02",
      },
      transitionDuration: {
        400: "400ms",
      },
      inset: {
        "-2": "-0.5rem",
        "-4": "-1rem",
        "-8": "-2rem",
        "-12": "-3rem",
      },
      gridTemplateColumns: {
        // Simple 20 column grid
        20: "repeat(20, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-18": "span 18 / span 18",
      },
    },
  },
  plugins: [],
}
