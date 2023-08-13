import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {
  Admissionform!:FormGroup;
  constructor(private formbuilder:FormBuilder){ }

  ngOnInit(): void {
    this.Admissionform=this.formbuilder.group({

    })
  }

}
