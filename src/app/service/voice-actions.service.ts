import { Injectable } from '@angular/core';
import { TtsService } from './tts.service'
@Injectable({
  providedIn: 'root'
})
export class VoiceActionsService {
  isActivated = false;
  constructor(public tts: TtsService) {
  }

  performAction(text: string) {
    text = text.toLowerCase();
    if (text == 'ben') {
      this.isActivated = true;
      setTimeout(() => {
        this.isActivated = false;
        return;
      }, 10000)
    }
    if (this.isActivated) {
      if (text == 'what day is it today') {
        this.tts.speakThis("Today is a good day");
      } else if (text == "how is sales doing today") {
        this.tts.speakThis("All KPI's except for sales in The USA look good today");
      }
    }
  }
}
