/**
 * @see https://avro.apache.org/docs/1.8.1/spec.html#schema_primitive
 *
 * */
import { includes } from 'lodash';

export const Types = {
  primitive: ['null', 'boolean', 'int', 'long', 'float', 'double', 'bytes', 'string'],
  complex: ['record', 'enum', 'array', 'map', 'union', 'fixed']
}

export let isComplex = (type: string): boolean => {
  return includes(Types.complex, type);
}

export let isPrimitive = (type: string): boolean => {
  return includes(Types.primitive, type);
}

export const ALL_TYPES = ['null',
  'boolean',
  'int',
  'long',
  'float',
  'double',
  'bytes',
  'string',
  'records',
  'enums',
  'arrays',
  'maps',
  'unions',
  'fixed'
]
