import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import banner from "./banner";
import products from "./products";
import electronics from "./electronics";
import accessorises from "./accessorises";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([banner, products, electronics, accessorises]),
});
