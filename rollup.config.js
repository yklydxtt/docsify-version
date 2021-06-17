import { terser } from "rollup-plugin-terser";

export default {
    input:'index.js',
    output:{
        file:'dv.min.js',
        format:'iife'
    },
    plugins: [terser()],
}