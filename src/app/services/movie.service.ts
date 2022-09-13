import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Movie } from "../models/movie";

@Injectable()
export class MovieService {
    url = "http://localhost:3000/movies";

    constructor(private http: HttpClient) {}

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.url).pipe(
           tap(data => console.log(data)),
           catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if(error.error instanceof ErrorEvent) {
            // client or network 
            console.log("error: " + error.error.message);
        } else {
            // api (backend)
            switch(error.status) {
                case 404:
                    console.log("not found");
                    break;
                    console.log("access denied");
                    break;
                    case 500:
                    console.log("interval server");
                    break;
                    default:
                        console.log("Bilinmeyen bir hata");
            }


        }
        return throwError("Bir hata oluştu."); // look throwError
    }

}     