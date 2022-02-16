import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { pharmacyColumnsDefinition, Definition } from 'src/const';
import { update, clear } from 'src/app/formState.actions';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss'],
})
export class PharmacyComponent implements OnInit {
  displayItems = pharmacyColumnsDefinition.filter((x) => x.display);
  formState$;

  constructor(private store: Store<{ formState: any }>) {
    this.formState$ = store.select('formState');
  }

  ngOnInit(): void {}

  inputChange(event: Event, param: Definition) {
    const stateParam = {
      [param.name]: (event.target as HTMLInputElement).value,
    };
    this.store.dispatch(update(stateParam));
  }
}
