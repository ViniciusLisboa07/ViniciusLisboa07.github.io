const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'pt'],
};

module.exports = {
  i18n,
  localePath: './public/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
} 