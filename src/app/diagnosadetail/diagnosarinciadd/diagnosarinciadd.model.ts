import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';

export class DiagnosaRinciAddModel{
    public _id: string;
    public KdDiagnosa: string;
    public KdRuangInap: string;
    public KdDiagnosaAwal: string;
    public KdDokter: string;
    public TglDiagnosaDetail: Date;
    public KdLab: string;
}