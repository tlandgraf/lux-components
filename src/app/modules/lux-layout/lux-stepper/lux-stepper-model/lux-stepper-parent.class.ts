import {
  AfterViewInit,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  Directive,
  OnDestroy
} from '@angular/core';
import { MatHorizontalStepper, MatVerticalStepper } from '@angular/material/stepper';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { ILuxStepperConfiguration } from './lux-stepper-configuration.interface';
import { Subscription } from 'rxjs';

/**
 * Parent-Klasse für den LuxStepperVertical und LuxStepperHorizontal, beide Komponenten werden ausschließlich von
 * dem LuxStepper zur Darstellung genutzt.
 */
@Directive() // Angular 9 (Ivy) ignoriert @Input(), @Output() in Klassen ohne @Directive() oder @Component().
export class LuxStepperParent implements OnDestroy, AfterViewInit {
  // Diese Outputs werden bei den Klicks auf die Stepper-eigenen Navigations-Buttons augelöst und informieren die
  // LuxStepperComponent
  @Output() luxFinButtonClicked: EventEmitter<any> = new EventEmitter();
  @Output() luxNextButtonClicked: EventEmitter<any> = new EventEmitter();
  @Output() luxPrevButtonClicked: EventEmitter<any> = new EventEmitter();
  // Wird beim Wechsel des Steps (über Header oder Button) aufgerufen
  @Output() luxStepChanged: EventEmitter<StepperSelectionEvent> = new EventEmitter<StepperSelectionEvent>();
  @Output() luxCheckValidation: EventEmitter<void> = new EventEmitter<void>();
  // Wird beim AfterViewInit und bei jeder Aktualisierung der MatStepLabels aufgerufen um die LuxStepperComponent
  // über die aktuellen Elemente informiert zu halten
  @Output() luxMatStepperLoaded: EventEmitter<MatHorizontalStepper | MatVerticalStepper> = new EventEmitter();
  @Output() luxMatStepLabelsLoaded: EventEmitter<ViewContainerRef[]> = new EventEmitter();

  @ViewChild('stepper', { static: true }) matStepper: MatHorizontalStepper | MatVerticalStepper;
  @ViewChildren('matStepLabel', { read: ViewContainerRef }) matStepLabels: QueryList<ViewContainerRef>;

  @Input() luxStepperConfig: ILuxStepperConfiguration;

  subscription: Subscription;

  constructor() {}

  ngAfterViewInit() {
    // Sobald die Component initialisiert ist, dem Parent (luxStepper) den
    // MatStepper und die MatStepLabels mitteilen
    this.luxMatStepperLoaded.emit(this.matStepper);
    this.luxMatStepLabelsLoaded.emit(this.matStepLabels.toArray());
    this.subscription = this.matStepLabels.changes.subscribe(() => {
      this.luxMatStepLabelsLoaded.emit(this.matStepLabels.toArray());
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
