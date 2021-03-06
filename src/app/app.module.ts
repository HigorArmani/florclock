import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { ROUTES } from './base/route'
import { LayoutModule } from './layout/layout.module'
import { RhModule } from './rh/rh.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    LayoutModule,
    RhModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }