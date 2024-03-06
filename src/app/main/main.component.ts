import { Component } from '@angular/core';
import { AppService } from '../_services/app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(public appService: AppService) { };
}
