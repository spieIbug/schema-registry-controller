import { Component, OnInit } from '@angular/core';
import { SchemaService } from '../schema.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-schema-versions',
  templateUrl: './schema-versions.component.html',
  styleUrls: ['./schema-versions.component.css']
})
export class SchemaVersionsComponent implements OnInit {
  schemaVersions: Array<string> = [];

  constructor(private schemaService: SchemaService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => this.schemaService.findVersions(params['id']))
    ).subscribe(versions => {
      this.schemaVersions = versions;
    });
  }

  deleteVersion(version: string) {
    const schema = this.route.snapshot.params['id'];
    this.schemaService.deleteVersion(schema, version).subscribe(res => {
      this.schemaVersions.splice(this.schemaVersions.indexOf(res), 1);
    }, err => {
      console.error(err);
    });
  }

}
