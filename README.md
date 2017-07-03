# `cordova-contacts-swagger-api`
> **[![Swagger Validity][swagger-validity-img]][swagger-validity-url] A reference Apigee API Proxy that**
>
> * Demonstrates best practices for CI/CD quality gates executed during build, test, and deploy automation; and
> * Provides mock data for automated content publication in the Apigee Developer Portal.

[![Build Status][travis-ci-img]][travis-ci-url] [![Sonar coverage][sonar-coverage-img]][sonar-coverage-url] [![Quality Gate][sonar-gate-img]][sonar-gate-url] [![Complexity][sonar-complexity-img]][sonar-complexity-url]<br>
[![NSP Status][nsp-img]][nsp-url] [![bitHound Dependencies][bithound-dep-img]][bithound-dep-url] [![bitHound Dev Dependencies][bithound-dev-dep-img]][bithound-dev-dep-url]<br>[![License][license-image]][license-url]  [![Readme Score][readme-score-img]][readme-score-url] [![Inline docs][inch-ci-img]][inch-ci-url]

## 1. Table of contents
<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [1. Table of contents](#1-table-of-contents)
- [2. Installation](#2-installation)
- [3. Usage](#3-usage)
	- [3.1. Design-first with Swagger/OpenAPI documents](#31-design-first-with-swaggeropenapi-documents)
	- [3.2. Swagger document creation and edits](#32-swagger-document-creation-and-edits)
- [4. Quality gates and tests](#4-quality-gates-and-tests)
	- [4.1. Swagger validation and badge](#41-swagger-validation-and-badge)
	- [4.2. Javascript callout source code analysis](#42-javascript-callout-source-code-analysis)
	- [4.3. Javascript callout test execution and code coverage](#43-javascript-callout-test-execution-and-code-coverage)
	- [4.4. API documentation and complexity reports](#44-api-documentation-and-complexity-reports)
- [5. Contributions](#5-contributions)
- [6. Terms of service](#6-terms-of-service)
- [7. License](#7-license)

<!-- /TOC -->

## 2. Installation

Clone the GitHub repository:

```bash

$ git clone https://github.com/gregswindle/cordova-contacts-swagger-api.git

```

Or clone the Bitbucket repository:

```bash

$ git clone ssh://git@onestash.verizon.com:7999/gtsap/cordova-contacts-swagger-api.git

```

## 3. Usage

`cordova-contacts-swagger-api` is _reference_ Apigee API Proxy implementation that:

* Demonstrates best practices, and
* Provides an API Proxy for automated Apigee API Developer Portal content publication.

### 3.1. Design-first with Swagger/OpenAPI documents

When exposing APIs in Apigee, try to avoid the "lift-and-shift" mentality, and _start_ your work with a Swagger document. When you're done, you can upload your swagger doc when you create an API Proxy. This "outside-in" approach provides three benefits:

1. **User-centered approach**: your API contract is your user experience (UX). Better UX means greater consumption.
2. **Auto-generated client SDKs**: [`Swagger Codegen`](http://swagger.io/swagger-codegen/) will automatically generate an SDK for 38 clients. This vastly broadens your potential market share.
3. **Auto-generated, interactive documentation**: Swagger docs are interactive. Moreover, they're **required** before you can publish to the Apigee Developer Portal.

### 3.2. Swagger document creation and edits

1. Go to the [online Swagger Editor](http://editor.swagger.io/#/).
2. Copy the contents of [`cordova-contacts.swagger.yaml`](cordova-contacts.swagger.yaml) to your clipboard.
3. Replace the default "Petstore" API by pasting `cordova-contacts.swagger.yaml` into the online editor.
4. Review the content in the right render pane.
5. Select "Generate Client" on the Swagger Editor top-level navigation bar.
6. Marvel at the SDK options presented before you!

## 4. Quality gates and tests

This repository demonstrates best practices for an API Proxy that uses custom Javascript API policies to adapt a "flat", proprietary contact info service into the expected Cordova Contacts API.

Therefore, we need to enforce Swagger quality; Javascript quality; and Javascript unit tests and code coverage.

### 4.1. Swagger validation and badge
> :trophy: `cordova-contacts-swagger-api` validates Swagger docs with [`swagger-cli`][swagger-cli-url].

[`swagger-cli`][swagger-cli-url] validation runs before every test execution:

```bash

$ npm test

```

or

```bash

$ npm run pretest

```

or

```bash

$ npm run lint

```

To execute `swagger validate *.swagger.yaml --debug` alone, run:

```bash

$ npm run swagger:lint

```

[`swagger-api/validator-badge`](https://github.com/swagger-api/validator-badge)s display whether there are syntactic issues with you Swagger/OpenAPI 2.0 document:

* **Valid:**
    * [![Swagger Validity][swagger-validity-img]][swagger-validity-url] `cordova-contacts.swagger.yaml`
    * [![Swagger Validity](http://online.swagger.io/validator?url=https://raw.githubusercontent.com/gregswindle/cordova-contacts-swagger-api/master/cordova-contacts.swagger.json)]((http://online.swagger.io/validator/debug?url=https://raw.githubusercontent.com/gregswindle/cordova-contacts-swagger-api/master/cordova-contacts.swagger.json) `cordova-contacts.swagger.json`
* **Invalid:**<br>[![Swagger Validity](http://online.swagger.io/validator?url=https://raw.githubusercontent.com/gregswindle/cordova-contacts-swagger-api/master/README.md)](http://online.swagger.io/validator/debug?url=https://raw.githubusercontent.com/gregswindle/cordova-contacts-swagger-api/master/README.md)


### 4.2. Javascript callout source code analysis
> :closed_lock_with_key: :bath: :ocean: `cordova-contacts-swagger-api` lints source code; checks for vulnerabilities; assesses dependency drift; and executes quality gates with `BitHound`, `eslint`, `nsp`, and `SonarQube`/`sonarcloud`.
>
> The results are displayed real-time with README badges.

Code quality analysis runs before every test execution:

```bash

$ npm test

```

or

```bash

$ npm run pretest

```

or

```bash

$ npm run lint

```

To execute `eslint -c ./.eslintrc.yml lib/**/*.js --fix` alone, run:

```bash

$ npm run eslint:stylish

```

If you'd like an `eslint` report in HTML (with links to errors and warnings), run the following command to generate a `{PROJECT_ROOT}/eslint-report.html`:

```bash

$ npm run eslint:html

```

### 4.3. Javascript callout test execution and code coverage
> :100: `cordova-contacts-swagger-api` uses `jest` for BDD spec execution and code coverage analysis.
>
> The results are displayed real-time with README badges.

Run:

```bash

$ npm test

```

This generates:

* Detailed code coverage reports at `{PROJECT_ROOT}/coverage/lcov-report/index.html`, as well as
* `lcov.info` and `clover.xml` files, which you can send to CI test coverage services like Coveralls.

### 4.4. API documentation and complexity reports
> :page_facing_up: `cordova-contacts-swagger-api` automatically generates API docs with `jsdoc-to-markdown`, complexity reports with `complexity-report`, and Git markdown-friendly Swagger API docs with `swagger-markdown`
>
> You can view the [complexity report][complexity-report-url], [Javascript callout API docs][js-callout-docs-url], and [Swagger API docs][swagger-api-docs-url].

To generate API docs, Swagger docs, and Complexity reports in the `{PROJECT_ROOT}/lib` directory, run:

```bash

$ npm run docs

```

`npm-script docs` is a shorthand script that executes [`jsdoc-to-markdown`][jsdoc2md-url], [`complexity-report`][complexity-report-url], and [`swagger-markdown`][swagger-markdown-url]:

```bash

$ npm run docs:api && npm run docs:complexity && npm run docs:swagger

```

## 5. Contributions
:family: We warmly welcome contributors. Check out the guidelines for [Contributing to `cordova-contacts-swagger-api`](./.github/CONTRIBUTING.md) and our [Contributor Covenant Code of Conduct][code-of-conduct-url].

Contributions are stories with a beginning, a middle, and an end, all told through issues and pull requests.
 * [Peruse open issues][issues-url] or
 * [Open a new pull request (PR)][pr-url]

## 6. Terms of service

Please review Verizon's [Terms of Service](TERMS_OF_SERVICE.md).

## 7. License

[Apache 2.0][license-url] :copyright: [Greg Swindle][author-url].

---

[![Greenkeeper badge][greenkeeper-img]][greenkeeper-url] [![StackShare][stackshare-img]][stackshare-url]

[swagger-validity-img]: http://online.swagger.io/validator?url=https://raw.githubusercontent.com/gregswindle/cordova-contacts-swagger-api/master/cordova-contacts.swagger.yaml
[swagger-validity-url]: http://online.swagger.io/validator/debug?url=https://raw.githubusercontent.com/gregswindle/cordova-contacts-swagger-api/master/cordova-contacts.swagger.yaml
[author-url]: https://github.com/gregswindle
[bithound-dep-img]: https://www.bithound.io/github/gregswindle/cordova-contacts-swagger-api/badges/dependencies.svg
[bithound-dep-url]: https://www.bithound.io/github/gregswindle/cordova-contacts-swagger-api/master/dependencies/npm
[bithound-dev-dep-img]: https://www.bithound.io/github/gregswindle/cordova-contacts-swagger-api/badges/devDependencies.svg
[bithound-dev-dep-url]: https://www.bithound.io/github/gregswindle/cordova-contacts-swagger-api/master/dependencies/npm
[codacy-img]: https://api.codacy.com/project/badge/Grade/554fe390431b455a87ba6acde3ff2989?style=flat-square
[codacy-url]: https://www.codacy.com/app/greg_7/cordova-contacts-swagger-api?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gregswindle/cordova-contacts-swagger-api&amp;utm_campaign=Badge_Grade
[code-of-conduct-url]: ./.github/CODE_OF_CONDUCT.md
[complexity-report-url]: https://github.com/escomplex/complexity-report
[coveralls-img]: https://coveralls.io/repos/github/gregswindle/cordova-contacts-swagger-api/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/gregswindle/cordova-contacts-swagger-api?branch=master
[eslint-dev-env-url]: http://eslint.org/docs/developer-guide/development-environment
[greenkeeper-img]: https://badges.greenkeeper.io/gregswindle/cordova-contacts-swagger-api.svg?style=flat-square
[greenkeeper-url]: https://greenkeeper.io/
[inch-ci-img]: http://inch-ci.org/github/gregswindle/cordova-contacts-swagger-api.svg?branch=master
[inch-ci-url]: http://inch-ci.org/github/gregswindle/cordova-contacts-swagger-api
[issues-new-url]: https://github.com/gregswindle/cordova-contacts-swagger-api/issues/new
[issues-url]: https://github.com/gregswindle/cordova-contacts-swagger-api/issues
[js-callout-docs-url]: ./lib/README.md
[jsdoc-url]: http://usejsdoc.org/
[jsdoc2md-url]: https://github.com/jsdoc2md/jsdoc-to-markdown
[license-image]: https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square
[license-url]: ./LICENSE
[swagger-api-docs-url]: ./lib/SWAGGER.md
[nsp-img]: https://nodesecurity.io/orgs/gregswindle/projects/a3912719-529f-457f-9ff6-53fa70d8f475/badge
[nsp-url]: https://nodesecurity.io/orgs/gregswindle/projects/a3912719-529f-457f-9ff6-53fa70d8f475
[pr-url]: https://github.com/gregswindle/cordova-contacts-swagger-api/pulls
[readme-score-img]: http://readme-score-api.herokuapp.com/score.svg?url=https://github.com/gregswindle/cordova-contacts-swagger-api
[readme-score-url]: http://clayallsopp.github.io/readme-score?url=https://github.com/gregswindle/cordova-contacts-swagger-api
[rule-plural-paths-url]: ./docs/rules/require-plural-paths.md
[rules-backlog-wiki-url]: https://github.com/gregswindle/cordova-contacts-swagger-api/wiki/Rules-backlog
[sonar-cognitive-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-cordova-contacts-swagger-api&metric=cognitive_complexity
[sonar-cognitive-url]: https://sonarcloud.io/component_measures/metric/cognitive_complexity/list?id=gregswindle-cordova-contacts-swagger-api
[sonar-complexity-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-cordova-contacts-swagger-api&metric=function_complexity
[sonar-complexity-url]: https://sonarcloud.io/component_measures/domain/Complexity?id=gregswindle-cordova-contacts-swagger-api
[sonar-coverage-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-cordova-contacts-swagger-api&metric=coverage
[sonar-coverage-url]: https://sonarcloud.io/component_measures/domain/Coverage?id=gregswindle-cordova-contacts-swagger-api
[sonar-gate-img]: http://sonarcloud.io/api/badges/gate?key=gregswindle-cordova-contacts-swagger-api
[sonar-gate-url]: http://sonarcloud.io/dashboard/index/gregswindle-cordova-contacts-swagger-api
[sonar-security-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-cordova-contacts-swagger-api&metric=vulnerabilities
[sonar-security-url]: https://sonarcloud.io/component_measures/domain/Security?id=gregswindle-cordova-contacts-swagger-api
[sonar-tech-debt-img]:  https://sonarcloud.io/api/badges/measure?key=gregswindle-cordova-contacts-swagger-api&metric=sqale_debt_ratio
[sonar-tech-debt-url]: https://sonarcloud.io/component_measures/metric/sqale_index/list?id=gregswindle-cordova-contacts-swagger-api
[stackshare-img]: https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat
[stackshare-url]: https://stackshare.io/gregswindle/cordova-contacts-swagger-api
[swagger-cli-url]: https://github.com/BigstickCarpet/swagger-cli
[swagger-io-url]: http://swagger.io
[swagger-logo-20-img]: ./.github/assets/img/swagger-logo-20.png
[swagger-markdown-url]: https://github.com/syroegkin/swagger-markdown
[travis-ci-img]: https://travis-ci.org/gregswindle/cordova-contacts-swagger-api.svg?branch=master
[travis-ci-url]:  https://travis-ci.org/gregswindle/cordova-contacts-swagger-api
