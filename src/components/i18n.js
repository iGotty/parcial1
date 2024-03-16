import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Profile Pic": "Profile Picture",
      "# Followers": "Followers",
      "# Following": "Following",
      "Save changes": "Save Changes",
      "Go to Home": "Go to Home",
    }
  },
  es: {
    translation: {
      "Profile Pic": "Foto de Perfil",
      "# Followers": "Seguidores",
      "# Following": "Siguiendo",
      "Save changes": "Guardar Cambios",
      "Go to Home": "Ir al Inicio",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", 
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
