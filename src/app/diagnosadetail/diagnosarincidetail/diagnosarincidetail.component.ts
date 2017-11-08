import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-diagnosarincidetail',
  templateUrl: './diagnosarincidetail.component.html',
  styleUrls: ['./diagnosarincidetail.component.css']
})
export class DiagnosarincidetailComponent implements OnInit {

  id: string;
  dataDetail: Object;
  constructor(private http: Http, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.http.get('http://localhost:8825/api/diagnosadetail/' +this.id+'?'+document.cookie)
    .subscribe((res: Response) => {
      this.dataDetail = res.json();
    });
  }

  diagnosaRinciBack(){
    window.location.href="./diagnosadetail";
  }

}
