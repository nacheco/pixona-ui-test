import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Poppins', 'sans-serif'] 
  		},
  		colors: {
  			primary: '#4489EE',
  			indigo: {
  				'600': '#7C3AED',
  				'700': '#6D28D9'
  			},
  			purple: {
  				'100': '#F3E8FF',
  				'500': '#A855F7'
  			}
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'grid-pattern': 'linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)',
  			'button-gradient': 'linear-gradient(to right, #4489EE 0%, #4489EE 51%, #5B9BFA 100%)',
  			'page-gradient': 'linear-gradient(to bottom, transparent 0%, #DAE9FF 37%, transparent 76%)',
  			'heading-gradient': 'radial-gradient(circle, #000000 0%, #3F86F1 100%)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
