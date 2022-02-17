import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { patientColumnsDefinition, Definition } from 'src/const';
import { update } from 'src/app/formState.actions';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  displayItems = patientColumnsDefinition.filter((x) => x.display);
  formState$;

  constructor(private store: Store<{ formState: any }>) {
    this.formState$ = this.store.select('formState');
  }

  ngOnInit(): void {}

  inputChange(event: Event, param: Definition) {
    const stateParam = {
      [param.name]: (event.target as HTMLInputElement).value,
    };
    this.store.dispatch(update(stateParam));
  }
}
