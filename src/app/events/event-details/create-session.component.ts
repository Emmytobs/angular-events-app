import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession } from '../shared/index';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  newSessionForm: FormGroup;

  @Output() saveNewSession: EventEmitter<ISession> = new EventEmitter();
  @Output() cancelAddSession: EventEmitter<any> = new EventEmitter();
  constructor() { }

  saveSession(formValues) {
    const session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      presenter: formValues.presenter,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: [],
    };
    // Gives the session object to the event-details component
    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit();
  }

  ngOnInit() {
    // Each validator returns a function (validators.required|maxLength|restrictedWords|prohibitedWords)
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('',
      [ Validators.required, Validators.maxLength(400), this.restrictedWords, this.prohibitedWords(['zoo', 'bar']) ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  // Creating a custom validator
  restrictedWords(control: FormControl) {
    return control.value.includes('foo')
      ? {'restrictedWords': 'foo'}
      : null;
    }

    prohibitedWords(words) {
    return (control: FormControl) => {
      if (!words) { return; }

      const prohibitedWords =
      words
        .map(prohibitedWord => control.value.includes(prohibitedWord) ? prohibitedWord : null)
        .filter(prohibitedWord => prohibitedWord != null);

        return prohibitedWords && prohibitedWords.length > 0
        ? {'prohibitedWords': prohibitedWords.join(', ')}
        : null;
      };
    }
  }
