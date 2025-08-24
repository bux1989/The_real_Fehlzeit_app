import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default {
  input: 'src/index.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'default'
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      exports: 'default'
    }
  ],
  plugins: [
    // Exclude peer dependencies from bundle
    peerDepsExternal(),
    
    // Resolve node modules
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    
    // Convert CommonJS modules to ES6
    commonjs(),
    
    // Process CSS/SCSS files
    postcss({
      extract: true,
      minimize: true,
      use: ['sass']
    }),
    
    // Transpile JavaScript
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-env', {
          targets: {
            browsers: ['> 1%', 'last 2 versions', 'not ie <= 10']
          }
        }],
        ['@babel/preset-react', {
          runtime: 'automatic'
        }]
      ]
    }),
    
    // Minify in production
    process.env.NODE_ENV === 'production' && terser()
  ],
  
  // Mark these as external to avoid bundling
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime'
  ]
};
