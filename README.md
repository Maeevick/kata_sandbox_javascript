# JS kata sandbox

Just a minimalist sandbox/boilerplate to train your skills with javascript, eslint and jest on kata/exercices or something else.

:arrow_right: **Obvious Note**: Node 16 (Long Time Support) is recommended in any context.

:arrow_right: **Obvious Note**: install dependencies
```shell
npm i
```

### Main commands and configs

- eslint follow "standard" rules (with few personal choices*) feel free to adapt them to your usage

  ```shell
  npm run lint
  ```
  ```shell
  npm run lint:fix
  ```

  ```json
  "rules": {
      "indent": ["error", 4],
      "comma-dangle": ["error", "always-multiline"],
      "quotes": ["error", "single"],
      "space-before-function-paren": ["error", "never"]
  }
  ```

- jest is configured by default (simpliest config file to accept Node16 modules without babel), feel free to custom it

  ```shell
  npm run test
  ```
  ```shell
  npm run test:watch
  ```
  ```shell
  npm run test:coverage
  ```
  
### Some resources/kata to train your skills

- https://kata-log.rocks/
- https://codingdojo.org/
- https://katalyst.codurance.com/browse
