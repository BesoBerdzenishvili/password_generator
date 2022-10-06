import generator from "generate-password";

export const generatePassword = (
  length,
  uppercase,
  lowercase,
  numbers,
  symbols
) => {
  let password = generator.generate({
    length: length,
    uppercase: uppercase,
    lowercase: lowercase,
    numbers: numbers,
    symbols: symbols,
  });
  return password;
};
