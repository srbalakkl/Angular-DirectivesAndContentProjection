import {AfterViewInit, Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ChildComponent} from './child/child.component';
import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {CustomElementDirective} from './custom_directive/custom-element.directive';
import {CustomAttributeDirective} from './custom_directive/custom-attribute.directive';
import {MatButton} from '@angular/material/button';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  imports: [ChildComponent, RouterLink, NgTemplateOutlet, CustomElementDirective, CustomAttributeDirective, MatButton, MatProgressSpinner, NgIf, NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit{
  protected readonly title = signal('Angular-Directives');

  role = '';

  ngAfterViewInit(): void {
    console.log('role', this.role)
  }

  ary: any = ['asdf', 1, 'sdf'];

  myArticle: { id: number, name: string }[] = [
    {"id": 0, "name": "Available"},
    {"id": 1, "name": "Ready"},
    {"id": 2, "name": "Started"}
  ];

  myContext = {$implicit: 'World', localSk: 'Riya'};

  checkVal: string = 'Bala';
}
