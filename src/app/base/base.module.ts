import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BaseModalComponent } from './base-modal/base-modal.component'
import { HttpClientModule } from '@angular/common/http'
import { BaseService } from './base-service/base-service'

const COMPONENTS = [
  BaseModalComponent
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  exports: [
    COMPONENTS
  ],
  providers: [
    BaseService
  ]
})
export class BaseModule { }