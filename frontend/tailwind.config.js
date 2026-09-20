module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#17b153",
        secondary: "#0F172A",
        success: "#16A34A",
        danger: "#DC2626",
        warning: "#F59E0B",
        border: "#E2E8F0",
        textPrimary: "#0F172A",
        textSecondary: "#64748B",
        background: "#F8FAFC",
      },

      animation: {
        slide: "slide 2.5s linear infinite",
      },

      keyframes: {
        slide: {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0.1,
          },
          "15%": {
            transform: "translateY(0)",
            opacity: 1,
          },
          "30%": {
            transform: "translateY(0)",
            opacity: 1,
          },
          "45%": {
            transform: "translateY(-100%)",
            opacity: 1,
          },
          "100%": {
            transform: "translateY(-100%)",
            opacity: 0.1,
          },
        },
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};