module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        $primary: '#007AFF',
        $black: '#0F0F0F',
        '$grey-2': '#F7F7F7',
        '$grey-3': '#F2F2F2',
        '$black-2': '#272727',
        '$grey-4': '#B7B7B7',
        '$grey-5': '#878787'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}'
  ]
}
