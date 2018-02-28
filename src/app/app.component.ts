import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') formObj: NgForm;

  defaultQuestion = 'advanced';
  submitted = false;

  user = {
    email: '',
    password: '',
    subscription: ''
  }

  onSubmit(form: NgForm) {
    // console.log(this.formObj);
    this.submitted = true;
    this.user.email = form.value.userData.email;
    this.user.password = form.value.userData.password;
    this.user.subscription = form.value.userData.subscribe;
  }

}
