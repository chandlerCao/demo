function f({ a, b = 0 } = { a: "" }) {
    // ...
}
f({ a: "yes" }); // ok, default b = 0
f()