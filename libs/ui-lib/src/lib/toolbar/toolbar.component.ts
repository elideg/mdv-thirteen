import { Component, OnInit, Input } from '@angular/core';
import { AuthService, NotifyService } from '@mdv-thirteen/core-data';
import { Router } from '@angular/router';


@Component({
  selector: 'mdv-thirteen-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() title
  @Input() sidenav
  @Input() isAuthenticated

  constructor(
    private auth: AuthService,
    private notify: NotifyService,
    private route: Router
  ) { }

  ngOnInit() {
  }


  logout() {
    this.auth.logout();
    this.notify.notification('Successfully Logged Out');
    this.route.navigate(['/login'])
    }

  login() {
    this.route.navigate(['/login'])
  }

}
