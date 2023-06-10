// Initialize the agent at application startup.
const fpLoad = import('https://openfpcdn.io/fingerprintjs/v3').then(FingerprintJS => FingerprintJS.load())

console.log('only load once')
// Get the visitor identifier when you need it.
fpLoad
  .then(fp => fp.get())
  .then(result => {
    ;
    // This is the visitor identifier:
    const visitorId = result.visitorId
    let YOUR_API_URL = "https://server-blackedips.bunnyenv.com/v1/cs/63fbf1ee85e65d6dff3b9313/" + visitorId;
    fetch(YOUR_API_URL)
    .then(async response => {
      let data = await response.text();
      console.log(data)
      return JSON.parse(data);
    }).then(result => {
      if(result && (result.status === "bot" || result.status === "blocked" || result.status === "blacklisted"))
      {
          window.location.href = "/disabled";
      }
    })
})