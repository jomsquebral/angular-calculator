import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculatorpageComponent } from './calculatorpage/calculatorpage.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
