import { AfterViewInit, Component, OnInit } from '@angular/core';
import { VoiceRecognitionService } from '../service/voice-recognition.service'

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.scss'],
  providers: [VoiceRecognitionService]
})
export class SpeechToTextComponent implements OnInit,AfterViewInit {

  text: string;
  start = false;

  constructor(
    public service: VoiceRecognitionService
  ) {
    this.service.init();
  }

  ngOnInit(){}

  ngAfterViewInit(): void {    
    // this.startService();
    // this.start = true;
  }

  startService() {
    this.service.start()
  }

  stopService() {
    this.service.stop()
  }

}
