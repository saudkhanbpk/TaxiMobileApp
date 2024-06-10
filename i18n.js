import 'intl';
import 'intl-pluralrules';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/es';
import 'intl/locale-data/jsonp/ur';
import 'intl/locale-data/jsonp/ar';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    const language = 'en'; 
    callback(language);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

const resources = {
  en: {
    translation: {
      account: 'Account',
      changeLanguage: 'Change Language',
      createAccount: 'Create An Account',
      fullName: 'Full Name',
      enterFullName: 'Enter your Full Name',
      email: 'Email',
      enterEmail: 'Enter your Email',
      password: 'Password',
      enterPassword: 'Enter your Password',
      selectTaxiCompany: 'Select Taxi Company',
      taxiNumber: 'Taxi Number',
      enterTaxiNumber: 'Enter Taxi Number',
      signup: 'Signup',
      alreadyHaveAccount: 'Already have an account?',
      loginHere: 'Login Here'
    },
  },
  es: {
    translation: {
      welcome: 'Bienvenido',
      changeLanguage: 'Cambiar Idioma',
      createAccount: 'Crear una cuenta',
      fullName: 'Nombre completo',
      enterFullName: 'Ingrese su nombre completo',
      email: 'Correo electrónico',
      enterEmail: 'Ingrese su correo electrónico',
      password: 'Contraseña',
      enterPassword: 'Ingrese su contraseña',
      selectTaxiCompany: 'Seleccionar empresa de taxis',
      taxiNumber: 'Número de taxi',
      enterTaxiNumber: 'Ingrese el número de taxi',
      signup: 'Registrarse',
      alreadyHaveAccount: '¿Ya tienes una cuenta?',
      loginHere: 'Iniciar sesión aquí'
    },
  },
  ur: {
    translation: {
      welcome: 'خوش آمدید',
      changeLanguage: 'زبان تبدیل کریں',
      createAccount: 'کھاتا کھولیں',
      fullName: 'پورا نام',
      enterFullName: 'اپنا پورا نام درج کریں',
      email: 'ای میل',
      enterEmail: 'اپنی ای میل درج کریں',
      password: 'پاس ورڈ',
      enterPassword: 'اپنا پاس ورڈ درج کریں',
      selectTaxiCompany: 'ٹیکسی کمپنی کا انتخاب کریں',
      taxiNumber: 'ٹیکسی نمبر',
      enterTaxiNumber: 'ٹیکسی نمبر درج کریں',
      signup: 'سائن اپ کریں',
      alreadyHaveAccount: 'کیا آپ کے پاس پہلے سے اکاؤنٹ ہے؟',
      loginHere: 'یہاں لاگ ان کریں'
    },
  },
  ar: {
    translation: {
      welcome: 'أهلاً وسهلاً',
      changeLanguage: 'تغيير اللغة',
      createAccount: 'إنشاء حساب',
      fullName: 'الاسم الكامل',
      enterFullName: 'أدخل اسمك الكامل',
      email: 'البريد الإلكتروني',
      enterEmail: 'أدخل بريدك الإلكتروني',
      password: 'كلمة المرور',
      enterPassword: 'أدخل كلمة المرور الخاصة بك',
      selectTaxiCompany: 'اختر شركة تاكسي',
      taxiNumber: 'رقم التاكسي',
      enterTaxiNumber: 'أدخل رقم التاكسي',
      signup: 'اشتراك',
      alreadyHaveAccount: 'هل لديك حساب بالفعل؟',
      loginHere: 'تسجيل الدخول هنا'
    },
  },
};

i18n
  .use(HttpBackend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
