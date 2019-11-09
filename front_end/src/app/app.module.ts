import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material/material.module';
import { DisplayerComponent } from './components/displayer/displayer.component';
import { GraphsComponent } from './components/displayer/scrub-page/graphs/graphs.component';
import { TextContainerComponent } from './components/displayer/scrub-page/text-container/text-container.component';
import { TextSegmentComponent } from './components/displayer/scrub-page/text-container/text-segment/text-segment.component';
import { ScrubControlComponent } from './components/displayer/scrub-page/scrub-control/scrub-control.component';
import { AreaGraphComponent } from './components/displayer/scrub-page/graphs/area-graph/area-graph.component';
import { ScrubPageComponent } from './components/displayer/scrub-page/scrub-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    GraphsComponent,
    TextContainerComponent,
    TextSegmentComponent,
    ScrubControlComponent,
    AreaGraphComponent,
    ScrubPageComponent,
    DisplayerComponent
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
