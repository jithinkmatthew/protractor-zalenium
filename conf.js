exports.config = {
    framework: 'jasmine2',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumAddress: 'http://192.168.1.230:4444/wd/hub',
    specs: ['spec.js'],
    
    
    /* Conf - 1: Use this for running test in headless chrome */
    
    capabilities: {
      browserName: 'chrome',
    
      'goog:chromeOptions': {
         args: [ "--headless" ]
       }
    },


    /* THIS IS WORKING AS EXPECTED */
    /* Conf - 2: Use this for running test in headless firefox */
    
    // capabilities: {
    //     browserName: 'firefox',
      
    //     'moz:firefoxOptions': {
    //        args: [ "--headless" ]
    //      }
    // }



    /* Conf - 3: Use this for running test in chrome browser */

    // capabilities: {
    //   browserName: 'chrome'
    // },



    /* Conf - 4: Use this for running test in firefox browser */

    // capabilities: {
    //   browserName: 'firefox'
    // }


}
  