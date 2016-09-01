import { Component, OnInit } from '@angular/core';

import { TwitchService } from './twitch.service';

@Component({
  moduleId: module.id,
  selector: 'app-main-page',
  providers: [TwitchService],
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.css']
})
export class MainPageComponent implements OnInit {
  private twitchStatus: any;
  private online: boolean = false;

  constructor(private twitchService: TwitchService) { }

  ngOnInit() {
    this.getTwitchStatus();
  }

  getTwitchStatus(): void {
    this.twitchStatus = this.twitchService.getStreamStatus().then(status => this.setOnlineStatus(status));
  }

  setOnlineStatus(status): void {
    this.twitchStatus = status;
    this.online = !!status['stream'];
  }
}
