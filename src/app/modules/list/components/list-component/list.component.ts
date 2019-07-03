import {AfterViewInit, Component} from '@angular/core';
import {AuthService} from "../../../../shared/services/auth.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit {

  constructor(private authService: AuthService) { }

  ngAfterViewInit() {
  }

}
