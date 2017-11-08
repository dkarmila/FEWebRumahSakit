import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';

export class DiagnosaAddModel{
    public _id: string;
    public KdDiagnosa: string;
    public KdPasien: string;
    public KdRumahSakit: string;
    public KdDokter: string;
    public KetDiagnosa: string;
    public KdPerawatan: string;
    public TglDiagnosaAwal: Date;
    public KdPerawat: string;
}