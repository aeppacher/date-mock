# date-mock

Date mock utility with the following functions

mockDateOnce: takes an date string to replace 1 instance of a Date constructor (`new Date()`) or `Date.now()` call

```
mockDates("2021-01-01:00:00:00.000Z");

console.log(new Date().toIsoString()); //"2021-01-01:00:00:00.000Z"

console.log(new Date().toIsoString()); // current real time
```

mockDate: replaces all instances of a Date constructor (`new Date()`) or `Date.now()` calls

```
mockDates("2021-01-01:00:00:00.000Z");

console.log(new Date().toIsoString()); //"2021-01-01:00:00:00.000Z"

console.log(new Date().toIsoString()); //"2021-01-01:00:00:00.000Z"
```

mockDates: provide an array in chronological order of instances of of a Date constructor (`new Date()`) or `Date.now()` calls to replace. If `"real"` is passed in, this call will fallback to the vanilla Date constructor.

```
mockDates([
  "2021-01-01:00:00:00.000Z",
  "2021-01-01:00:00:10.000Z",
  "real", //nextInterval - we want it to build date off params passed to it
  "2021-01-01:00:00:20.000Z",
]);

console.log(new Date().toIsoString()); //"2021-01-01:00:00:00.000Z"

console.log(new Date().toIsoString()); //"2021-01-01:00:00:10.000Z"

console.log(new Date().toIsoString()); // current real time

console.log(Date.now()); // 1609459220000 ("2021-01-01:00:00:20.000Z")
```
