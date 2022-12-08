import { FormControl, FormGroup } from "@angular/forms";

export default class validateForm {
    static ValidateAllFormField(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsDirty({ onlySelf: true })
            }
            else {
                if (control instanceof FormGroup) {
                    this.ValidateAllFormField(control)
                }
            }
        })
    }
}

export class DateValidate {
    static getDateValidation() {
        var tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1);
        document.getElementsByName("somedate")[0].setAttribute('min', tomorrow.toISOString().split('T')[0]);
    }
}