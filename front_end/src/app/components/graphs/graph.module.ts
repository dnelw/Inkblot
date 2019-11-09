import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaGraphComponent } from './area-graph/area-graph.component';
import { MaterialModule } from 'src/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AreaGraphComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule
  ]
})
export class GraphModule { }
