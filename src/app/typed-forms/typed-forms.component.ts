import { Component, OnInit } from '@angular/core';
import { IForm } from './form.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-typed-forms',
  templateUrl: './typed-forms.component.html',
  styleUrls: ['./typed-forms.component.scss'],
})
export class TypedFormsComponent {
  constructor() {}

  formMensagem = new FormGroup<IForm>({
    nome: new FormControl('', { nonNullable: false }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    mensagem: new FormControl('', { nonNullable: false }),
    aceitoTermos: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.requiredTrue],
    }),
  });

  enviar() {
    console.log(this.formMensagem.controls.aceitoTermos.value);
  }
}
