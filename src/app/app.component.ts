import { Component } from '@angular/core';
import { User } from './User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  User = new User();
  currentuser = null;
  // tslint:disable-next-line:one-line
  onSubmit(regform){
    console.log('onSubmit()');
    // this.user.isValid = true;
    console.log(this.User);
    this.currentuser = regform.value;

   regform.reset();
  }
}
