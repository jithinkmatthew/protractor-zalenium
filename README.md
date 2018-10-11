# protractor-zalenium

1. `npm install -g protractor`

2. `webdriver-manager update`

3. clone this repository

3. Starting zalenium using docker compose. Run `docker-compose -f zalenium-compose.yml up --force-recreate`

4. To start test run `protractor conf.js` (Please enable configuration 1 from `conf.js` file)

   When using 
     'conf - 1' in `conf.js`, new browser window is opening in one of my zalenium node.
     'conf - 2' in `conf.js`, it is working as expected. Showing fade browser icon in one of the node.
     
