# date-mock

Date mock utility with the following functions

mockDateOnce: takes an date string to replace 1 instance of a Date constructor (`new Date()`) or `Date.now()` call

mockDate: replaces all instances of a Date constructor (`new Date()`) or `Date.now()` calls

mockDates: provide an array in chronological order of instances of of a Date constructor (`new Date()`) or `Date.now()` calls to replace. If `"real"` is passed in, this call will fallback to the vanilla Date constructor.
