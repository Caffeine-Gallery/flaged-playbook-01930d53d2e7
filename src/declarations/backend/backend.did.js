export const idlFactory = ({ IDL }) => {
  const QuizQuestion = IDL.Record({
    'question' : IDL.Text,
    'correctAnswer' : IDL.Nat,
    'options' : IDL.Vec(IDL.Text),
  });
  const Rule = IDL.Record({
    'icon' : IDL.Text,
    'category' : IDL.Text,
    'rules' : IDL.Vec(IDL.Text),
  });
  return IDL.Service({
    'getQuizQuestions' : IDL.Func([], [IDL.Vec(QuizQuestion)], ['query']),
    'getRandomFunFact' : IDL.Func([], [IDL.Text], []),
    'getRules' : IDL.Func([], [IDL.Vec(Rule)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
