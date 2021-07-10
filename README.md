# Snake Case to Camel Case

A module to convert object keys to camelcase.

`npm i keys-converter` or `yarn add keys-converter`

<img src="./readme/import.png">

---

### How to use it?

```ts
import { objectKeysToCamelCase } from "keys-converter";
```

The function `objectKeysToCamelCase` receives an object
You can infer the return as argument so the result will be typed

<img src="./readme/result.png">

### Inferer the `result` and `input`

<img src="./readme/inference.png">

If you provide the input type, the function validate the arguments
So if you provide result type the return will be typed

<img src="./readme/inference-2.png">
