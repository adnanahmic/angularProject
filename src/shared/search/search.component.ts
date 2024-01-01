import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() searchText = new EventEmitter<any>();
  searchTextControl = new FormControl('');

  constructor() {
    this.searchTextControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((searchText: any) => {
        this.searchText.emit(searchText);
      });
  }
}
