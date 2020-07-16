import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CmsAdminModule } from '@ordercloud/angular-cms-components';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CmsAdminModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
