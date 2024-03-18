function algorithmA(guess, selectedWord) {
    guess = guess.toUpperCase();
    selectedWord = selectedWord.toUpperCase();
  
    return Array.from({ length: selectedWord.length }, (_, i) => {
      const guessedLetter = guess[i];
      const selectedLetter = selectedWord[i];
  
      if (guessedLetter === selectedLetter) {
        return { letter: guessedLetter, result: "correct" };
      }
  
      const isIncorrect =
        guess.split("").filter((char) => char === guessedLetter).length >
        selectedWord.split("").filter((char) => char === guessedLetter).length;
  
      return {
        letter: guessedLetter,
        result: isIncorrect ? "incorrect" : "misplaced",
      };
    });
  }
  
  export default algorithmA;