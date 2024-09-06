import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent implements OnInit{
  title: string = 'Task traker';
  constructor(){}
  ngOnInit(): void {

  }

}
