import { LoginService } from './../services/login.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() isLogged: boolean;
  @Input() isAdmin: boolean;
  @Input() username: string;


  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  public login(): void {
    this.loginService.login();
  }

  public logout(): void {
    this.loginService.logout();
  }

}
