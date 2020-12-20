import { sandboxOf } from 'angular-playground';
import { ButtonComponent } from './button.component';

export default sandboxOf(ButtonComponent)
  .add('default', {
    template: `<app-button></app-button>`
  });
