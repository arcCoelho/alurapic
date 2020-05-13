import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Photo } from "./photo";


const urlPrefix= 'http://localhost:3000/';
const urlSufix= '/photos';

@Injectable({providedIn: 'root'})
export class PhotoService{

    constructor(private http: HttpClient){
    }

    listFromUser(usuario: string){
        return this.http.get<Photo[]>(urlPrefix+usuario+urlSufix);
    }

}