import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-lenguage',
  templateUrl: './lenguage.component.html',
  styleUrls: ['./lenguage.component.scss']
})
export class LenguageComponent {
  isEnglish = false;

  constructor(private translationService: TranslationService) { }

  switchLanguage(language: string) {
    this.isEnglish = language === 'en';
    this.translationService.switchLanguage(language);
  }
}
