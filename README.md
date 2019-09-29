# 🦓 Libra Cryptocurrency Micropayment Chrome Extension

A Libra Cryptocurrency Micropayment Chrome Extension developed with the aim of creating a simple UX that allows readers to bypass paywalls without a paid subscription or access free articles without ads via Libra micropayments. 

![Sebra logo](./client/customer-client/public/img/logo/sebra_logo.png)<hr/>
![Payment page screenshot](./client/customer-client/public/img/screenshots/payment_page.png)

## Table of contents
* [Motivation](#motivation)
* [What is Libra?](#what-is-twilio?)
* [Login Credentials](#login-credentials)
* [Live Demo](#live-demo)
* [Dependencies](#dependencies)
* [Requirements](#requirements)
* [Customer-Client Installation](#customer-client-installation)
* [Running Customer-Client Locally](#running-customer-client-locally)
* [Business-Client Installation](#business-client-installation)
* [Running Business-Client Locally](#running-business-client-locally)
* [Tests](#tests)
* [Contributors](#contributors)

## Motivation

## What is Libra?
Libra is a permissioned blockchain digital currency proposed by the American social media company Facebook. The project, currency and transactions are to be managed and cryptographically entrusted to the Libra Association, a membership organization founded by Facebook's subsidiary Calibra and 27 others across payment, technology, telecommunication, online marketplace, venture capital and nonprofits. The currency and network do not yet exist, and only rudimentary experimental code has been released. The launch is planned to be in 2020.

## Login Credentials

## Live Demo

* [Customer-Client (Chrome Extension)](https://chrome.google.com/webstore/detail/sebra/nphapdbgcogmapagdbljcfpkoeflmijf)
* [Business-Client (Web App)](https://sebra-business.herokuapp.com)

## Dependencies
* [React](https://reactjs.org)
* [Redux](https://redux.js.org)
* [Material-UI](https://material-ui.com/)
* [Axios](https://github.com/axios/axios)

## Requirements
* [Node.js (v10.16.0)](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)

## Customer-Client Installation
Step 1: Clone Repo
```sh
git clone https://github.com/briantam23/sebra-chrome-extension.git` # or clone your own fork
```

Step 2: Change Directory to `customer-client`
```sh
cd client/customer-client
```

Step 3: Install `node_modules`
```sh
npm install # or yarn install
```

## Running Customer-Client Locally
1. Make sure you're in the `customer-client` directory.
2. Run `npm run build` to put everything required into build folder, then launch `chrome://extensions/` in Google Chrome.
3. On the upper-right hand side of the window, make sure developer mode is on.
4. Click “Load unpacked” and open the “build” folder in this project, it should contain `index.html`, `manifest.json`, different sizes of logos, and bundled JavaScript files.
5. If you have already published a version in production and you are testing a newer version, you should also disable the production version.
6. To update the extension, run `npm build again`, and click the “Refresh” button.

## Business-Client Installation
Step 1: Clone Repo (if you haven't done so already)
```sh
git clone https://github.com/briantam23/sebra-chrome-extension.git` # or clone your own fork
```

Step 2: Change Directory to `business-client`
```sh
cd client/business-client
```

Step 3: Install `node_modules`
```sh
npm install # or yarn install
```

## Running Business-Client Locally
1. Make sure you're in the `business-client` directory.
2. `npm run start` to run the app in the development mode.
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
4. The page will reload if you make edits.
5. You will also see any lint errors in the console.

## Tests

## Contributors

> [Brian Tam](https://github.com/briantam23) <br/>
> [Sydney Lai](https://github.com/sydneylai) <br/>
> [Allen Shegay](https://github.com/jnsead)