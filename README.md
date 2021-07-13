# Snake Case to Camel Case

A module to convert object keys to camelcase or snakecase.

`npm i keys-converter` or `yarn add keys-converter`

<img src="./readme/fn_import.png">

---

### How to use it?

`objectKeysToCamelCaseV2` and `objectKeysToSnakelCaseV2`

### Two available functions

- convert object keys from `snake_case` to `camelCase`
- convert object keys from `camelCase` to `snake_case`

<img src="./readme/to_camel_case.png">

The function `objectKeysToCamelCaseV2` receives an object.
You can to infer the return type as argument so the result returned will have types

#### Inference `result` and `input`

<img src="./readme/types.png">

If you provide the input type the function will validate the arguments,
So if you provide the result type the returned value will have "types"

<img src="./readme/inference_type.png">

---

## Warning

> - Function does not remove the first underscore for security

example
If your object has a protected prop like `_id` It will keep it

<img src="./readme/keep_id.png">
```
