import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ipAddRemove';
  users = [{ "name": "Basic", "limit": 5 }, { "name": "Premium", "limit": 10 }]
  myform = new FormGroup({
    role: new FormControl()
  })
  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.buildForm()
  }
  buildForm() {
    this.myform = this.fb.group({
      role: ['', Validators.required]
    })
  }
  get role() { return this.myform.get('role'); }
  onSubmit() {
    this.router.navigateByUrl('/ipadd');
  }
}




