/* @flow */

var foo = {
  bar: {
    baz: "BAZ",
    qux: 123
  }
};

var bar = foo?.bar;
var baz = foo?.bar?.baz;
var qux = foo?.qux;
var quux = foo?.qux?.quuz;
