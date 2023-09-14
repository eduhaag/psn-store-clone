import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css']
})
export class CardFooterComponent {
	@Input()
	gameType: string = ''

	@Input()
	gamePrice: string = ''

}
