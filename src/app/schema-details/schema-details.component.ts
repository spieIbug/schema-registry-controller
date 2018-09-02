import { Component, OnInit } from '@angular/core';
import { SchemaService } from '../schema.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators';
import { SchemaDetails } from './schema-details.model';
import Typed from 'ts-typed/dist/typed.decorator';

@Component({
  selector: 'app-schema-details',
  templateUrl: './schema-details.component.html',
  styleUrls: ['./schema-details.component.css']
})
export class SchemaDetailsComponent implements OnInit {

  @Typed(SchemaDetails)
  schemaDetails: SchemaDetails;

  constructor(private schemaService: SchemaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap( params => this.schemaService.findOne(params['id'], params['version']))
    ).subscribe(schemaDetails => {
      this.schemaDetails = schemaDetails;
    });
  }
}
