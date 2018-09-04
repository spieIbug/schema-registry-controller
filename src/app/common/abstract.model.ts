import { assign } from 'lodash';

export abstract class AbstractRecord {
  name: string;
  namespace: string;

  constructor(object: Partial<AbstractRecord>) {
    assign(this, object);
  }
}
