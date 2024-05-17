# Date Picker Svelte

[![NPM](https://img.shields.io/npm/v/%40gregg-cbs%2Fsvelte-date-picker)](https://npmjs.com/package/@gregg-cbs/svelte-date-picker)
[![License](https://img.shields.io/npm/l/%40gregg-cbs%2Fsvelte-date-picker.svg)](LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dm/%40gregg-cbs%2Fsvelte-date-picker.svg)](https://npmjs.com/package/@gregg-cbs/svelte-date-picker)
[![test](https://github.com/coldbrewstudios/svelte-date-picker/actions/workflows/test.yml/badge.svg)](https://github.com/coldbrewstudios/svelte-date-picker/actions/workflows/test.yml)

Date and time picker for Svelte

Features:
- Theming
- Custom formats
- Internationalization (i18n)
- Autopunctuation (e.g typing "20201111111111" gives you "2020-11-11 11:11:11" with the default format)
- Keyboard shortcuts

[Demo](https://date-picker-svelte.kasper.space/demo) • [Documentation](https://date-picker-svelte.kasper.space/docs) • [REPL](https://svelte.dev/repl/044911429c4b4e659362518d9a5deaae?version=4)

![](Screenshot.png)

## Install

```
npm i @gregg-cbs/svelte-date-picker
```

## Usage

```svelte
<script>
  import { DateInput, DatePicker } from 'date-picker-svelte'

  let date = new Date()

  const minDate = new Date()
  minDate.setFullYear(2020)

  const maxDate = new Date()
  maxDate.setFullYear(2026)

  function onChange(e) {
    date = e.detail;
  }
</script>

<!-- Props
	/** Date value. It's `null` if no date is selected */
	value: Date | null = null

	/** Show a time picker with the specified precision */
	timePrecision: 'minute' | 'second' | 'millisecond' | null = null

	/** The earliest year the user can select */
	min = new Date(defaultDate.getFullYear() - 20, 0, 1)

	/** The latest year the user can select */
	max = new Date(defaultDate.getFullYear(), 11, 31, 23, 59, 59, 999)

  /** Wait with updating the date until a date is selected */
	browseWithoutSelecting = false

  /** Locale object for internationalization */
  locale: Locale = {}
 -->
<!-- input that shows datepicker (wraps the DatePicker for you) -->
<DateInput bind:value={date} />
  
<!-- standalone date picker/calendar so you can do your own thing -->
<DatePicker 
  value={value}
  min={minDate}
  max={maxDate}
  on:change={onChange}
/>

<!-- you can also bind value but a note that this will fire a change when the component mounts -->
<DatePicker 
  bind:value={value}
  min={minDate}
  max={maxDate}
/>
```

Check the [docs](https://date-picker-svelte.kasper.space/docs) to learn more

## Contributing

### Get started

1. Install Node.js (v14 works)
2. Run `npm install`

### Commands

- `npm run dev`: Start site in dev mode
- `npm run build`: Build package and site
- `npm run preview`: Preview production site
- `npm run check`: Run `svelte-check`
- `npm run test`: Run tests
- `npm run format`: Format code

### Publish new version

1. Update `CHANGELOG.md`
2. Check for errors
	```
	npm run lint
	```
3. Bump the version number
	```
	npm version --no-git-tag <version>
	```
4. Publish
	```
	npm publish
	```
5. Commit with a tag in format "v#.#.#"
6. Create GitHub release with release notes
