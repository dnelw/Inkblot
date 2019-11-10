import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NumberPickerModule} from '@retailify/ngx-mat-numberpicker';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { ProgressComponent } from './components/progress/progress.component';
import { PatientComponent } from './components/patient/patient.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'progress', component: ProgressComponent},
  { path: 'patient', component: PatientComponent}
]

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
    LoaderComponent,
    ProgressComponent,
    PatientComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NumberPickerModule,
    MaterialModule,
    StoreModule.forRoot(appReducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
