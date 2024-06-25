import 'intl';
import 'intl-pluralrules';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/sv';
import 'intl/locale-data/jsonp/ur';
import 'intl/locale-data/jsonp/ar';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import Newpassword from './components/screens/Newpassword/Newpassword';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
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
      letsgetsStarted:"Let Get Started",
      signIn:"SignIn",
      forgotPass:"Forgot Password?",
      titleforgotPass:"Forgot Password",
      checkEmail:"Check Your Email",
      send:"Send",
      areNew:"Are you New?",
      backtoSignin:'Back TO Sign in',
      verification:"Verification",
      enterVerification:"Enter Verification Code",
      ifyounotRecieve:"If you didn't recieve the code?",
      resend:'Resend',
      newpassword:"New Password",
      enternewPass:"Enter New Password",
      confirmPass:'Confirm Password',
      enterconfirmPass:'Enter Confirm Password'

        },
  },
  sv: {
    translation: {
      account: 'Konto',
      changeLanguage: 'Byt språk',
      createAccount: 'Skapa ett konto',
      fullName: 'Fullständigt namn',
      enterFullName: 'Ange ditt fullständiga namn',
      email: 'E-post',
      enterEmail: 'Ange din e-post',
      password: 'Lösenord',
      enterPassword: 'Ange ditt lösenord',
      selectTaxiCompany: 'Välj taxiföretag',
      taxiNumber: 'Taxinummer',
      enterTaxiNumber: 'Ange taxinumret',
      signup: 'Registrera',
      alreadyHaveAccount: 'Har du redan ett konto?',
      loginHere: 'Logga in här',
      letsgetsStarted: "Låt oss börja",
      signIn: "Logga in",
      forgotPass: "Glömt lösenord?",
      titleforgotPass: "Glömt lösenord",
      checkEmail: "Kolla din e-post",
      send: "Skicka",
      areNew: "Är du ny?",
      backtoSignin: 'Tillbaka till inloggning',
      verification: "Verifiering",
      enterVerification: "Ange verifieringskod",
      ifyounotRecieve: "Om du inte mottagit koden?",
      resend: 'Skicka igen',
      newpassword: "Nytt lösenord",
      enternewPass: "Ange nytt lösenord",
      confirmPass: 'Bekräfta lösenord',
      enterconfirmPass: 'Ange bekräfta lösenord'
      
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
    fallbackLng: 'sv',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
