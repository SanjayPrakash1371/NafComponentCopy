import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import { uglify } from "rollup-plugin-uglify";
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
export default {
    input: "./src/index.ts",
    output: [
        {
            file: "dist/index.js",
            format: 'es'
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        typescript(),
        postcss({
            extensions: ['.css','.scss'],
        }),
        uglify(),
        babel({
            exclude: "node_modules/**",
            presets: ["@babel/preset-react"],
            babelHelpers: "bundled",
          }),
        commonjs({
            include: /node_modules/,
            requireReturnsDefault: 'auto', 
          }),
    ]
}