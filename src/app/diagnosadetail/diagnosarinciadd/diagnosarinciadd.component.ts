import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';
import { DiagnosaRinciAddModel } from './diagnosarinciadd.model';

@Component({
  selector: 'app-diagnosarinciadd',
  templateUrl: './diagnosarinciadd.component.html',
  styleUrls: ['./diagnosarinciadd.component.css']
})
export class DiagnosarinciaddComponent implements OnInit {

  dataAdd: DiagnosaRinciAddModel;
  constructor(private http: Http, private route:ActivatedRoute) { }

  ngOnInit() {
    this.dataAdd = new DiagnosaRinciAddModel();
  }

  postDiagnosaRinci(dataAdd){
    debugger;
    let header = new Headers({'Content-Type':'application/json'});
    let opsi = new RequestOptions({headers:header});
    //let data = JSON.stringify({kdProvinsi:kode, NamaProvinsi:nama})
    debugger;
    this.http.post('http://localhost:8825/api/diagnosadetail?'+document.cookie,JSON.stringify(dataAdd),opsi)
    .subscribe((res: Response) => {
      window.location.href = './diagnosadetail';
    });
  }

  diagnosaRinciBack(){
    window.location.href="./diagnosadetail";
  }
}
