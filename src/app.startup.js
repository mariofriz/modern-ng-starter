// import translations
import './i18n/translations_de.po';
import './i18n/translations_en.po';

// let's start up that app
export default function startup(gettextCatalog) {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Development mode is on');

    // enable gettext debug in dev mode
    gettextCatalog.debug = true;
  }

  // set language to use for ui
  gettextCatalog.setCurrentLanguage('en');
}

startup.$inject = ['gettextCatalog'];
