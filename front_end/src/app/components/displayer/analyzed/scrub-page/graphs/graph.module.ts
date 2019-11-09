import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaGraphComponent } from './area-graph/area-graph.component';
import { MaterialModule } from 'src/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphsComponent } from './graphs.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';


@NgModule({
  declarations: [
    AreaGraphComponent,
    GraphsComponent,
    BarGraphComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
    AreaGraphComponent
  ]
})
export class GraphModule { }
