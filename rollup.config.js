import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

const origin = 'src'
const destination = 'dist'

export default {
  input: `${origin}/index.ts`,
  output: [
    {
      file: `${destination}/index.js`,
      format: 'cjs',
    },
    {
      file: `${destination}/index.esm.js`,
      format: 'es',
    },
    {
      file: `${destination}/index.umd.js`,
      format: 'umd',
      name: 'npmts',
    },
  ],
  plugins: [commonjs(), resolve(), typescript()],
}
