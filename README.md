# `cordova-contacts-swagger-api`
> A reference Apigee API Proxy that demonstrates best practices for CI/CD quality gates executed during build, test, and deploy automation.

[![Build Status][travis-ci-img]][travis-ci-url] [![Coverage Status][coveralls-img]][coveralls-url] [![Codacy Badge][codacy-img]][codacy-url]<br>
[![NSP Status][nsp-img]][nsp-url] [![bitHound Dependencies][bithound-dep-img]][bithound-dep-url] [![bitHound Dev Dependencies][bithound-dev-dep-img]][bithound-dev-dep-url]<br>[![License][license-image]][license-url]  [![Readme Score][readme-score-img]][readme-score-url] [![Inline docs][inch-ci-img]][inch-ci-url]

## 1. Table of contents
<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [1. Table of contents](#1-table-of-contents)
- [2. Installation](#2-installation)
- [3. Usage](#3-usage)
	- [3.1. Design-first with Swagger/OpenAPI documents](#31-design-first-with-swaggeropenapi-documents)
	- [3.2. Swagger document creation and edits](#32-swagger-document-creation-and-edits)
- [4. Quality gates and tests](#4-quality-gates-and-tests)
	- [4.1. Swagger quality analysis](#41-swagger-quality-analysis)
	- [4.2. Javascript API policy source code analysis](#42-javascript-api-policy-source-code-analysis)
	- [4.3. Javascript API policy test execution and code coverage](#43-javascript-api-policy-test-execution-and-code-coverage)
- [5. Contributions](#5-contributions)
- [6. License](#6-license)

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

### 4.1. Swagger quality analysis

Swagger quality analysis runs before every test execution:

```bash

$ npm test

```

To execute Swagger quality analysis alone, run:

```bash

$ npm run pretest

```


### 4.2. Javascript API policy source code analysis

`cordova-contacts-swagger-api` uses `ESLint` for static code analysis. It also uses `nsp` (the Node Security Program) to check for vulnerabilities, as well as `BitHound` to track dependency drift.

Code quality analysis runs before every test execution:

```bash

$ npm test

```

To execute `eslint` alone, run:

```bash

$ npm run pretest

```

### 4.3. Javascript API policy test execution and code coverage

`cordova-contacts-swagger-api` uses `jest` for BDD spec execution and code coverage analysis.

Code quality analysis runs before every test execution:

```bash

$ npm test

```

To execute `eslint` alone, run:

```bash

$ npm run pretest

```

## 5. Contributions
:family: We warmly welcome contributors. Check out the guidelines for [Contributing to `cordova-contacts-swagger-api`](./.github/CONTRIBUTING.md) and our [Contributor Covenant Code of Conduct][code-of-conduct-url].

Contributions are stories with a beginning, a middle, and an end, all told through issues and pull requests.
 * [Peruse open issues][issues-url] or
 * [Open a new pull request (PR)][pr-url]

## 6. License

[Apache 2.0][license-url] :copyright: [Greg Swindle][author-url].

---

[![Greenkeeper badge][greenkeeper-img]][greenkeeper-url] [![StackShare][stackshare-img]][stackshare-url]

[author-url]: https://github.com/gregswindle
[bithound-dep-img]: https://www.bithound.io/github/gregswindle/cordova-contacts-swagger-api/badges/dependencies.svg
[bithound-dep-url]: https://www.bithound.io/github/gregswindle/cordova-contacts-swagger-api/master/dependencies/npm
[bithound-dev-dep-img]: https://www.bithound.io/github/gregswindle/cordova-contacts-swagger-api/badges/devDependencies.svg
[bithound-dev-dep-url]: https://www.bithound.io/github/gregswindle/cordova-contacts-swagger-api/master/dependencies/npm
[codacy-img]: https://api.codacy.com/project/badge/Grade/554fe390431b455a87ba6acde3ff2989?style=flat-square
[codacy-url]: https://www.codacy.com/app/greg_7/cordova-contacts-swagger-api?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gregswindle/cordova-contacts-swagger-api&amp;utm_campaign=Badge_Grade
[code-of-conduct-url]: ./.github/CODE_OF_CONDUCT.md
[coveralls-img]: https://coveralls.io/repos/github/gregswindle/cordova-contacts-swagger-api/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/gregswindle/cordova-contacts-swagger-api?branch=master
[eslint-dev-env-url]: http://eslint.org/docs/developer-guide/development-environment
[greenkeeper-img]: https://badges.greenkeeper.io/gregswindle/cordova-contacts-swagger-api.svg?style=flat-square
[greenkeeper-url]: https://greenkeeper.io/
[inch-ci-img]: http://inch-ci.org/github/gregswindle/cordova-contacts-swagger-api.svg?branch=master
[inch-ci-url]: http://inch-ci.org/github/gregswindle/cordova-contacts-swagger-api
[issues-new-url]: https://github.com/gregswindle/cordova-contacts-swagger-api/issues/new
[issues-url]: https://github.com/gregswindle/cordova-contacts-swagger-api/issues
[license-image]: https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square
[license-url]: ./LICENSE
[no-dup-paths-url]: ./docs/rules/no-dup-paths.md
[no-path-verbs-url]: ./docs/rules/no-path-verbs.md
[nsp-img]: https://nodesecurity.io/orgs/gregswindle/projects/2761fa76-bf1a-4e31-a642-679dfe55e575/badge
[nsp-url]: https://nodesecurity.io/orgs/gregswindle/projects/2761fa76-bf1a-4e31-a642-679dfe55e575
[pr-url]: https://github.com/gregswindle/cordova-contacts-swagger-api/pulls
[readme-score-img]: http://readme-score-api.herokuapp.com/score.svg?url=https://github.com/gregswindle/cordova-contacts-swagger-api
[readme-score-url]: http://clayallsopp.github.io/readme-score?url=https://github.com/gregswindle/cordova-contacts-swagger-api
[rule-plural-paths-url]: ./docs/rules/require-plural-paths.md
[rules-backlog-wiki-url]: https://github.com/gregswindle/cordova-contacts-swagger-api/wiki/Rules-backlog
[stackshare-img]: https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat
[stackshare-url]: https://stackshare.io/gregswindle/cordova-contacts-swagger-api
[travis-ci-img]: https://travis-ci.org/gregswindle/cordova-contacts-swagger-api.svg?branch=master&style=flat-square
[travis-ci-url]:  https://travis-ci.org/gregswindle/cordova-contacts-swagger-api
