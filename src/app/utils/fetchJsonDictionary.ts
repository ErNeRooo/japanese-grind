import WordDto from "../types/WordDto";

export default async function fetchJsonDictionary(
  filepath: string
): Promise<WordDto[]> {
  return fetch(filepath)
    .then((response) => response.json())
    .then((data) => data as WordDto[]);
}
