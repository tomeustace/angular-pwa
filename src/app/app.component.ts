import { Component, ViewEncapsulation } from '@angular/core';
import { SwPush } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Measuring Web Application Performance - @tomeustace';

  constructor(readonly swPush: SwPush) {

  }

  ngOnInit() {
    this.initSubscription();
  }

  // Can do a test push from devtools with below json
  // { "notification": {"title": "Angular PWAs Rock!", "body": "They sure do...."} }

  initSubscription() {
    console.log(Notification.permission);
    if(Notification.permission === 'default') {
      Notification.requestPermission().then(() => {
        this.requestSubscription();
      }).catch(() => {
        // show permission denied error
      });
    }
    else if(Notification.permission === 'denied') {
      // show permission is denied, please allow it error
    } else {
      this.requestSubscription();
    }
  }

  async requestSubscription() {
    try {
      const sub = await this.swPush.requestSubscription({ serverPublicKey: 'XXX'});
      console.log("subscription object ", sub);
    } catch  (e) {
      console.error(e)
    }
  }

}
