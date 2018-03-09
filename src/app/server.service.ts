import {  Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServerService{
    url = 'https://http-ang-1c4aa.firebaseio.com/data.json';
    constructor(private http :Http){}
    storeServers(servers : any[]){
        const header = new Headers({"Content-Type":"application/json"});
        return this.http.put(this.url,servers,{headers:header});
    }
    getServers(){
        return this.http.get(this.url)
        .map((response:Response)=>{
            const data = response.json();
            return data;
        })
        .catch((error:Error)=>{
            return Observable.throw('Sorry for the problem!')
        });
    }
}