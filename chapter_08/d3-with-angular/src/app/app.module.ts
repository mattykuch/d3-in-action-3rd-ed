import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts/charts.component';
import { ScatterplotD3ControlledComponent } from './charts/scatterplot-d3-controlled/scatterplot-d3-controlled.component';
import { CardComponent } from './ui/card/card.component';
import { ChartContainerComponent } from './chart-components/chart-container/chart-container.component';
import { ScatterplotAngularControlledComponent } from './charts/scatterplot-angular-controlled/scatterplot-angular-controlled.component';
import { AxisComponent } from './chart-components/axis/axis.component';
import { CirclesComponent } from './chart-components/circles/circles.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    ScatterplotD3ControlledComponent,
    CardComponent,
    ChartContainerComponent,
    ScatterplotAngularControlledComponent,
    AxisComponent,
    CirclesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
