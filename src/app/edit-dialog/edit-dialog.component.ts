import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class EditDialogComponent implements OnInit {

  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  accountForm: FormGroup;
  submitted:boolean = false;
  optionsDay: Array<number> = Array.from({length: 31}, (v, k) => k+1);
  optionsMonth: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  optionsYear: Array<number> = new Array(); 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      fullName: ['', Validators.required, Validators.minLength(2)],
      dob: ['', Validators.required]
    });

    const max = new Date().getFullYear() - 18;
    const min = max - 200;
    for(let i = min; i< max; i++) this.optionsYear.push(i);
    
  }

  get formControls() { return this.accountForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.accountForm.invalid) {
        return;
    }
    this.visible = false;
}

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
