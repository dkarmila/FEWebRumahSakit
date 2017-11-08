import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-ruanginap',
  templateUrl: './ruanginap.component.html',
  styleUrls: ['./ruanginap.component.css']
})
export class RuanginapComponent implements OnInit {

  dataTampil:Object;
  id:string;
  constructor(private http:Http) { }

  ngOnInit() {
    //this.key = window.localStorage.getItem('currentUser');
    this.http.get('http://localhost:8825/api/ruanginap?'+document.cookie)
    .subscribe((res:Response) => {
      this.dataTampil=res.json();
    });
  }

  ruangInapDelete(id){
    this.http.delete('http://localhost:8825/api/ruanginap/'+id+'?'+document.cookie)
    .subscribe((res:Response) => {
      window.location.href='./ruanginap';
    })
  }


}
