import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-motoboy-registration',
  templateUrl: './motoboy-registration.component.html',
  styleUrls: ['./motoboy-registration.component.css']
})
export class MotoboyRegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  //Construção do formulário reativo para o Form html.
  motoboyForm = this.fb.group({

    name: ['', Validators.required],
    phoneNumber: [''],
    telNumber: [''],
    age: [''],
    Cpf: [''],
    Cnh: ['']

  })

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.motoboyForm.value);
  }

}
