exports.config = {
    framework: 'jasmine2',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumAddress: 'http://192.168.1.230:4444/wd/hub',
    specs: ['spec.js'],
    
    
    /* */
    capabilities: {
      browserName: 'chrome',
    
      chromeOptions: {
         args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
       }
    },
    
    /* This configuration is working as expected */
    // capabilities: {
    //     browserName: 'firefox',
      
    //     'moz:firefoxOptions': {
    //        args: [ "--headless" ]
    //      }
    // }
}
  