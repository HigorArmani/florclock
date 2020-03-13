import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { LayoutTopbarComponent } from './layout-topbar/layout-topbar.component'
import { LayoutMenuComponent } from './layout-menu/layout-menu.component'

// Components publicos do modulo layout
const COMPONENTS = [
  LayoutTopbarComponent,
  LayoutMenuComponent
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    COMPONENTS
  ]
})
export class LayoutModule { }