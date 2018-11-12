import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {terser} from "rollup-plugin-terser";

export default [{
    input: './src/main.js',
    output: {
        file: 'dist/bundle.js',
        name: 'Hello',
        format: 'umd'
    },
    plugins: [
        resolve(),
        // commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        // terser(),
        // serve({ contentBase: ['dist', 'docs'] }),
    ]
}]