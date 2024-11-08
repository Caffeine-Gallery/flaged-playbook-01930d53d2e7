import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface QuizQuestion {
  'question' : string,
  'correctAnswer' : bigint,
  'options' : Array<string>,
}
export interface Rule {
  'icon' : string,
  'category' : string,
  'rules' : Array<string>,
}
export interface _SERVICE {
  'getQuizQuestions' : ActorMethod<[], Array<QuizQuestion>>,
  'getRandomFunFact' : ActorMethod<[], string>,
  'getRules' : ActorMethod<[], Array<Rule>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
