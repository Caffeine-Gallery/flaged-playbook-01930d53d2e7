export const idlFactory = ({ IDL }) => {
  const Rule = IDL.Record({
    'category' : IDL.Text,
    'rules' : IDL.Vec(IDL.Text),
  });
  return IDL.Service({ 'getRules' : IDL.Func([], [IDL.Vec(Rule)], ['query']) });
};
export const init = ({ IDL }) => { return []; };
