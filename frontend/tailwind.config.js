/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        a1: "#ffd241",
        b3: "#48398e",
        w3: "#100c08",
        b2: "#00b4d5",
        w1: "#f3f3f2",
        "background-default-default": "#fff",
        v3: "#055f56",
        "w1-85-op": "rgba(243, 243, 242, 0.85)",
        gray: {
          "100": "rgba(255, 255, 255, 0.6)",
          "200": "rgba(0, 0, 0, 0.2)",
          "300": "rgba(16, 12, 8, 0.6)",
        },
        v2: "#a2c62c",
        gainsboro: "#dcdcdc",
        black: "#000",
        r3: "#e51e35",
        gradientpacha: "#fef7af",
        r1: "#e94268",
        b1: "#592672",
        v1: "#307558",
        "border-default-default": "#d9d9d9",
        whitesmoke: "rgba(243, 243, 242, 0.6)",
      },
      spacing: {
        "space-200": "8px",
      },
      fontFamily: {
        montserrat: "Montserrat",
        "single-line-body-base": "Inter",
        "m3-label-small": "Roboto",
      },
      borderRadius: {
        "281xl": "300px",
        "3xs": "10px",
        "8xs": "5px",
        "81xl": "100px",
        "radius-200": "8px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      "5xl": "24px",
      lg: "18px",
      "3xs": "10px",
      xl: "20px",
      "2xs": "11px",
      lgi: "19px",
      sm: "14px",
      "5xs": "8px",
      "4xs": "9px",
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
