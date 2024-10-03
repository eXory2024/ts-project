import {createMyObject} from "./my-package/index.mjs"

const my_object = createMyObject()

console.log(my_object.a_prop)
console.log(my_object.non_existing_prop)
