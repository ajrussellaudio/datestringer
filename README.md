# Datestringer

A library to parse and stringify your dates.

## Usage

### `parse`

Given the current date and time is `2020-05-01T00:00:00`:

```ts
parse('now-1y/y'); //  -> 2019-01-01T00:00:00 - now minus one year rounded to the nearest year
parse('now/y'); //     -> 2020-01-01T00:00:00 - now rounded to the nearest year
parse('now-1d'); //    -> 2020-04-30T00:00:00 - now minus 1 day
parse('now+1d'); //    -> 2020-05-02T00:00:00 - now add 1 day
parse('now-4d-4h'); // -> 2020-04-26T20:00:00 - now minus four days and four hours
```

### `stringify`

Given the current date and time is `2020-05-01T00:00:00`:

```ts
stringify(new Date('2020-04-30T00:00:00')); // -> 'now-1d' - now minus 1 day
stringify(new Date('2020-05-02T00:00:00')); // -> 'now+1d' - now add 1 day
stringify(new Date('2020-04-26T20:00:00')); // -> 'now-5d+20h' - now minus 5 days add 20 hours
```

## Tests

You want tests? We got tests!

To run the test suite:

```bash
$ yarn install # install dependencies
$ yarn test # run tests
```

## Todo

- Add rounding to `stringify` output

## Problems

Rounding when `parse`ing was a pain. I'm sure a shortcut exists to avoid the many, many rounding functions, but I didn't see it.

Months and years are not all the same length! The arithmetic approach that worked for seconds, minutes, hours, days and weeks didn't work for months and years. Assuming a month is 30 days or 365 days doesn't return the right day after doing the maths.
