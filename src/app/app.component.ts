import { Component } from '@angular/core';
import { AppService } from './_services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private appService: AppService) { }

  toggleSideBar() {
    this.appService.isSideBarOpen = !this.appService.isSideBarOpen;
  }


}
