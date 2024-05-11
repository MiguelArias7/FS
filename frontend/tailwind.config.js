/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import twElementsPluglin from "tw-elements/dist/plugin.cjs";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    colors: {
      primaryAriadna: "#ffffff",
      secundary: "#58595b",
      tertiary: "#f2d031",
      gold: "#FFD700",
      text: "#1a1a1a",
      green: colors.green,
      gray: colors.gray,
      purple: colors.purple,
      blue: colors.blue,
      orange: colors.orange,
      black: colors.black,
      youtube: "#FF0000",
      instagram: "#C13584",
      facebook: "#4267B2",
      whatsapp: "#25D366",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      sans: ["ui-sans-serif", "system-ui"],
    },
    extend: {
      backgroundImage: {
        info1:
          "url('https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/423777754_812007347610218_8544977863101215504_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=m_gHIgByEn0Q7kNvgGmOa_5&_nc_ht=scontent.fclo1-4.fna&oh=00_AYD0po-XvUdaXHShRQOpeD80fQwJA1kubCTP0YgSI-bXcA&oe=6642FB10')",
        info2: "url('https://ariadnacommunicationsgroup.com/sites/default/files/2024-02/IMG%20footer-2-_11zon.webp')",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        wiggle_faster: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        fade_left: {
          "0%": {
            opacity: 0,
            transform: "translateX(-100px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fade_up: {
          "0%": {
            opacity: 0,
            transform: "translateY(-100px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fade_down: {
          "0%": {
            opacity: 0,
            transform: "translateY(100px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fade_right: {
          "0%": {
            opacity: 0,
            transform: "translateX(100px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fade: {
          "0%": {
            opacity: 0.1,
          },
          "100%": {
            opacity: 1,
          },
        },
        gradient_y: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "100% 100%",
            "background-position": "center center",
          },
        },
        rotate_minus90: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-90deg)",
          },
        },
        rotate_from_minus90: {
          "0%": {
            transform: "rotate(-90deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        rotate_plus90: {
          "0%": {
            transform: "rotate(-90deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        move_up: {
          "0%": {
            opacity: 0,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(-100px)",
          },
        },
      },
      animation: {
        slow_spin: "spin 2s linear infinite",
        wiggle: "fade_left 1s ease-in-out infinite",
        wiggle_faster: "wiggle_faster 1s ease-in-out infinite",
        fade_left: "fade_left 1s ease-in-out",
        fade_up_fast: "fade_up 0.5s ease-in-out",
        fade_up: "fade_up 1s ease-in-out",
        fade_down: "fade_down 1s ease-in-out",
        fade_up_slow: "fade_up 3s ease-in-out",
        fade_right: "fade_right 1s ease-in-out",
        fade: "fade 2s cubic-bezier(0.4, 0, 0.6, 1)",
        flip_down: "flip_down 1s ease-in-out",
        gradient_y: "gradient_y 10s ease infinite",
        rotate_minus90: "rotate_minus90 0.3s forwards",
        rotate_from_minus90: "rotate_from_minus90 1s forwards",
        rotate_plus90: "rotate_plus90 0.3s forwards",
        move_up: "move_up 1s",
      },
    },
  },
  plugins: [twElementsPluglin],
};
