import { FormControl } from "@angular/forms";

export interface IForm {
  nome?: FormControl<string | null>;
  email: FormControl<string>;
  mensagem?: FormControl<string | null>;
  aceitoTermos: FormControl<boolean>;
}
