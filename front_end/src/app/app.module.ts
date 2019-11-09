import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { TextContainerComponent } from './components/text-container/text-container.component';
import { TextSegmentComponent } from './components/text-container/text-segment/text-segment.component';
import { ScrubControlComponent } from './components/scrub-control/scrub-control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material/material.module';
import { AreaGraphComponent } from './components/graphs/area-graph/area-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    GraphsComponent,
    TextContainerComponent,
    TextSegmentComponent,
    ScrubControlComponent,
    AreaGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
