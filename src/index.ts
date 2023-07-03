/**
 * A string of Persian numerals.
 * @const {string}
 */
const PersianNumbers = "۰۱۲۳۴۵۶۷۸۹";

/**
 * A string of Arabic numerals.
 * @const {string}
 */
const ArabicNumbers = "٠١٢٣٤٥٦٧٨٩";

/**
 * A regular expression that matches English numerals.
 * @const {RegExp}
 */
const EnglishNumbersRegex = /\d/g;

/**
 * A regular expression that matches Persian numerals.
 * @const {RegExp}
 */
const PersianNumbersRegex = /[۰-۹]/g;

/**
 * A regular expression that matches Arabic numerals.
 * @const {RegExp}
 */
const ArabicNumbersRegex = /[٠-٩]/g;

/**
 * A regular expression that matches Persian and Arabic numerals.
 * @const {RegExp}
 */
const PersianArabicNumbersRegex = /[٠-٩۰-۹]/g;

/**
 * A regular expression that matches English and Persian numerals.
 * @const {RegExp}
 */
const EnglishPersianNumbersRegex = /[\d۰-۹]/g;

/**
 * A regular expression that matches English and Arabic numerals.
 * @const {RegExp}
 */
const EnglishArabicNumbersRegex = /[\d٠-٩]/g;

/**
 * Converts English numerals to Persian numerals.
 * @param {string} input - The input string.
 * @returns {string} - The output string with converted numerals.
 */
export function EnglishToPersian(input: string): string {
	return input.replace(EnglishNumbersRegex, (d: string) => PersianNumbers[d]);
}

/**
 * Converts English numerals to Arabic numerals.
 * @param {string} input - The input string.
 * @returns {string} - The output string with converted numerals.
 */
export function EnglishToArabic(input: string): string {
	return input.replace(EnglishNumbersRegex, (d: string) => ArabicNumbers[d]);
}

/**
 * Converts Persian numerals to English numerals.
 * @param {string} input - The input string.
 * @returns {string} - The output string with converted numerals.
 */
export function PersianToEnglish(input: string): string {
	return input.replace(PersianNumbersRegex, (d: string) => "" + PersianNumbers.indexOf(d));
}

/**
 * Converts Arabic numerals to English numerals.
 * @param {string} input - The input string.
 * @returns {string} - The output string with converted numerals.
 */
export function ArabicToEnglish(input: string): string {
	return input.replace(ArabicNumbersRegex, (d: string) => "" + ArabicNumbers.indexOf(d));
}

/**
 * Converts Persian numerals to Arabic numerals.
 * @param {string} input - The input string.
 * @returns {string} - The output string with converted numerals.
 */
export function PersianToArabic(input: string) {
	return input.replace(PersianNumbersRegex, (d: string) => ArabicNumbers[PersianNumbers.indexOf(d)]);
}

/**
 * Converts Arabic numerals to Persian numerals.
 * @param {string} input - The input string.
 * @returns {string} - The output string with converted numerals.
 */
export function ArabicToPersian(input: string): string {
	return input.replace(ArabicNumbersRegex, (d: string) => PersianNumbers[ArabicNumbers.indexOf(d)]);
}

/**
 * Converts Persian and Arabic numerals to English numerals.
 * @param {string} input - The input string.
 * @returns {string} - The output string with converted numerals.
 */
export function ToEnglish(input: string): string {
	return input.replace(PersianArabicNumbersRegex, (d: string) => {
		const l = PersianNumbers.indexOf(d);
		return "" + (l === -1 ? ArabicNumbers.indexOf(d) : l);
	});
}

/**
 * Converts English and Arabic numerals to Persian numerals.
 * @param {string} input - The input string.
 * @returns {string} - The output string with converted numerals.
 */
export function ToPersian(input: string): string {
	return input.replace(
		EnglishArabicNumbersRegex,
		(d: string) => "" + (PersianNumbers[d] ?? PersianNumbers[ArabicNumbers.indexOf(d)])
	);
}

/**
 * Converts English and Persian numerals to Arabic numerals.
 * @param {string} s - The input string.
 * @returns {string} - The output string with converted numerals.
 */
export function ToArabic(s: string): string {
	return s.replace(
		EnglishPersianNumbersRegex,
		(d: string) => "" + (ArabicNumbers[d] ?? ArabicNumbers[PersianNumbers.indexOf(d)])
	);
}
