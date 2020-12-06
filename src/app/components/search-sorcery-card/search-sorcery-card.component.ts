import { Component, OnInit } from '@angular/core';
import { MtgApiService } from '../../services/mtg-api.service';
import { ICards } from '../../interfaces/cards';

@Component({
  selector: 'app-search-sorcery-card',
  templateUrl: './search-sorcery-card.component.html',
  styleUrls: ['./search-sorcery-card.component.scss']
})
export class SearchSorceryCardComponent implements OnInit {

  cardName: string = '';
  cards: Array<ICards>;
  loading: boolean = false;
  constructor(private mtgApi: MtgApiService) { }

  ngOnInit(): void {
  }

  searchCard() {
    this.loading = true;
    this.mtgApi.getSorceryCardsByName(this.cardName).subscribe(
      data => {
        this.cards = data.cards;
        this.loading = false;
      },
      error => { console.log(error) });
  }

}
