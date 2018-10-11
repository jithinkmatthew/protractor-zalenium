# protractor-zalenium

Please run the following commands.

1. `npm install -g protractor`

2. `webdriver-manager update`

3. clone this repository

4. Starting zalenium using docker compose. Run `docker-compose -f zalenium-compose.yml up --force-recreate`

5. To start test, run `protractor conf.js` (Please enable configuration 1 from `conf.js` file)

   When using 
    
     'conf - 1' in `conf.js`, new browser window is opening in one of my zalenium node.
     
     'conf - 2' in `conf.js`, it is working as expected. Showing fade browser icon in one of the zalenium node.
     


You can try out the correct behavior with the help of local server ([webdriver-manager](https://github.com/angular/webdriver-manager#readme)). Run the following commands

1. run `webdriver-manager start`
2. `protractor conf.js`(for chrome, use 'conf - 1 ' in `conf.js` file)
3. `protractor conf.js`(for firefox, use 'conf - 2 ' in `conf.js` file)
