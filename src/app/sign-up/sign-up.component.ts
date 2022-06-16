import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  mail: string = ''
  firstname: string = ''
  lastname: string = ''
  password: string = ''

  user = new User(this.mail, this.firstname, this.lastname, this.password)



  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user)
  }

}
