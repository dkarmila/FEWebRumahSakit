import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DiagnosaComponent } from './diagnosa/diagnosa.component';
//import { DiagnosadetailComponent } from './diagnosadetail/diagnosadetail.component';
import { DiagnosadetailComponent } from './diagnosa/diagnosadetail/diagnosadetail.component';
import { RuanginapComponent } from './ruanginap/ruanginap.component';
import { DiagnosaeditComponent } from './diagnosa/diagnosaedit/diagnosaedit.component';
import { DiagnosaaddComponent } from './diagnosa/diagnosaadd/diagnosaadd.component';
import { DiagnosarincidetailComponent } from './diagnosadetail/diagnosarincidetail/diagnosarincidetail.component';
import { DiagnosarincieditComponent } from './diagnosadetail/diagnosarinciedit/diagnosarinciedit.component';
import { DiagnosarinciaddComponent } from './diagnosadetail/diagnosarinciadd/diagnosarinciadd.component';
import { RuanginapdetailComponent } from './ruanginap/ruanginapdetail/ruanginapdetail.component';
import { RuanginapeditComponent } from './ruanginap/ruanginapedit/ruanginapedit.component';
import { RuanginapaddComponent } from './ruanginap/ruanginapadd/ruanginapadd.component';
import { DiagnosadtlComponent } from './diagnosadtl/diagnosadtl.component';

let routes:Routes=[
  {path: 'login', component:LoginComponent},
  {path: 'diagnosa', component:DiagnosaComponent},
  {path: 'diagnosa/detail/:id', component:DiagnosadetailComponent},
  {path: 'diagnosa/edit/:id', component:DiagnosaeditComponent},
  {path: 'diagnosa/add', component:DiagnosaaddComponent},
  {path: 'diagnosadetail', component:DiagnosadtlComponent},
  {path: 'diagnosadetail/detail/:id', component:DiagnosarincidetailComponent},
  {path: 'diagnosadetail/edit/:id', component:DiagnosarincieditComponent},
  {path: 'diagnosadetail/add', component:DiagnosarinciaddComponent},
  {path: 'ruanginap', component:RuanginapComponent},
  {path: 'ruanginap/detail/:id', component:RuanginapdetailComponent},
  {path: 'ruanginap/edit/:id', component:RuanginapeditComponent},
  {path: 'ruanginap/add', component:RuanginapaddComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DiagnosaComponent,
    DiagnosadetailComponent,
    RuanginapComponent,
    DiagnosaeditComponent,
    DiagnosaaddComponent,
    DiagnosarincidetailComponent,
    DiagnosarincieditComponent,
    DiagnosarinciaddComponent,
    RuanginapdetailComponent,
    RuanginapeditComponent,
    RuanginapaddComponent,
    DiagnosadtlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
