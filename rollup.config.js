import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    file: 'dist/bundle.js',
  },
  plugins: [commonjs(), resolve()],
};
