const LANG_STORAGE_KEY = "lang";
const LANG_ATTR  = "data-lang";

const langs = {
    EN: "en",
    KR: "kr",
}

initLang();

function initLang() {
  const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
  if (savedLang) {
    // Storage
    setLang(savedLang);
  } else {
    // Default
    setLang(langs.EN);
  }
}

function toggleLang() {
  const lang = getLang();
  const newLang = lang === langs.EN ? langs.KR : langs.EN;
  setLang(newLang);
  localStorage.setItem(LANG_STORAGE_KEY, newLang);
}

function getLang() {
  return document.documentElement.getAttribute(LANG_ATTR);
}

function setLang(value) {
  document.documentElement.setAttribute(LANG_ATTR, value);
}
