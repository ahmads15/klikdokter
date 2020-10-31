import { Given, When, Then } from 'cucumber';
import * as loginPage from '../pages/login';


Given(/^a web browser is KlikDokter Login page$/, async () => {
  await loginPage.goToWebsite();
});

When(/^User click profile$/, async () => {
  await loginPage.clickprofile();
});

When(/^User click Masuk/, async () => {
  await loginPage.clickMasuk();
});

When(/^User input email/, async () => {
  await loginPage.inputEmail();
});

When(/^User input password/, async () => {
    await loginPage.inputPassword();
});

When(/^User click verifikasi nanti/, async () => {
  await loginPage.clickVerifNanti();
});

When(/^User click button Selanjutnya/, async () => {
  await loginPage.clickBtnSelanjutnya();
});

When(/^User input invalid password/, async () => {
  await loginPage.inputInvalidPassword();
});

Then(/^User can see wording invalid password/, async () => {
  await loginPage.wordingInvalidPassword();
});

Then(/^User successfully login/, async () => {
  await loginPage.verifySuccesLogin();
});