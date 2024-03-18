import algorithmA from './algorithmA.js';

    // Teststrategi:
    // 1. Test when all letters are correct and in the correct position.
    // 2. Test when all letters are correct but in the wrong position.
    // 3. Test when all letters are wrong.
    // 4. Test when some letters are correct and in the correct position, some are correct but in the wrong position, and some are incorrect.

describe("Algorithm A - Results", () => {

    test("All correct letters in correct positions", () => {
      const result = algorithmA("CYKLA", "CYKLA");
      expect(result).toEqual([
        { letter: "C", result: "correct" },
        { letter: "Y", result: "correct" },
        { letter: "K", result: "correct" },
        { letter: "L", result: "correct" },
        { letter: "A", result: "correct" }
      ]);
    });
  
    test('All correct letters but in different positions', () => {
        const result = algorithmA('YACKL', 'CYKLA');
        expect(result).toEqual([
            { letter: 'Y', result: 'misplaced' },
            { letter: 'A', result: 'misplaced' },
            { letter: 'C', result: 'misplaced' },
            { letter: 'K', result: 'misplaced' },
            { letter: 'L', result: 'misplaced' }
        ]);
    });

    test("All incorrect letters", () => {
      const result = algorithmA("ABDFH", "LEMON");
      expect(result).toEqual([
        { letter: "A", result: "incorrect" },
        { letter: "B", result: "incorrect" },
        { letter: "D", result: "incorrect" },
        { letter: "F", result: "incorrect" },
        { letter: "H", result: "incorrect" }
      ]);
    });

    test("Mixed correct, misplaced, and incorrect letters", () => {
        const result = algorithmA("HALLÅ", "CYKLA");
        expect(result).toEqual([
          { letter: "H", result: "incorrect" },
          { letter: "A", result: "misplaced" },
          { letter: "L", result: "incorrect" },
          { letter: "L", result: "correct" },
          { letter: "Å", result: "incorrect" },
        ]);
      });
  });