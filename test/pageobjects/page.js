import testData from '../pageobjects/testData';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
const loginUser = require('../pageobjects/testData');
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://www.amazon.in/${path}`)
    }
    // async virtualWait(){
 
                 
    //       const time =   await loginUser.timeOut;
    //             return time ;
       
    // }
}
