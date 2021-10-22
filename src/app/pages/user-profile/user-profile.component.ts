import {Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    // Network.addListener("networkStatusChange", (status) => {
    //   this.ngZone.run(() => {
    //     // This code will run in Angular's execution context
    //     this.networkStatus = status.connected ? "Online" : "Offline";
    //   });
    // });
  }

}
