import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: User = new User();
  userList: User[];
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.userList = this.route.snapshot.data['users'].results;
  }

  login() {
    const userDetails = this.userList.find(user => user.name === this.model.name && user.birth_year === this.model.birth_year);
    if (userDetails) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "name": this.model.name
        }
      };
      this.router.navigate(['/search'], navigationExtras);
    }
  }

}
