import * as language from "../FormBuilder/data/languages"

export default (link, currentLanguage) => {
  if (currentLanguage === language.defaultLangKey) {
    return link
  }

  return `/${currentLanguage}${
    link ? (link.startsWith("/") ? link : "/" + link) : ""
  }`
}
