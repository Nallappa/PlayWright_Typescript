import { Browser, Page, BrowserContext } from "playwright";

declare global {
  const page: Page;
  const browser: Browser;
  const browserName: string;
  let context : BrowserContext;
}

