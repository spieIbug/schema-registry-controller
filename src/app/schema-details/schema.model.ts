import Typed from 'ts-typed/dist/typed.decorator';
import { Field } from './field.model';

export class Schema {
  type: string;
  name: string;
  namespace: string;

  @Typed(Field)
  fields: Field[];

  constructor(obj: Object) {
    Object.assign(this, obj);
  }
}
