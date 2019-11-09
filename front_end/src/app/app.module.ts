import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { GraphFrameComponent } from './components/graphs/graph-frame/graph-frame.component';
import { TextContainerComponent } from './components/text-container/text-container.component';
import { TextSegmentComponent } from './components/text-container/text-segment/text-segment.component';
import { ScrubControlComponent } from './components/scrub-control/scrub-control.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    GraphsComponent,
    GraphFrameComponent,
    TextContainerComponent,
    TextSegmentComponent,
    ScrubControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
