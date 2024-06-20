import 'intl';
import 'intl-pluralrules';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/es';
import 'intl/locale-data/jsonp/ur';
import 'intl/locale-data/jsonp/ar';
import 'intl/locale-data/jsonp/sv';

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import Newpassword from './components/screens/Newpassword/Newpassword';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    const language = 'sv';
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
      loginHere: 'Login Here',
      letsgetsStarted: 'Let Get Started',
      signIn: 'SignIn',
      forgotPass: 'Forgot Password?',
      titleforgotPass: 'Forgot Password',
      checkEmail: 'Check Your Email',
      send: 'Send',
      areNew: 'Are you New?',
      backtoSignin: 'Back TO Sign in',
      verification: 'Verification',
      enterVerification: 'Enter Verification Code',
      ifyounotRecieve: "If you didn't recieve the code?",
      resend: 'Resend',
      newpassword: 'New Password',
      enternewPass: 'Enter New Password',
      confirmPass: 'Confirm Password',
      enterconfirmPass: 'Enter Confirm Password',
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
      selectCompany: 'seleccionar empresa',
      taxiNumber: 'Número de taxi',
      enterTaxiNumber: 'Ingrese el número de taxi',
      signup: 'inscribirse',
      alreadyHaveAccount: '¿Ya tienes una cuenta?',
      loginHere: 'Iniciar sesión aquí',
      letsgetsStarted: 'Comencemos',
      signIn: 'acceso',
      forgotPass: '¿Has olvidado tu contraseña?',
      titleforgotPass: 'Has olvidado tu contraseña',
      checkEmail: 'revisa tu correo electrónico',
      send: 'enviar',
      areNew: 'Eres nuevo?',
      backtoSignin: 'atrás para iniciar sesión',
      verification: 'Verificación',
      enterVerification: 'Ingrese el código de verificación',
      ifyounotRecieve: '¿Si no recibiste el código?',
      resend: 'Reenviar',
      newpassword: 'Nueva contraseña',
      enternewPass: 'Ingrese nueva clave',
      confirmPass: 'confirmar Contraseña',
      enterconfirmPass: 'Ingrese Confirmar Contraseña',
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
      loginHere: 'تسجيل الدخول هنا',
    },
  },
  sv: {
    translation: {
      welcome: 'Välkommen',
      changeLanguage: 'Byt språk',
      createAccount: 'Skapa ett konto',
      fullName: 'Fullständiga namn',
      enterFullName: 'Ange ditt fullständiga namn',
      email: 'E-post',
      enterEmail: 'Ange din e-post',
      password: 'Lösenord',
      enterPassword: 'Ange ditt lösenord',
      selectTaxiCompany: 'Välj taxiföretag',
      selectCompany: 'välj företag',
      taxiNumber: 'Taxinummer',
      enterTaxiNumber: 'Ange taxinummer',
      signup: 'Registrera dig',
      alreadyHaveAccount: 'Har du redan ett konto?',
      loginHere: 'Logga in här',
    },
  },
};

i18n
  .use(HttpBackend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
