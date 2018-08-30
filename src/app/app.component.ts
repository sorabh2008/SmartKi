import { Component, NgModule } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smart-Ki!';
  columns = 4;
  newTransactions= 4;
  watcher: Subscription;
  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change) {
        if (change.mqAlias == 'xs') {
          this.columns = 1;
        } else if (change.mqAlias == 'sm') {
          this.columns = 2;
        } else {
          this.columns = 4;
        }
      }
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
}
