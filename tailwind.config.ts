import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#142687',
        white: '#FFFFFF',
        background: '#DEE6EB',
        black: '#000000',
        gradientFrom: '#1F3D8E',
        gradientTo: '#3D76E4',
        gray: '#E5E7EB',
        warning: '#E12D2C',
        link: '#0055CC',
        green: '#54B206',
      },
      fontWeight: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '800',
        extrabold: '900',
        black: '950',
      },
    },
  },
  plugins: [],
};
export default config;
