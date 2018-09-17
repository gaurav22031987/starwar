import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Planet } from '../models/plant';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  @Input() planent: Planet;
  objectKeys = Object.keys;
  ngOnInit() {
  }
}
