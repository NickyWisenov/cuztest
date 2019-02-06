import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiService } from '../../../core/http/api.service';
import { 
  RootStoreState,
  PricemodelStoreActions,
  PriceModelStoreSelectors
} from '../../../root-store';

@Component({
  selector: 'app-select-lang',
  templateUrl: './select-lang.component.html',
  styleUrls: ['./select-lang.component.scss']
})

export class SelectLangComponent implements OnInit {
  @Input()  type: string = 'source';
  @Input()  color: string = 'royal-blue';
  
  show_modal = false;
  selected_lang = null;
  languages: any = null;

  notable_lang$: any = null;

  constructor(
    private store$: Store<RootStoreState.State>,
    private apiService: ApiService  
  ) {
    this.apiService.getListOfLanguages().subscribe(
      data => {
        this.languages = data.languages;
      },
      error => {
        console.log(error);
      }
    )
   }

  ngOnInit() {
    localStorage.setItem('source_lang', null);
    localStorage.setItem('target_lang', null);
  } 

  onClickHandler(event: any) {
    event.preventDefault();
    this.show_modal = true;

    if (this.type == 'source') {
      this.notable_lang$ = JSON.parse(localStorage.getItem('target_lang'));
    } else if (this.type == 'target') {
      this.notable_lang$ = JSON.parse(localStorage.getItem('source_lang'));
    }
  }

  onSelectLang(lang: any, event: any) {
    event.preventDefault();
    // Select Lang which is not same with the other lang
    if (this.notable_lang$ == null || this.notable_lang$.id != lang.id) {
      this.selected_lang = lang;
    }
  }

  onClickModalDone () {
    this.show_modal = false;
    
    if (this.selected_lang !== null) {
      if (this.type == 'source') {
        localStorage.setItem('source_lang', JSON.stringify(this.selected_lang));
      } else if (this.type == 'target') {
        localStorage.setItem('target_lang', JSON.stringify(this.selected_lang));
      }
    }

    // Set Store Value
    if (this.type === 'source') {
      this.store$.dispatch(new PricemodelStoreActions.SET_FROM_LANG({
        from_language: this.selected_lang.id
      }));
    } else if (this.type === 'target') {
      this.store$.dispatch(new PricemodelStoreActions.SET_TO_LANG({
        to_language: this.selected_lang.id
      }));
    }
  }

  onClickModalCancel () {
    this.show_modal = false;

    // Get Previous Lang
    if (this.type == 'source') {
      this.selected_lang = JSON.parse(localStorage.getItem('source_lang'));
    } else if (this.type == 'target') {
      this.selected_lang = JSON.parse(localStorage.getItem('target_lang'));
    }
  }
}
