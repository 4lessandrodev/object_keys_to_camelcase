# Snake Case to Camel Case

A module to convert object keys to camelcase or snakecase.

```sh
npm i keys-converter 
# or 
yarn add keys-converter
```

Use on browser

```html
<script src="https://cdn.jsdelivr.net/npm/keys-converter@3.0.3/bundle/index.min.js"></script>
```

```html
<script type="module">
	
	import { objectKeysToCamelCaseV2, objectKeysToSnakeCaseV2 } from 'https://cdn.skypack.dev/keys-converter';

</script>

```


<img src="https://i.ibb.co/YNvDVsk/fn-import.png">

---

### How to use it?

`objectKeysToCamelCaseV2` and `objectKeysToSnakeCaseV2`

### Two available functions

- convert object keys from `snake_case` to `camelCase`

<img src="https://i.ibb.co/MsY2B5s/to-camel-case.png">

- convert object keys from `camelCase` to `snake_case`

<img src="https://i.ibb.co/72XryGb/to-snake-case.png">

The function `objectKeysToCamelCaseV2` receives an object.
You can to infer the return type as argument so the result returned will have types

#### Inference `result` and `input`


<img src="https://i.ibb.co/cvfPWRP/types.png">

If you provide the input type the function will validate the arguments,
So if you provide the result type the returned value will have "types"

<img src="https://i.ibb.co/dBnZszX/inference-type.png">

---

## Warning

> - Function does not remove the first underscore for security

example
If your object has a protected prop like `_id` It will keep it

<img src="https://i.ibb.co/chVbVw7/keep-id.png">
