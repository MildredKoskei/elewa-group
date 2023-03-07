import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-venture-labs-info',
  templateUrl: './venture-labs-info.component.html',
  styleUrls: ['./venture-labs-info.component.scss'],
})
export class VentureLabsInfoComponent {
  Input() paragraphs = [
    `Elewa group is funded by sustsinable, EBITDA positive, business
    venture which lie at the core of the group. These include Elewa
    Education, EdTech and Education consulting, and iTalanta, our
    largest activity of IT offshoring activities.`,

    `Sheltered by the group's stable business and strong cashflows,
    Elewa's culture and Venture Labs allow for creative exploration of 
    new business ideas and moonshot startup ventures.`
  ]
}
