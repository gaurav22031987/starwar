import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { User } from "../models/user";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Planet } from "../models/plant";

@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(private _http: HttpClient) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {

    return this._http.get<User>("https://swapi.co/api/people");
  }
}


@Injectable()
export class PlantsResolver implements Resolve<Planet> {
  constructor(private _http: HttpClient) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Planet> {

    return this._http.get<Planet>("https://swapi.co/api/planets/");
  }
}
