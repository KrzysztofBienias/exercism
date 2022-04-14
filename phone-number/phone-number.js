export const clean = (str) => {

  if (/[a-zA-Z]/.test(str)) throw "Letters not permitted";
  if (/[@:!]/.test(str)) throw "Punctuations not permitted";

  let answer = str.replace(/[^0-9]/g, "");

  if (answer.length < 10) throw "Incorrect number of digits";
  if (answer.length > 11) throw "More than 11 digits";
  if (answer.length == 10 && answer[0] == '1') throw 'Area code cannot start with one';
  if (answer.length == 10 && answer[0] == '0') throw 'Area code cannot start with zero';
  if (answer.length == 11 && answer[0] != '1') throw "11 digits must start with 1";
  if (answer.slice(answer.length - 7)[0] == '1') throw "Exchange code cannot start with one";
  if (answer.slice(answer.length - 7)[0] == '0') throw "Exchange code cannot start with zero";
  if (answer.length == 11 && answer[0] == '1') {
    if (answer[1] == '0') throw "Area code cannot start with zero";
    if (answer[1] == "1") throw "Area code cannot start with one";

    return answer.slice(1, answer.length);
  }
  
	return answer;
};