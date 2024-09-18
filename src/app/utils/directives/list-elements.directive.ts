import { Directive, DoCheck, Input, IterableDiffer, IterableDiffers, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[listElements]',
  standalone: true
})
export class ListElementsDirective implements DoCheck {
  @Input('listElements')
  elements: Array<string> = []

  private differ: IterableDiffer<string>;

  constructor(
    private differs: IterableDiffers,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    this.differ = differs.find([]).create();
  }

  ngDoCheck(): void {
    this.viewContainer.clear();
    const changes = this.differ.diff(this.elements);
    if (changes) {
      this.elements.forEach((errorMsg, index) => {
        console.log(`renderizando elemento ${index}`);
        this.viewContainer.createEmbeddedView(this.templateRef, {
          $implicit: errorMsg
        });
      });
    }
  }

}
