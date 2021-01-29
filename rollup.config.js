
import babel from "rollup-plugin-babel";
import {uglify} from "rollup-plugin-uglify";


export default {
    input: './src/index.js',
    output: {
        file: "./dist/index.js",
        name: "UASplit",
        format: "umd",
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        // 压缩代码
        uglify()
    ]
}