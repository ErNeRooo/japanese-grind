import Word from "../types/Word";
import WordDto from "../types/WordDto";

const mapWordsFromDto = (dtos: WordDto[]): Word[] => {
  return dtos.map((dto) => ({
    Index: dto.Index,
    Kanji: dto.Kanji,
    Kana: dto.Kana,
    EnglishTranslations: dto.EnglishTranslations,
  }));
};

export default mapWordsFromDto;
