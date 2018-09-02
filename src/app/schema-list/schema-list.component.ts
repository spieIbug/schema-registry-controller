import { Component, OnInit } from '@angular/core';
import { SchemaService } from '../schema.service';
import { PageEvent } from '@angular/material';
import { chunk } from 'lodash';

@Component({
  selector: 'app-schema-list',
  templateUrl: './schema-list.component.html',
  styleUrls: ['./schema-list.component.css']
})
export class SchemaListComponent implements OnInit {
  schemas: string[][] = [];

  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 15];
  allSchemas: string[];

  constructor(private schemaService: SchemaService) {
  }

  ngOnInit() {
    this.schemaService.findAll().subscribe(schemas => {
      this.allSchemas = schemas;
      this.length = schemas.length;
      this.schemas = chunk(this.allSchemas, this.pageSize);
    });
  }

  deleteSchema(schema: string) {
    this.schemaService.delete(schema).subscribe(res => {
      this.allSchemas.splice(this.allSchemas.indexOf(schema), 1);
      this.schemas = chunk(this.allSchemas, this.pageSize);
    }, error => {
      console.error(error);
    });
  }

  handlePageEvent($event: PageEvent) {
    this.pageSize = $event.pageSize;
    this.schemas = chunk(this.allSchemas, this.pageSize);
  }
}
