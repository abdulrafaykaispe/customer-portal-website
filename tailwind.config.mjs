/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1200px",
    },

    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },

      backgroundColor: {
        "-page": "#FFFFFF",
        "-header": "#FFFFFF",
        "-footer": "#343351",
        "-button": "#473BF0",
      },

      colors: {
        "-purply-blue": "#473BF0",
        "-jungle-black": "#1F1F1F",
        "-jungle-green": "#202020",
        "-carbon-gray": "#606060",
        "-silver-chalice": "#A9A9A9",
        "-tealish-blue": "#00194C",
        "-mulled-wine": "#484770",
        "-pale-sky": "#71747F",
        "-quill-gray": "#D2D2D2",
        "-gun-smoke": "#7D808A",
        "-dove-gray": "#6E6E6E",
        "-boulder": "#767676",
        "-titan-white": "#F0EEF7",
        "-blue-chalk": "#E6EEFF",
        "-thunder": "#2F2F2F",
        "-bright-blue": "#0055FF",
        "-dawn-pink": "#EBEBEB",
        "-dodger-blue": "#3C7CFC",
        "-davy-gray": "#595959",
        "-ghost-white": "#F9F9FF",
        "-dune": "#333333",
        "-tuna": "#343351",
        "-platinum": "#E2E2E2",
        "-alabaster": "#F8FAFF",
        "-black-cow": "#474747",
        "-mercury": "#E5E5E5",
        "-smokey-gray": "#747474",
        "-soap-stone": "#FCFCFC",
        "-battleship-gray": "#828282",
        "-gray-goose": "#CECECE",
        "-red-orange": "#FF3939",
        "-cyan-blue": "#E9ECEF",
        "-catskill-white": "#F3F4F9",
      },

      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },

    animation: {
      "move-left": "move-left 1s linear infinite",
      "move-right": "move-right 1s linear infinite",
    },

    keyframes: {
      "move-left": {
        "0%": {
          transform: "translateX(0%)",
        },
        "100%": {
          transform: "translateX(-50%)",
        },
      },

      "move-right": {
        "0%": {
          transform: "translateX(-50%)",
        },
        "100%": {
          transform: "translateX(0%)",
        },
      },
    },
  },
};

module.exports = tailwindConfig;
