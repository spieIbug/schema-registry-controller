import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared.module';
import { SchemaListComponent } from './schema-list/schema-list.component';
import { SchemaService } from './schema.service';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { SchemaVersionsComponent } from './schema-versions/schema-versions.component';
import { SchemaDetailsComponent } from './schema-details/schema-details.component';
import { NewSchemaComponent } from './new-schema/new-schema.component';

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
};

const routes: Routes = [
  {
    path: '',
    component: SchemaListComponent,
    children: [
      {
        path: ':id',
        component: SchemaVersionsComponent,
        children: [
          {
            path: 'new',
            component: NewSchemaComponent
          },
          {
            path: ':version',
            component: SchemaDetailsComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SchemaListComponent,
    SchemaVersionsComponent,
    SchemaDetailsComponent,
    NewSchemaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(routes, routingConfiguration)
  ],
  providers: [SchemaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
