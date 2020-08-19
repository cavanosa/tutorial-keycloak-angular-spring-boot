import { LoginService } from './../../services/login.service';
import { FooService } from './../../services/foo.service';
import { Component, OnInit } from '@angular/core';
import { Foo } from 'src/app/models/foo';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  foos: Foo[] = [];

  isAdmin: boolean;

  constructor(private fooService: FooService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loadFoos();
    this.isAdmin = this.loginService.getIsAdmin();
  }

  loadFoos(): void {
    this.fooService.list().subscribe(
      data => {
        this.foos = data;
      },
      err => console.log(err)
    );
  }

  onDelete(id: number): void {
    this.fooService.delete(id).subscribe(
      data => {
        console.log(data);
        this.loadFoos();
      },
      err => console.log(err)
    );
  }

}
