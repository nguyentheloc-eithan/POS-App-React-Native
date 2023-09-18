export function CapitalizeFirstOfWord(input: string) {
  const words = input.split(' ');
  const formattedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return formattedWords.join(' ');
}
