import {Enum} from './enum.model';
import {Record} from './record.model';

export class AvroSchema {
  subject: string;
  version: number;
  id: string | null;
  schema: Record | Enum | string | number | null | boolean;
}
