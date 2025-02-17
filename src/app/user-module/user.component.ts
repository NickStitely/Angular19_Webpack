import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  standalone: false
})
export class UserComponent implements OnInit{

  public constructor(){

  }

  ngOnInit(){
    console.log("User Component: OnInit");
  }

  onClick(event: any){
    window.alert("Tested");
  }
}
