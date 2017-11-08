import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';

export class RuangInapAddModel{
    public _id: string;
    public KdRuangInap: string;
    public NamaRuangInap: string;
    public JnsRuangInap: string;
    public HargaRuangInap: number;
}