
class LoginPage {

    public async ClickLogin() {
      let login = await page.$('//se-button[@option="login"]');
      await login?.click();
    }

    public async Login(name: string, password: string) {
        await (await  page.$('input[name="username"]'))?.type(name);
        await (await  page.$('input[name="password"]'))?.type(password);
    }

}

export {LoginPage}