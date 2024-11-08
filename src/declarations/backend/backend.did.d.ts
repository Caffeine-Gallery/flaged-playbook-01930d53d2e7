import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Rule { 'category' : string, 'rules' : Array<string> }
export interface _SERVICE { 'getRules' : ActorMethod<[], Array<Rule>> }
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
