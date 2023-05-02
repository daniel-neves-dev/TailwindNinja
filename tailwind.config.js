const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    fontFamily: {
      body:['Nunito']
    },
    colors: {
      primary: '#FF6363',
      secondary: {
        100: '#E2E2D5',
        200: '#888883',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ]
}
