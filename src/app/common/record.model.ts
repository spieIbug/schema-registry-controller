import {AbstractRecord} from './abstract.model';
import { assign } from 'lodash';

export class Record extends AbstractRecord {
  doc: string; // a JSON string providing documentation to the user of this schema (optional).
  aliases: string[]; //a JSON array of strings, providing alternate names for this record (optional).
  fields: any[]; // todo
  readonly type = 'record';


  constructor(object: Partial<AbstractRecord>) {
    super(object);
    assign(this, object);
  }
}
