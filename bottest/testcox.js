const axios = require('axios');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

let SIGN_UP_URL = 'https://www.cox.com/myprofile/registration/email.html'
let FORGOT_PASSWORD_URL = "https://www.cox.com/myprofile/forgot-password.html";
let RECOVERY_URL = "https://www.cox.com/myprofile/forgot-password/reset-options.html";

async function checkPasswordRecovery(email, webdriver) {
  console.log(`Using COX login in headless navigator for ${email}`);
  let status = deliverystatus.UNKONWN;
  let checked = false;
  let isIdentityVerification = false;
  let doesNotExist = false;
  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36');
  await page.setJavaScriptEnabled(true);


  page.on('console', message =>
      console.log(`${message.type().substr(0, 3).toUpperCase()} ${message.text()}`))
    .on('pageerror', ({ message }) => console.log(message))
    .on('response', response =>
      console.log(`${response.status()} ${response.url()}`))
    .on('requestfailed', request =>
      console.log(`${request.failure().errorText} ${request.url()}`))

  await page.goto(SIGN_UP_URL);
  //await page.click('.btn.btn-primary');

  //const navigationPromise = page.waitForNavigation({ timeout: 3000 });
//  await navigationPromise;

  await page.waitForSelector('#emailAddress');
  await page.type('#emailAddress', email);
  await page.click('.btn.btn-primary');

    try {
        const navigationPromise = page.waitForNavigation({ timeout: 100000 });
        // ... trigger the navigation
        await navigationPromise;
        // Check the URL of the page after navigation
        const url = page.url();
        if(url.includes(RECOVERY_URL)) {
            const element = await page.$('#myprofile-forgot-password-reset-options');
            if (element !== null) {
              const content = await page.evaluate(el => el.textContent, element);
              if (content.includes("How would you like to reset your password?")) {
                isIdentityVerification = true;
              }
            }
        } else {
          const errorBox = await page.$('.server-error');
          if(errorBox)
          {
            const errorText = await page.evaluate(element => element.textContent, errorBox);
            let doesNotExist = errorText.includes("the user ID you entered cannot be found");
          }
        }
    } catch (error) {
        console.log(error)
        console.log("Navigation did not complete within 5 seconds");
    }

  if (isIdentityVerification) {
    console.log(`Did not find error message in password recovery, ${email} exists`);
    status = deliverystatus.VALID;
  } else if (doesNotExist) {
    console.log(`Found error message in password recovery, ${email} does not exist`);
    status = deliverystatus.INVALID;
  }

  await browser.close();
  
  return {
    status: status,
  };
}

// Export our verify function and info codes so we can use them in other files
async function verify(email) {
    const result = await checkPasswordRecovery(email);
    console.log(result);
    return result;
}

class deliverystatus {
    static VALID = 'valid';
    static INVALID = 'invalid';
    static UNKNOWN = 'unknown';
}

// Export our verify function and info codes so we can use them in other files
module.exports = {
  verify: verify
};

verify('test@cox.net')