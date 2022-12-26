import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { NumberOnlyDirective } from './directives/number-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    NumberOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
