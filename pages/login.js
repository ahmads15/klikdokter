import * as base from '../base-function/base-functions';
import { client } from 'nightwatch-api';


const elements = {
  btnMasuk: "//a[@id='account-dashboard__button--login']",
  btnLanjut: "//button[@class='step-footer__button']",
  profile: "//div[.='Profil']",
  fieldEmail: "//input[@name='username']",
  labelPassword: "//input[@name='password']",
  klikSubmit: "//button[@class='step-footer__button step-footer__button--submit']",
  klikVerifNanti: "//button[@class='verification-reminder-content__button verification-reminder-content__button--plain']",
  klikLanjutkan:"//a[.='Lanjutkan']",
  namaUser: "//h2[@class='main-menu__title']",
  closePopUp: ".promote-install__close",
  refresh: '.update-modal__refresh',
};

export const goToWebsite = async () => {
  client.url('https://m.klikdokter.com/');
};

export const clickprofile = async () => {
  await base.clickElementViaXpath(elements.profile);
};

export const clickMasuk = async () => {
  await base.clickElementViaXpath(elements.btnMasuk);
};

export const inputEmail = async () => {
  client.useXpath();
  await base.setValueElement(elements.fieldEmail, 'ahmadsutarji15@gmail.com');
  client.useCss();
  await base.clickElement(elements.closePopUp);
  await base.clickElementViaXpath(elements.btnLanjut);
};

export const clickBtnSelanjutnya = async () => {
  await base.clickElement(elements.btnSelanjutnya);
};

export const inputPassword = async () => {
    client.useXpath();
    await base.setValueElement(elements.labelPassword, 'AHMAD123');
    await base.clickElement(elements.klikSubmit);
    client.useCss();
  };

  export const clickVerifNanti = async () => {
    await base.clickElement(elements.refresh);
    client.useXpath();
    await base.setValueElement(elements.fieldEmail, 'ahmadsutarji15@gmail.com');
    client.useCss();
  };

export const verifySuccesLogin = async () => {
  await client.useXpath();
  await base.expectElementEqualText(elements.namaUser,'Halo Ahmad Sutarji,');
  await client.useCss();
};
