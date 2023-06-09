const puppeteer = require('puppeteer');
const axios = require('axios');

async function checkUrl(url) {
  console.log(`Using bot to test this`);
  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  let status = "normal"

  await page.goto(url);

  //await page.waitForSelector('#submit');
  //await page.click('#submit');

  const response = await page.waitForResponse(response => response.url().includes('disabled'), {timeout: 60000});
  if(response)
  {
    status = "bot";
    console.log('got disabled')
  }
  else
  {
    console.log('undetected')
  }
  await page.waitForTimeout(20000)

  await browser.close();
  
  return {
    status: status,
  };
}

// Export our verify function and info codes so we can use them in other files
async function verify(url) {
    const result = await checkUrl(url);
    console.log(result);
    return result;
}

// Export our verify function and info codes so we can use them in other files
module.exports = {
  verify: verify
};

verify('https://client-blackedips.bunnyenv.com/')