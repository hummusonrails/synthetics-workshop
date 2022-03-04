# Synthetics Monitoring Workshop

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

Welcome to the synthetics monitoring workshop! In this workshop you will learn how to build several significant types of synthetics monitoring using Selenium webdriver in JavaScript.

Please continue reading this README for instructions on how to navigate this repository.

## How To Use This Repository

### Installation

To get started clone this repository to your local machine, then change directory into it. Once you are inside the folder, in your terminal install the dependencies by running:

```bash
$ npm i
```

Please follow the [NodeJS Guide](https://nodejs.org/en/download/package-manager/) for your relevant OS if you need to first install Node on your machine.

### Folder Structure

There are two separate top-level folders in this repo:

* `/examples`
* `/tests`

**DO NOT LOOK AT `/examples` RIGHT AWAY**

The `/examples` folder contains solutions to each of the type of synthetic monitoring tests you will be building. It is a useful place to go to when you are truly stuck, but going there too early could take all the fun out of it for you!

You will build your own tests in the `/tests` folder. Each file in that folder has a description of what you will be building, along with any resources relevant to it.

### Running Tests

Once you are ready to run one of your tests, you can do so from the command line:

```bash
$ node tests/${name_of_test}.js
```

For example, to run the `ssl_test`, you'd run:

```bash
$ node tests/ssl_test.js
```

## License

This workshop is released under the [MIT License](LICENSE.md).