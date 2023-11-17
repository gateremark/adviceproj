/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                custom: "0 0 40px -8px hsl(150, 100%, 66%), 0 0 30px -8px hsl(150, 100%, 66%)",
            },
        },
    },
    plugins: [],
};
