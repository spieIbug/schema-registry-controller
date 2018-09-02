import { assign } from 'lodash';
import Typed from 'ts-typed/dist/typed.decorator';
import { Schema } from './schema.model';

export class SchemaDetails {
  id: string;
  subject: string;
  version: string;

  @Typed(Schema)
  schema: Schema;
  meta: string;

  constructor(obj: Object) {
    assign(this, obj);
    this.schema =  <Schema> JSON.parse(<string> obj['schema']);
  }
}


