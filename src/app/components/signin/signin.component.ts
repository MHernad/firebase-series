import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit{

  formReg: FormGroup;

  constructor( private userService: UserService, private router: Router ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.register(this.formReg.value)
    .then( response => { 
      console.log(response);
      this.router.navigate(['/login'])
    })
    .catch( error => console.log(error) )
  }

  onClick() {
      this.router.navigate(['login'])
  }
}
