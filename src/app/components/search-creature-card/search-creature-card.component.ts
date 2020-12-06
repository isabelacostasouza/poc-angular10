import { Component, OnInit } from '@angular/core';
import { MtgApiService } from '../../services/mtg-api.service';
import { ICards } from '../../interfaces/cards';

@Component({
  selector: 'app-search-creature-card',
  templateUrl: './search-creature-card.component.html',
  styleUrls: ['./search-creature-card.component.scss']
})
export class SearchCreatureCardComponent implements OnInit {

  cardName: string = '';
  cards: Array<ICards>;
  loading: boolean = false;
  constructor(private mtgApi: MtgApiService) { }

  ngOnInit(): void {
  }

  searchCard() {
    this.loading = true;
    this.mtgApi.getCreatureCardsByName(this.cardName).subscribe(
      data => {
        this.cards = data.cards;
        this.loading = false;
      },
      error => { console.log(error) });
  }

}
