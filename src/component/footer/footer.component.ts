import { Component } from '@angular/core';
import { CONSTANTS } from '../../constants/constant';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footer = CONSTANTS.FOOTER;
}
