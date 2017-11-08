import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';

export class UserModel{
    public _id: string;
    public Username: string;
    public Password: string;
}