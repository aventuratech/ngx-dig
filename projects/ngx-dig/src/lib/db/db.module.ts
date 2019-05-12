import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbCollectionComponent } from './db-collection/db-collection.component';
import { DbDocComponent } from './db-doc/db-doc.component';
import { DbFormComponent } from './db-form/db-form.component';

@NgModule({
  declarations: [DbCollectionComponent, DbDocComponent, DbFormComponent],
  exports: [DbCollectionComponent, DbDocComponent, DbFormComponent],
  imports: [
    CommonModule
  ]
})
export class DbModule { }
