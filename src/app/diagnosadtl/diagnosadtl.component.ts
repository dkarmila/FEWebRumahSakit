import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-diagnosadtl',
  templateUrl: './diagnosadtl.component.html',
  styleUrls: ['./diagnosadtl.component.css']
})
export class DiagnosadtlComponent implements OnInit {

  dataTampil:Object;
  id:string;
  constructor(private http:Http) { }

  ngOnInit() {
    //this.key = window.localStorage.getItem('currentUser');
    this.http.get('http://localhost:8825/api/diagnosadetail?'+document.cookie)
    .subscribe((res:Response) => {
      this.dataTampil=res.json();
    });
  }

  diagnosaDetailDelete(id){
    this.http.delete('http://localhost:8825/api/diagnosadetail/'+id+'?'+document.cookie)
    .subscribe((res:Response) => {
      window.location.href='./diagnosadetail';
    })
  }


}
