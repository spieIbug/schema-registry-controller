import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SchemaService } from '../schema.service';
import { switchMap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-new-schema',
  templateUrl: './new-schema.component.html',
  styleUrls: ['./new-schema.component.css']
})
export class NewSchemaComponent implements OnInit {

  jsonSchemaForm: FormGroup;

  constructor(private schemaService: SchemaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.jsonSchemaForm = new FormGroup({
      schema: new FormControl('{}')
    });
  }

  submit() {
    this.schemaService.add({
      schemaId: this.route.snapshot.params['id'],
      schema: this.jsonSchemaForm.get('schema').value
    }).subscribe(obs => {
      console.log(obs);
    });
  }

}
