import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-diagnosa',
  templateUrl: './diagnosa.component.html',
  styleUrls: ['./diagnosa.component.css']
})
export class DiagnosaComponent implements OnInit {

  dataTampil:Object;
  id:string;
  constructor(private http:Http) { }

  ngOnInit() {
    //this.key = window.localStorage.getItem('currentUser');
    this.http.get('http://localhost:8825/api/diagnosa?'+document.cookie)
    .subscribe((res:Response) => {
      this.dataTampil=res.json();
    });
  }

  diagnosaDelete(id){
    this.http.delete('http://localhost:8825/api/diagnosa/'+id+'?'+document.cookie)
    .subscribe((res:Response) => {
      window.location.href='./diagnosa';
    })
  }

}
