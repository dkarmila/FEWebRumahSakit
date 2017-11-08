import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruanginapedit',
  templateUrl: './ruanginapedit.component.html',
  styleUrls: ['./ruanginapedit.component.css']
})
export class RuanginapeditComponent implements OnInit {

  id: string;
  dataEdit: Object;

  constructor(private http: Http, private route:ActivatedRoute) { 
    this.route.params.subscribe(params =>{
      this.id=params['id'];
    })
  }

  ngOnInit() {
    debugger;
    this.http.get('http://localhost:8825/api/ruanginap/'+this.id+'?'+document.cookie)
    .subscribe((res:Response) => {
      this.dataEdit=res.json();
    });
    debugger;
  }

  putRuangInap(id){
    this.http.put('http://localhost:8825/api/ruanginap/'+this.id+'?'+document.cookie, this.dataEdit)
    .subscribe((res: Response) => {
      window.location.href='./ruanginap';
    })
    //debugger;
  }

  ruangInapBack(){
    window.location.href="./ruanginap";
  }

}
