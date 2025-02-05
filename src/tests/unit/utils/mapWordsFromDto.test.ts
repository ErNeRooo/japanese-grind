import WordDto from "@/app/types/WordDto";
import mapWordsFromDto from "@/app/utils/mapWordsFromDto";

test("given 1 word dto, returns 1 word", () => {
  const wordDtos: WordDto[] = [
    {
      Index: 1,
      Kanji: "test",
      Kana: "test",
      PartsOfSpeech: ["test"],
      EnglishTranslations: ["test", "w"],
      Example: "test",
      ExampleTranslation: "test",
    },
  ];

  const words = mapWordsFromDto(wordDtos);

  expect(words).toEqual([
    {
      Index: 1,
      Kanji: "test",
      Kana: "test",
      EnglishTranslations: ["test", "w"],
    },
  ]);
});

test("given empty array, returns empty array", () => {
  const wordDtos: WordDto[] = [];

  const words = mapWordsFromDto(wordDtos);

  expect(words).toEqual([]);
});

test("given sorted array of wordDto, returns array of word with same order", () => {
  const wordDtos: WordDto[] = [
    {
      Index: 1,
      Kanji: "事",
      Kana: "こと",
      PartsOfSpeech: ["n."],
      EnglishTranslations: ["thing"],
      Example: "今年はいろいろな事があった。",
      ExampleTranslation: "All kinds of things happened this year.",
    },
    {
      Index: 2,
      Kanji: "言う",
      Kana: "いう, ゆう",
      PartsOfSpeech: ["v."],
      EnglishTranslations: ["say, speak, talk"],
      Example: "はっきり言うと、あなたの言っていることは無意味です。",
      ExampleTranslation: "Frankly speaking, you are talking nonsense.",
    },
    {
      Index: 3,
      Kanji: "する",
      Kana: "する",
      PartsOfSpeech: ["v."],
      EnglishTranslations: ["do", "make"],
      Example: "仕事をしなければなりません。",
      ExampleTranslation: "I have to do my work.",
    },
    {
      Index: 4,
      Kanji: "ある",
      Kana: "ある",
      PartsOfSpeech: ["v."],
      EnglishTranslations: ["be (existence), have (possession), happen, occur"],
      Example: "彼の報告書は問題がある。",
      ExampleTranslation: "His report has some problems.",
    },
    {
      Index: 5,
      Kanji: "なる",
      Kana: "なる",
      PartsOfSpeech: ["v."],
      EnglishTranslations: [
        "become, get",
        "come to do, start to do",
        "turn into",
      ],
      Example: "彼は金持ちになるでしょう。",
      ExampleTranslation: "He will become rich.",
    },
    {
      Index: 6,
      Kanji: "思う",
      Kana: "おもう",
      PartsOfSpeech: ["v."],
      EnglishTranslations: ["think, believe", "feel", "expect"],
      Example: "私はそう思いません。",
      ExampleTranslation: "I don’t think so.",
    },
    {
      Index: 7,
      Kanji: "物",
      Kana: "もの",
      PartsOfSpeech: ["n."],
      EnglishTranslations: ["thing, object, stuff"],
      Example: "そんなに高い物は買えません。",
      ExampleTranslation: "I can’t buy such expensive stuff.",
    },
    {
      Index: 8,
      Kanji: "何",
      Kana: "なに",
      PartsOfSpeech: ["pron."],
      EnglishTranslations: ["what", "something", "anything", "nothing"],
      Example: "何を考えているんですか？",
      ExampleTranslation: "What are you thinking?",
    },
    {
      Index: 9,
      Kanji: "私",
      Kana: "わたし, わたくし, あたし",
      PartsOfSpeech: ["pron."],
      EnglishTranslations: ["I"],
      Example: "私は寿司が好きです。",
      ExampleTranslation: "I like sushi.",
    },
  ];

  const words = mapWordsFromDto(wordDtos);

  expect(words).toEqual([
    {
      Index: 1,
      Kanji: "事",
      Kana: "こと",
      EnglishTranslations: ["thing"],
    },
    {
      Index: 2,
      Kanji: "言う",
      Kana: "いう, ゆう",
      EnglishTranslations: ["say, speak, talk"],
    },
    {
      Index: 3,
      Kanji: "する",
      Kana: "する",
      EnglishTranslations: ["do", "make"],
    },
    {
      Index: 4,
      Kanji: "ある",
      Kana: "ある",
      EnglishTranslations: ["be (existence), have (possession), happen, occur"],
    },
    {
      Index: 5,
      Kanji: "なる",
      Kana: "なる",
      EnglishTranslations: [
        "become, get",
        "come to do, start to do",
        "turn into",
      ],
    },
    {
      Index: 6,
      Kanji: "思う",
      Kana: "おもう",
      EnglishTranslations: ["think, believe", "feel", "expect"],
    },
    {
      Index: 7,
      Kanji: "物",
      Kana: "もの",
      EnglishTranslations: ["thing, object, stuff"],
    },
    {
      Index: 8,
      Kanji: "何",
      Kana: "なに",
      EnglishTranslations: ["what", "something", "anything", "nothing"],
    },
    {
      Index: 9,
      Kanji: "私",
      Kana: "わたし, わたくし, あたし",
      EnglishTranslations: ["I"],
    },
  ]);
});

