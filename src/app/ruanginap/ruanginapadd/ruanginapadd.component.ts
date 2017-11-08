import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';
import { RuangInapAddModel } from './ruanginapadd.model';

@Component({
  selector: 'app-ruanginapadd',
  templateUrl: './ruanginapadd.component.html',
  styleUrls: ['./ruanginapadd.component.css']
})
export class RuanginapaddComponent implements OnInit {

  dataAdd: RuangInapAddModel;
  constructor(private http: Http, private route:ActivatedRoute) { }

  ngOnInit() {
    this.dataAdd = new RuangInapAddModel();
  }

  postRuangInap(dataAdd){
    debugger;
    let header = new Headers({'Content-Type':'application/json'});
    let opsi = new RequestOptions({headers:header});
    //let data = JSON.stringify({kdProvinsi:kode, NamaProvinsi:nama})
    debugger;
    this.http.post('http://localhost:8825/api/ruanginap?'+document.cookie,JSON.stringify(dataAdd),opsi)
    .subscribe((res: Response) => {
      window.location.href = './ruanginap';
    });
  }

  ruangInapBack(){
    window.location.href="./ruanginap";
  }

}
