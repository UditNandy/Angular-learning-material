import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormComponent } from './features/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './features/template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlighterDirective } from './features/directives/highligher/highlighter.directive';
import { DirectivesViewerComponent } from './features/directives-viewer/directives-viewer.component';
import { DragAndDropDirective } from './features/directives/drag-and-drop/drag-and-drop.directive';
import { LifecycleHooksComponent } from './features/lifecycle-hooks/lifecycle-hooks.component';
import { TemplateReferenceVariableComponent } from './features/template-reference-variable/template-reference-variable.component';
import { TemplateReferenceChildComponent } from './features/template-reference-variable/template-reference-child/template-reference-child.component';
import { LifecycleChildComponent } from './features/lifecycle-hooks/lifecycle-child/lifecycle-child.component';
import { HostBindingExampleDirective } from './features/directives/host-binding-example/host-binding-example.directive';
import { CustomIfDirective } from './features/directives/customIf/custom-if.directive';
import { ViewEncapsulationComponent } from './features/view-encapsulation/view-encapsulation.component';
import { DependencyInjectionComponent } from './features/dependency-injection/dependency-injection.component';
import { RoutingExampleComponent } from './features/routing-example/routing-example.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { PipesViewComponent } from './features/pipes-view/pipes-view.component';
import { PercentagePipe } from './features/pipes/percentage-pipe/percentage.pipe';
import { CustomFilterPipe } from './features/pipes/custom-filter/custom-filter.pipe';
import { DynamicComponentComponent } from './features/dynamic-component/dynamic-component.component';
import { CssPracticeComponent } from './features/css-practice/css-practice.component';
import { ModuleExampleComponent } from './features/module-example/module-example.component';
import { DemoService } from './services/demo.service';
import { DependencyInjectionChild } from './features/dependency-injection/dependency-injection-child/depenedency-injection-child.component';
import { ChildService } from './services/child.service';
import { CommonModule } from '@angular/common';
import { AngularFundamentalsComponent } from './features/angular-fundamentals/angular-fundamentals.component';
import { AngularInterviewQuestionsComponent } from './features/angular-interview-questions/angular-interview-questions.component';
import { CompilationProcessComponent } from './features/compilation-process/compilation-process.component';
import { AngularElementsComponent } from './features/angular-elements/angular-elements.component';
import { WorkersComponent } from './features/workers/workers.component';
import { PrototypesComponent } from './features/prototypes/prototypes.component';
import { NgrxDemoComponent } from './features/ngrx-demo/ngrx-demo.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { NgrxFormComponent } from './features/ngrx-demo/components/ngrx-form/ngrx-form.component';
import { NgrxDisplayComponent } from './features/ngrx-demo/components/ngrx-display/ngrx-display.component';
import { dataReducer } from './features/ngrx-demo/store/reducers/demo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DemoEffect } from './features/ngrx-demo/store/effects/demo.effect';
import { ChangeDetectionComponent } from './features/change-detection/change-detection.component';
import { DecoratorsComponent } from './features/decorators/decorators.component';
import { ObjectOrientedJavascriptComponent } from './features/object-oriented-javascript/object-oriented-javascript.component';

export const CHILD_TOKEN = new InjectionToken<ChildService>('CHILD_SERVICE');

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    HighlighterDirective,
    DirectivesViewerComponent,
    DragAndDropDirective,
    LifecycleHooksComponent,
    TemplateReferenceVariableComponent,
    TemplateReferenceChildComponent,
    LifecycleChildComponent,
    HostBindingExampleDirective,
    CustomIfDirective,
    ViewEncapsulationComponent,
    DependencyInjectionComponent,
    RoutingExampleComponent,
    NotfoundComponent,
    PipesViewComponent,
    PercentagePipe,
    CustomFilterPipe,
    DynamicComponentComponent,
    CssPracticeComponent,
    ModuleExampleComponent,
    DependencyInjectionChild,
    AngularFundamentalsComponent,
    AngularInterviewQuestionsComponent,
    CompilationProcessComponent,
    AngularElementsComponent,
    WorkersComponent,
    PrototypesComponent,
    NgrxDemoComponent,
    NgrxFormComponent,
    NgrxDisplayComponent,
    ChangeDetectionComponent,
    DecoratorsComponent,
    ObjectOrientedJavascriptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forRoot({ data: dataReducer }),
    EffectsModule.forRoot([DemoEffect]),
  ],
  providers: [{ provide: CHILD_TOKEN, useClass: ChildService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