test("given shuffled array of wordDto, returns array of word with same order", () => {
  const wordDtos: WordDto[] = [
    {
      Index: 12,
      Kanji: "行く",
      Kana: "いく, ゆく",
      PartsOfSpeech: ["v."],
      EnglishTranslations: ["go", "come"],
      Example: "すぐ行きます。",
      ExampleTranslation: "I’m just coming.",
    },
    {
      Index: 3,
      Kanji: "する",
      Kana: "する",
      PartsOfSpeech: ["v."],
      EnglishTranslations: ["do", "make"],
      Example: "仕事をしなければなりません。",
      ExampleTranslation: "I have to do my work.",
    },

    {
      Index: 8,
      Kanji: "何",
      Kana: "なに",
      PartsOfSpeech: ["pron."],
      EnglishTranslations: ["what", "something", "anything", "nothing"],
      Example: "何を考えているんですか？",
      ExampleTranslation: "What are you thinking?",
    },
    {
      Index: 16,
      Kanji: "来る",
      Kana: "くる",
      PartsOfSpeech: ["v."],
      EnglishTranslations: ["come"],
      Example: "ここに来てください。",
      ExampleTranslation: "Come here, please.",
    },
    {
      Index: 24,
      Kanji: "いる",
      Kana: "いる",
      PartsOfSpeech: ["v."],
      EnglishTranslations: ["be, exist", "stay"],
      Example: "「どこにいるの。」「ここだよ。」",
      ExampleTranslation: "“Where are you?” “I’m here.”",
    },

    {
      Index: 13,
      Kanji: "これ",
      Kana: "これ",
      PartsOfSpeech: ["pron."],
      EnglishTranslations: ["this"],
      Example: "これをください。(レストランや店で)",
      ExampleTranslation: "I will take this. (in a restaurant or shop)",
    },
    {
      Index: 22,
      Kanji: "やる",
      Kana: "やる",
      PartsOfSpeech: ["v."],
      EnglishTranslations: ["do", "make", "give"],
      Example: "今すぐやります。",
      ExampleTranslation: "I’ll do that right now.",
    },
    {
      Index: 9,
      Kanji: "私",
      Kana: "わたし, わたくし, あたし",
      PartsOfSpeech: ["pron."],
      EnglishTranslations: ["I"],
      Example: "私は寿司が好きです。",
      ExampleTranslation: "I like sushi.",
    },
    {
      Index: 18,
      Kanji: "今",
      Kana: "いま",
      PartsOfSpeech: ["n."],
      EnglishTranslations: ["now"],
      Example: "今、何時ですか。",
      ExampleTranslation: "What time is it now?",
    },
    {
      Index: 10,
      Kanji: "それ",
      Kana: "それ",
      PartsOfSpeech: ["pron."],
      EnglishTranslations: ["that"],
      Example: "それは明子さんのカバンですか。",
      ExampleTranslation: "Is that Akiko’s bag?",
    },
    {
      Index: 7,
      Kanji: "物",
      Kana: "もの",
      PartsOfSpeech: ["n."],
      EnglishTranslations: ["thing, object, stuff"],
      Example: "そんなに高い物は買えません。",
      ExampleTranslation: "I can’t buy such expensive stuff.",
    },
    {
      Index: 4,
      Kanji: "ある",
      Kana: "ある",
      PartsOfSpeech: ["v."],
      EnglishTranslations: ["be (existence), have (possession), happen, occur"],
      Example: "彼の報告書は問題がある。",
      ExampleTranslation: "His report has some problems.",
    },
    {
      Index: 11,
      Kanji: "無い",
      Kana: "ない",
      PartsOfSpeech: ["i-adj."],
      EnglishTranslations: ["There is no . . . , no . . ."],
      Example: "今、お金が無いんです。",
      ExampleTranslation: "I have no money now.",
    },
  ];

  const words = mapWordsFromDto(wordDtos);

  expect(words).toEqual([
    {
      Index: 12,
      Kanji: "行く",
      Kana: "いく, ゆく",
      EnglishTranslations: ["go", "come"],
    },
    {
      Index: 3,
      Kanji: "する",
      Kana: "する",
      EnglishTranslations: ["do", "make"],
    },

    {
      Index: 8,
      Kanji: "何",
      Kana: "なに",
      EnglishTranslations: ["what", "something", "anything", "nothing"],
    },
    {
      Index: 16,
      Kanji: "来る",
      Kana: "くる",
      EnglishTranslations: ["come"],
    },
    {
      Index: 24,
      Kanji: "いる",
      Kana: "いる",
      EnglishTranslations: ["be, exist", "stay"],
    },

    {
      Index: 13,
      Kanji: "これ",
      Kana: "これ",
      EnglishTranslations: ["this"],
    },
    {
      Index: 22,
      Kanji: "やる",
      Kana: "やる",
      EnglishTranslations: ["do", "make", "give"],
    },
    {
      Index: 9,
      Kanji: "私",
      Kana: "わたし, わたくし, あたし",
      EnglishTranslations: ["I"],
    },
    {
      Index: 18,
      Kanji: "今",
      Kana: "いま",
      EnglishTranslations: ["now"],
    },
    {
      Index: 10,
      Kanji: "それ",
      Kana: "それ",
      EnglishTranslations: ["that"],
    },
    {
      Index: 7,
      Kanji: "物",
      Kana: "もの",
      EnglishTranslations: ["thing, object, stuff"],
    },
    {
      Index: 4,
      Kanji: "ある",
      Kana: "ある",
      EnglishTranslations: ["be (existence), have (possession), happen, occur"],
    },
    {
      Index: 11,
      Kanji: "無い",
      Kana: "ない",
      EnglishTranslations: ["There is no . . . , no . . ."],
    },
  ]);
});
