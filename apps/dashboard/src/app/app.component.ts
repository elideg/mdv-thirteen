import { AuthService } from '@mdv-thirteen/core-data';
import { Component } from '@angular/core';

@Component({
  selector: 'mdv-thirteen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  links = [
    { path: '/computers', icon: 'work', title: 'Computers' }
  ]

  userIsAuthenticated$ = this.authService.isAuthenticated;
  constructor(private authService: AuthService) {}

}
