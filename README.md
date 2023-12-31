# numeral-convert
Convert Persian, Arabic and English numbers to each other.

## Installation

To install numeral-convert, you can use either npm or Yarn.

```
npm install numeral-convert

// OR

yarn add numeral-convert
```

## Usage

The following are the functions provided by numeral-convert:

* `EnglishToPersian()`: Converts English numerals to Persian numerals.
* `EnglishToArabic()`: Converts English numerals to Arabic numerals.
* `PersianToEnglish()`: Converts Persian numerals to English numerals.
* `PersianToArabic()`: Converts Persian numerals to Arabic numerals.
* `ArabicToEnglish()`: Converts Arabic numerals to English numerals.
* `ArabicToPersian()`: Converts Arabic numerals to Persian numerals.
* `ToEnglish()`: Converts Persian and Arabic numerals to English numerals.
* `ToPersian()`: Converts English and Arabic numerals to Persian numerals.
* `ToArabic()`: Converts English and Persian numerals to Arabic numerals.

For example, the following code converts the number "12345" to Persian numerals:

```ts
import convertNumbers from "numeral-convert";

const persianNumbers = convertNumbers.EnglishToPersian("12345");

console.log(persianNumbers); // ۱۲۳۴۵
```

## License
Developed by Shahab Movahhedi ([shmovahhedi.com](https://shmovahhedi.com)).

Licensed under the MIT license.
