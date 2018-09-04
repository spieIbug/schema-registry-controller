import {AbstractRecord} from './abstract.model';
import { assign } from 'lodash';

export class Enum extends AbstractRecord {
  aliases: string; /* JSON array of strings, providing alternate names for this enum (optional).*/
  doc: string; /* a JSON string providing documentation to the user of this schema (optional).*/
  symbols: string; /* a JSON array, listing symbols, as JSON strings (required). All symbols in an enum must be unique; duplicates are prohibited. Every symbol must match the regular expression [A-Za-z_][A-Za-z0-9_]* (the same requirement as for names).*/
  type = 'enum';

  constructor(object: Partial<AbstractRecord>) {
    super(object);
    assign(this, object);
  }
}
