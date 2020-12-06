import { Component, OnInit } from '@angular/core';
import { ICards } from 'src/app/interfaces/cards';
import { MtgApiService } from '../../services/mtg-api.service';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {

  cardName: string = '';
  cards: Array<ICards>;
  loading: boolean = false;
  constructor(private mtgApi: MtgApiService) { }

  ngOnInit(): void {
  }

  searchCard() {
    this.loading = true;
    this.mtgApi.getCardsByName(this.cardName).subscribe(
      data => {
        this.cards = data.cards;
        this.loading = false;
      },
      error => { console.log(error) });
  }

}
