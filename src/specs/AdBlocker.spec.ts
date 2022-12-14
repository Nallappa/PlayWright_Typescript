const { chromium } = require('playwright');

describe('Tracing Browser', () => {
    jest.setTimeout(50000);
    it(' Ad blocker', async () => {
        //miniaddDatabase
        const miniAdsDB = [
            'https://adservice.google.com',
            'https://adservice.google.co.nz',
            'https://partner.googleadservices.com',
            'https://googleads.g.doubleclick.net',
            'https://www.googletagservices.com',
            'https://stats.g.doubleclick.net',
            'https://c.amazon-adsystem.com',
            'https://pagead2.googlesyndication.com',
            'https://idsync.rlcdn.com',
            'https://googleads.g.doubleclick.net',
            'https://jogger.zdbb.net',
            'https://zdbb.net',
            'https://ib.adnxs.com',
            'https://securepubads.g.doubleclick.net',
            'https://dt.adsafeprotected.com',
            'https://as-sec.casalemedia.com'
        ];

        await page.route('**/*', (route: any) => {
            const url = route.request().url();

            if (miniAdsDB.some(d => url.startsWith(d)))
                route.abort();
            else
                route.continue();
        });

        await page.goto('https://www.macrumors.com/');

        await page.close();
        await browser.close();

    })
})