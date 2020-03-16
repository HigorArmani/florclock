import { Component } from '@angular/core'

@Component({
  selector: 'fclock-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'florclock'

  isMobile() {
    return window.screen.width <= 768
  }

}