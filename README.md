# Snake Case to Camel Case

A module to convert object keys to camelcase.

`npm i keys-converter` or `yarn add keys-converter`

<img src="./readme/fn_import.png">

---

### How to use it?

`objectKeysToCamelCaseV2` and `objectKeysToSnakelCaseV2`

### Two available functions

convert object keys from `snake_case` to `camelCase`

<img src="./readme/to_camel_case.png">

convert object keys from `camelCase` to `snake_case`

<img src="./readme/to_snake_case.png">

The function `objectKeysToCamelCaseV2` receives an object
You can infer the return as argument so the result will be typed

<img src="./readme/types.png">

### Inference `result` and `input`

If you provide the input type, the function validate the arguments
So if you provide result type the return will be typed

<img src="./readme/inference-2.png">

---

## Warning

> - The function does not remove first underscore for security

example
If your object has an protected prop like `_id` It will keep it

<img src="./readme/keep_id.png">
```
