import { Component } from '@angular/core';
import { IForm } from './interfaces/form.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-typed-forms',
  templateUrl: './typed-forms.component.html',
  styleUrls: ['./typed-forms.component.scss'],
})
export class TypedFormsComponent {
  constructor() {}

  mensagens: IForm[] = [];

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
    Swal.fire({
      title: 'Sucesso 😍',
      text: "Mensagem enviada com sucesso!",
      icon: 'success'
    })
    const mensagem = this.formMensagem.value as unknown as IForm;
    this.mensagens.push(mensagem);
    this.limparForm();
  }

  limparForm() {
    this.formMensagem.reset();
  }

  exibirMensagem(form: IForm) {
    const { mensagem } = form;
    Swal.fire({
      title: 'Detalhe da mensagem',
      text: `${mensagem}`,
      icon: 'info'
    })
  }

  limparMensagens() {
    this.mensagens = [];
  }
}
