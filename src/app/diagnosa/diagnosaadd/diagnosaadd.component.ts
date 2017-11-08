import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';
import { DiagnosaAddModel } from './diagnosaadd.model';

@Component({
  selector: 'app-diagnosaadd',
  templateUrl: './diagnosaadd.component.html',
  styleUrls: ['./diagnosaadd.component.css']
})
export class DiagnosaaddComponent implements OnInit {

  dataAdd: DiagnosaAddModel;
  constructor(private http: Http, private route:ActivatedRoute) { }

  ngOnInit() {
    this.dataAdd = new DiagnosaAddModel();
  }

  postDiagnosa(dataAdd){
    debugger;
    let header = new Headers({'Content-Type':'application/json'});
    let opsi = new RequestOptions({headers:header});
    //let data = JSON.stringify({kdProvinsi:kode, NamaProvinsi:nama})
    debugger;
    this.http.post('http://localhost:8825/api/diagnosa?'+document.cookie,JSON.stringify(dataAdd),opsi)
    .subscribe((res: Response) => {
      window.location.href = './diagnosa';
    });
  }

  diagnosaBack(){
    window.location.href="./diagnosa";
  }
}
