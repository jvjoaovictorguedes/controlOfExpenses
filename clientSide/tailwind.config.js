/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        shadowBallon: '6px 6px 10px rgba(0,0,0,0.4)'
      },
      backgroundColor: {
        grayColor: '#84A3D6',
        relatorioColor: '#A1BFF3',
        
      }
    },
  },
  plugins: [],
}