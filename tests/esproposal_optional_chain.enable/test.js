/* @flow */


var foo : {
  bar?: {
    baz?: string,
    qux?: number,
  },
  qux?: {
    quuz?: {}
  }
} = {
  bar: {
    baz: "BAZ",
    qux: 123
  }
};
var bar : ?Object = foo?.bar;
var baz : ?string = foo?.bar?.baz;
var qux : ?number = foo?.qux;
var quux : ?Object = foo?.qux?.quuz;

var bar2 : Object = foo?.bar;  //error - possible undefined
var baz2 : ?number = foo?.bar?.baz //error - mismatch
// TODO: more cases

