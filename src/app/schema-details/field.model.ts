export class Field {
  name: string;
  type: string;

  constructor(obj: Object) {
    Object.assign(this, obj);
  }
}
