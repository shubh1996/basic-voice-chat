import { Injectable } from '@angular/core';
import Speech from 'speak-tts'

@Injectable({
  providedIn: 'root'
})
export class TtsService {
  public speech = new Speech() // will throw an exception if not browser supported

  constructor() {
    if (this.speech.hasBrowserSupport()) { // returns a boolean
      console.log("speech synthesis supported")
    }
    // this.speech.init().then((data) => {
    //   // The "data" object contains the list of available voices and the voice synthesis params
    //   console.log("Speech is ready, voices are available", data)
    // }).catch(e => {
    //   console.error("An error occured while initializing : ", e)
    // })

    this.speech.init({
      'volume': 1,
      'lang': 'en-GB',
      'rate': 1,
      'pitch': 1,
      'voice': 'Google UK English Male',
      'splitSentences': true,
      'listeners': {
        'onvoiceschanged': (voices) => {
          // console.log("Event voiceschanged", voices)
        }
      }
    })
  }

  speakThis(text) {
    this.speech.speak({
      text: text,
  })
  }
}
