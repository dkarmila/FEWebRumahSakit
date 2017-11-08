import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-diagnosaedit',
  templateUrl: './diagnosaedit.component.html',
  styleUrls: ['./diagnosaedit.component.css']
})
export class DiagnosaeditComponent implements OnInit {

  id: string;
  dataEdit: Object;

  constructor(private http: Http, private route:ActivatedRoute) { 
    this.route.params.subscribe(params =>{
      this.id=params['id'];
    })
  }

  ngOnInit() {
    debugger;
    this.http.get('http://localhost:8825/api/diagnosa/'+this.id+'?'+document.cookie)
    .subscribe((res:Response) => {
      this.dataEdit=res.json();
    });
    debugger;
  }

  putDiagnosa(id){
    this.http.put('http://localhost:8825/api/diagnosa/'+this.id+'?'+document.cookie, this.dataEdit)
    .subscribe((res: Response) => {
      window.location.href='./diagnosa';
    })
    //debugger;
  }

  diagnosaBack(){
    window.location.href="./diagnosa";
  }
}
