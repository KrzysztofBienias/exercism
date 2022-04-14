const allUpperCase = (message) => {
  const cleanedMess = message.replace(/[^a-z]/gi, '');
  return cleanedMess.length > 0 && cleanedMess === cleanedMess.toUpperCase();
}

const isAQuestion = (message) => message.trim().endsWith('?');
const isEmpty = (message) => message.trim() === '';


export const hey = (message) => {
  if (isEmpty(message)) return 'Fine. Be that way!';
  if (isAQuestion(message) && allUpperCase(message)) return "Calm down, I know what I'm doing!";
  if (isAQuestion(message) ) return 'Sure.';
  if (allUpperCase(message)) return 'Whoa, chill out!';

  return 'Whatever.';
};
