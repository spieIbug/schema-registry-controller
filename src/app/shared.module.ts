import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatInputModule, MatListModule, MatPaginatorModule, MatTableModule,
  MatToolbarModule, MatCardModule, MatSidenavModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListItemLoaderComponent } from './list-item-loader/list-item-loader.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


const MaterialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatListModule,
  MatPaginatorModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  NgxJsonViewerModule
];

const AngularModules = [
  HttpClientModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

const SharedComponents = [
  ListItemLoaderComponent
];

@NgModule({
  imports: [
    ...AngularModules,
    ...MaterialModules
  ],
  declarations: [
    ...SharedComponents
  ],
  exports: [
    ...AngularModules,
    ...MaterialModules,
    ...SharedComponents
  ]
})
export class SharedModule {
}
