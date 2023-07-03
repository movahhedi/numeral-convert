import {
	EnglishToPersian,
	EnglishToArabic,
	PersianToEnglish,
	ArabicToEnglish,
	PersianToArabic,
	ArabicToPersian,
	ToEnglish,
	ToPersian,
	ToArabic,
} from "../src/index";

describe("EnglishToPersian", () => {
	test("Converts English numbers to Persian numbers", () => {
		expect(EnglishToPersian("123")).toBe("۱۲۳");
		expect(EnglishToPersian("456")).toBe("۴۵۶");
		expect(EnglishToPersian("789")).toBe("۷۸۹");
	});
});

describe("EnglishToArabic", () => {
	test("Converts English numbers to Arabic numbers", () => {
		expect(EnglishToArabic("123")).toBe("١٢٣");
		expect(EnglishToArabic("456")).toBe("٤٥٦");
		expect(EnglishToArabic("789")).toBe("٧٨٩");
	});
});

describe("PersianToEnglish", () => {
	test("Converts Persian numbers to English numbers", () => {
		expect(PersianToEnglish("۱۲۳")).toBe("123");
		expect(PersianToEnglish("۴۵۶")).toBe("456");
		expect(PersianToEnglish("۷۸۹")).toBe("789");
	});
});

describe("ArabicToEnglish", () => {
	test("Converts Arabic numbers to English numbers", () => {
		expect(ArabicToEnglish("١٢٣")).toBe("123");
		expect(ArabicToEnglish("٤٥٦")).toBe("456");
		expect(ArabicToEnglish("٧٨٩")).toBe("789");
	});
});

describe("PersianToArabic", () => {
	test("Converts Persian numbers to Arabic numbers", () => {
		expect(PersianToArabic("۱۲۳")).toBe("١٢٣");
		expect(PersianToArabic("۴۵۶")).toBe("٤٥٦");
		expect(PersianToArabic("۷۸۹")).toBe("٧٨٩");
	});
});

describe("ArabicToPersian", () => {
	test("Converts Arabic numbers to Persian numbers", () => {
		expect(ArabicToPersian("١٢٣")).toBe("۱۲۳");
		expect(ArabicToPersian("٤٥٦")).toBe("۴۵۶");
		expect(ArabicToPersian("٧٨٩")).toBe("۷۸۹");
	});
});

describe("ToEnglish", () => {
	test("Converts Persian and Arabic numbers to English numbers", () => {
		expect(ToEnglish("۱۲٣")).toBe("123");
		expect(ToEnglish("٤۵۶")).toBe("456");
		expect(ToEnglish("۷٨٩")).toBe("789");
	});
});

describe("ToPersian", () => {
	test("Converts English and Arabic numbers to Persian numbers", () => {
		expect(ToPersian("123")).toBe("۱۲۳");
		expect(ToPersian("٤٥٦")).toBe("۴۵۶");
		expect(ToPersian("7۸۹")).toBe("۷۸۹");
	});
});

describe("ToArabic", () => {
	test("Converts English and Persian numbers to Arabic numbers", () => {
		expect(ToArabic("123")).toBe("١٢٣");
		expect(ToArabic("۴۵۶")).toBe("٤٥٦");
		expect(ToArabic("7۸۹")).toBe("٧٨٩");
	});
});
