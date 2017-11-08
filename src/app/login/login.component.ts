import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';
import { UserModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataUser: UserModel;
  constructor(private http:Http) { }

  ngOnInit() {
    this.dataUser = new UserModel();
  }

  postUserAuth(dataUser){
    debugger;
    let header = new Headers({'Content-Type':'application/json'});
    let opsi = new RequestOptions({headers:header});
    //let data = JSON.stringify({username:user, password:pass});
    this.http.post('http://localhost:8825/api/login/authenticate',JSON.stringify(dataUser), opsi)
    .subscribe((res:Response) => {
      debugger;
      //let user = res.json().token;
      //window.localStorage.setItem('currentUser', JSON.stringify(user));
      document.cookie="token="+res.json().token;
      window.location.href='/';
    });
    debugger;
  }

}
