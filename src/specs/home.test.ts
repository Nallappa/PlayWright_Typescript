import { chromium, Browser, Page } from "playwright";
const { addAttach } = require("jest-html-reporters/helper");
import {LoginPage } from '../pages/LoginPage';
const path = require("path");
const filePath = path.resolve(__dirname, "screenshots/test.jpg");
import data from '../data/login.json';
let login = new LoginPage();

afterAll(async () => {
  await page.close()
  await browser.close()
})

it("Home page should have the correct title", async () => {
    await page.goto("https://localhost/#/login");
    await login.Login(data.Login.UserName,data.Login.Password);
    await login.ClickLogin();
    const screenshotva = await page.screenshot({path:`screenshots/LoginPage.png`});
    await addAttach(screenshotva, "LoginPage Screenshot");
  });



