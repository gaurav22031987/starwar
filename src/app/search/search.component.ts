import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Planet } from '../models/plant';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  selected: string;
  userName: string;
  planets: Planet[];
  planetInformation: Planet;
  searchLenght: number = 0;
  startTime: Date = new Date();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.planets = this.route.snapshot.data['plants'].results;
    this.route
      .queryParams
      .subscribe(params => {
        {
          this.userName = params['name'];
        }
      });
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    this.searchLenght++;
    if (!this.checkCondition()) {
      this.planetInformation = e.item;
    }

  }

  checkCondition() {
    var date = new Date();
    if (this.startTime < new Date(date.getTime() + 1)) {
      if (!(this.searchLenght < 5) && this.userName === "Luke Skywalker") {
        return true;
      }
    };
    return false;
  }

  logOut() {
    this.router.navigate(['/']);
  }


}
