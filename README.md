## Table of Contents

1. [Pakt Client](#pakt-client)
1. [Team](#team)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [File Hierarchy](#file-hierarchy)
1. [Contributing](#contributing)
1. [Documentation](#documentation)
1. [Tests](#tests)

## Pakt Client

You can find the corresponding Client [here](https://github.com/marvelousSarsaparilla/paktClient.git).

## Team

  - __Product Owner__: Taylor Chamberlain
  - __Scrum Master__: Vincent Pham
  - __Development Team Members__: Deniz Mekik, Robert Boggs, Taylor Chamberlain, Vincent Pham

## Development

### Installing Dependencies

From within the root directory:
```sh
npm install
```

### File Hierarchy

```js
ROOT
 |__SERVER__
    |- mockData.js
    |- server.js
    |
    |__CONTROLLERS__
    |   |- paktController.js
    |   |- paktUserController.js
    |   |- pictureController.js
    |   |- userController.js
    |
    |__MODELS__
    |   |- paktModel.js
    |   |- paktUserModel.js
    |   |- pictureModel.js
    |   |- userModel.js
    |   |- userUserModel.js
    |
    |__QUERIES__
    |   |- paktQueries.js
    |   |- paktUserQueries.js
    |   |- pictureQueries.js
    |   |- userQueries.js
    |
    |__SPEC__
    |   |- paktControllerSpec.js
    |   |- pictureControllerSpec.js
    |   |- userControllerSpec.js
    |
    |__UTILS__
        |- cronJob.js
        |- db.js
        |- env.example.js
        |- middleware.js
        |- routes.js
        | ... etc ...
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

##Documentation
[Google Doc](https://docs.google.com/document/d/1dVcplVjLmCKfeFGQ8nND-BS1UNxMItkWBqRBZwvbvWs/edit?usp=sharing)

##Tests
From within the root directory:
```sh
mocha spec
```
