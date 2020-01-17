const puppeteer = require('puppeteer');
const scrape = async (searchQuery) => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('http://www.rockauto.com');
    await page.click('#overlayinner > table > tbody > tr:nth-child(1) > td > span > img')
    await page.type('#topsearchinputtable > tbody > tr > td.input-td.td-input > input', `${searchQuery}`);
    await page.waitFor(2000);
    const searchbutton = '#topsearchinputtable > tbody > tr > td.button-td.td-button > span > span.show-if-js > img';
    await page.click(searchbutton);
    await page.$eval(searchbutton, element => element.click());
    await page.waitForSelector('.listing-container-border');
    await page.waitForSelector('.listing-final-manufacturer');
  
  const final = await page.evaluate(() => {
      let names = Array.from(document.querySelectorAll('.listing-final-manufacturer'))
      let price = Array.from(document.querySelectorAll('.ra-formatted-amount.listing-price.listing-amount-bold'))
      let finalnames = [];
      let prices = [];
      let objarr = [];
      names.map(el => finalnames.push(el.textContent));
      price.map(nm => prices.push(nm.textContent))
      for(i = 0; i < finalnames.length; i++){
        if(prices[i]){ //checks to make sure not invalid and current iteration actually has a price
          objarr.push({
          brand: finalnames[i],
          price: prices[i]
          })
        }
      }
      return objarr;
  });
  await browser.close();
  return final;
  };

  module.exports = {
      scrape: scrape
  } 