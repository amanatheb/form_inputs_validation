import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name=new FormControl('');
  last_name=new FormControl('');
  age=new FormControl('');
  email=new FormControl('');
  password=new FormControl('');
  confirm=new FormControl('');
  title = 'app';
  changeBackgroundColor: boolean = false;
  generated: boolean = false;
  Gender:any=['Male','Female','Prefer not to say'];
entered=false;
alert=false;
  ngOnInit(){
if(this.password.value !== this.confirm.value || Number(this.age.value) < 17 || Number(this.age.value) >20 ){
this.alert=true;
}
  }
input(event:any){
  console.log(event);
if(event.length>12){
  this.entered=true;
}
}
returnToForm(){
  this.alert=false;
}
  changeBg(): void {
    this.changeBackgroundColor = true;
  } 
  generate(): void {
    this.generated = true;
  }
}
