/**
 * Build config
 * @type {Object}
 */
module.exports = {
  env: 'development',

  entryPoint: ['src/app/app.js'],

  dir: {
    dist: 'dist'
  },

  watch: {
    scripts: 'src/**/*.js'
  }
}
