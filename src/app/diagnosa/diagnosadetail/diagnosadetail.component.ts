import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-diagnosadetail',
  templateUrl: './diagnosadetail.component.html',
  styleUrls: ['./diagnosadetail.component.css']
})
export class DiagnosadetailComponent implements OnInit {

  id: string;
  dataDetail: Object;
  constructor(private http: Http, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.http.get('http://localhost:8825/api/diagnosa/' +this.id+'?'+document.cookie)
    .subscribe((res: Response) => {
      this.dataDetail = res.json();
    });
  }

  diagnosaBack(){
    window.location.href="./diagnosa";
  }

}
