import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent {

  paymentForm!:FormGroup;
  feesData!:any[];
  
  constructor(private router: Router, private route: ActivatedRoute,private studService:StudentService,private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
    card:['',Validators.required],
    expiry:['',Validators.required],
    cvv:['',Validators.required]
    });
  }

  pay(){
    this.studService.getStudInfo().subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.card === this.paymentForm.value.card && a.cvv ===this.paymentForm.value.cvv && a.expiry=== this.paymentForm.value.expiry
      });
      if(user){
        alert("payment Successfull");
        this.paymentForm.reset();
        this.router.navigate(['attendance'])
      }else{
        alert("Check Credentials and try again");
        this.router.navigate(['fees']);
      }
    });
    
   }

}
