import { FormGroup } from '@angular/forms';

export function PasswordChecker(
  controlName: string,
  ComparecontrolNamed: string
) {
  return (formgroup: FormGroup) => {
    const password = formgroup.controls[controlName];
    const confirmpassword = formgroup.controls[ComparecontrolNamed];

    if (password.value !== confirmpassword.value) {
      confirmpassword.setErrors({
        mustmatch: true,
      });
    } else {
      confirmpassword.setErrors(null);
    }
  };
}
