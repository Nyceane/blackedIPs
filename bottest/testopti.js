const axios = require('axios');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const Captcha = require("2captcha")
const fs = require("fs")
const { PuppeteerExtraPlugin } = require('puppeteer-extra-plugin')
puppeteer.use(StealthPlugin());
const UserAgent = require('user-agents');

const BASE_URL = "https://www.optimum.net";
const FORGOT_PASSWORD_URL = "https://www.optimum.net/reset-password/";
const RECOVERY_URL = "https://www.optimum.net/api/user/services/v1/user/password_reset/recovery_options";

const solver = new Captcha.Solver("8b3e62abba9144e21af4134d01ad8013")


async function checkPasswordRecovery(email, webdriver) {
  console.log(`Using optimum login in headless navigator for ${email}`);

  let status = deliverystatus.UNKONWN;
  const userAgent = new UserAgent();

  try
  {
    let checked = false;
    let isIdentityVerification = false;
    let doesNotExist = false;
    const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setUserAgent(userAgent.random().userAgent);
    await page.setJavaScriptEnabled(true);

/*
      page.on('console', message =>
      console.log(`${message.type().substr(0, 3).toUpperCase()} ${message.text()}`))
    .on('pageerror', ({ message }) => console.log(message))
    .on('response', response =>
      console.log(`${response.status()} ${response.url()}`))
    .on('requestfailed', request =>
      console.log(`${request.failure().errorText} ${request.url()}`))
*/
    await page.goto(FORGOT_PASSWORD_URL);

    await page.waitForSelector('input[ng-model="model.unsanitizedId"]');
    await page.type('input[ng-model="model.unsanitizedId"]', email);


    let kaptchaElement = await page.$('#kaptchaimage'); // get the captcha image element
    if (kaptchaElement !== null) {
        await kaptchaElement.screenshot({path: 'tmp.png'});
        let codeResult = await solver.imageCaptcha(fs.readFileSync("tmp.png", "base64"))
        if(codeResult && codeResult.data)
        {
          console.log(codeResult);
          await page.waitForSelector('#kaptchaanswer');
          await page.type('#kaptchaanswer', codeResult.data);

          const [button] = await page.$x("//form[@name='identity']//input[@type='submit'][@class='btn btn--primary']");
          if (button) {
              await button.click();
          } else {
              console.log("Button not found");
          }

          const response = await page.waitForResponse(response => response.url().includes(RECOVERY_URL), {timeout: 10000});
          try {    
            const responseText = await response.text();
            
            let result = responseText.replace('var result_arr = ', '');
            let responsedata = JSON.parse(result);
            console.log(responsedata);
            if(responsedata &&  responsedata.errorCode && responsedata.errorCode === "unknown_id") {
              status = deliverystatus.INVALID;
            } else if(responsedata && responsedata.status === "success") {
              status = deliverystatus.VALID;
            }
          } catch (error) {
              console.error(error);        
          }
        }


        // fs.writeFileSync('tmp.png', response.data);
    } else {
        console.log("Element #kaptchaimage not found");
    }

    await browser.close();
  }
  catch(e)
  {
    console.log(e);
  }

  
  return {
    status: status,
  };
}
class deliverystatus {
    static VALID = 'valid';
    static INVALID = 'invalid';
    static UNKNOWN = 'unknown';
}

// Export our verify function and info codes so we can use them in other files
async function verify(email) {
    const result = await checkPasswordRecovery(email);
    return result;
}

// Export our verify function and info codes so we can use them in other files
module.exports = {
  verify: verify
};

verify('peterma12345@charter.net')