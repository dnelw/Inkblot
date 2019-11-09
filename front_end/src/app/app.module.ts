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
import { GraphsComponent } from './components/displayer/analyzed/scrub-page/graphs/graphs.component';
import { TextContainerComponent } from './components/displayer/analyzed/scrub-page/text-container/text-container.component';
import { TextSegmentComponent } from './components/displayer/analyzed/scrub-page/text-container/text-segment/text-segment.component';
import { ScrubControlComponent } from './components/displayer/analyzed/scrub-page/scrub-control/scrub-control.component';
import { AreaGraphComponent } from './components/displayer/analyzed/scrub-page/graphs/area-graph/area-graph.component';
import { ScrubPageComponent } from './components/displayer/analyzed/scrub-page/scrub-page.component';
import { AnalyzedComponent } from './components/displayer/analyzed/analyzed.component';
import { BarGraphComponent } from './components/displayer/analyzed/scrub-page/graphs/bar-graph/bar-graph.component';
import { MenuComponent } from './components/displayer/menu/menu.component';
import { LoaderComponent } from './components/displayer/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    TextContainerComponent,
    TextSegmentComponent,
    ScrubControlComponent,
    ScrubPageComponent,
    DisplayerComponent,
    AnalyzedComponent,
    DisplayerComponent,
    GraphsComponent,
    AreaGraphComponent,
    BarGraphComponent,
    MenuComponent,
    LoaderComponent
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
