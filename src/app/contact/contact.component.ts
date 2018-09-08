import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule} from "@angular/forms";
import {ResumeSenderService} from "../resume-sender.service";
import {ContactRequest} from "../contact-request";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  resumeRequestForm: FormGroup;
  loading = false;
  submitted = false;
  subText = "Submit";

  constructor(private resumesender: ResumeSenderService, fb: FormBuilder) {

    this.resumeRequestForm = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email, Validators.maxLength(75)])],
    });

  }

  ngOnInit() {
  }

  get f() {
    return this.resumeRequestForm.controls;
  }

  onSubmit(cr: ContactRequest) {
    this.submitted = true;
    this.loading = true;
    this.subText = "Loading..";
    this.resumesender.sendRequest(cr)
      .subscribe(result => {
        console.log(result);
        if(result['error'] === "false"){
          this.subText = "Sent.";
        }else{
          if(result['details_code'] === "throttled_email"){
            this.subText = "Email throttled.";
          } else{
            this.subText = "Server Error.";
          }
        }
        this.loading = false;
      })
  }
}
