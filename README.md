# convert-numbers
Convert Persian, Arabic and English numbers to each other.

## Installation

To install convert-numbers, you can use either npm or Yarn.

```
npm install convert-numbers

// OR

yarn add convert-numbers
```

## Usage

The following are the functions provided by convert-numbers:

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

```
import convertNumbers from "convert-numbers";

const persianNumbers = convertNumbers.EnglishToPersian("12345");

console.log(persianNumbers); // ۰۱۲۳۴۵
```

## License
Developed by Shahab Movahhedi ([shmovahhedi.com](https://shmovahhedi.com)).

Licensed under the MIT license.
