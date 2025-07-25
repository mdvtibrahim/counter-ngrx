import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer, IndicatorReducer } from './counter/state/counter.reducer';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { IndicatorByCounterEffects } from './counter/state/counter.effect';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({counter:counterReducer,indicate:IndicatorReducer}),
    StoreDevtoolsModule.instrument({maxAge:25}),
    EffectsModule.forRoot([IndicatorByCounterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[CounterComponent]
})
export class AppModule { }
