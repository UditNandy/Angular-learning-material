import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './features/rxjs/rxjs.component';
import { ReactiveFormComponent } from './features/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './features/template-form/template-form.component';
import { DirectivesViewerComponent } from './features/directives-viewer/directives-viewer.component';
import { LifecycleHooksComponent } from './features/lifecycle-hooks/lifecycle-hooks.component';
import { TemplateReferenceVariableComponent } from './features/template-reference-variable/template-reference-variable.component';
import { ViewEncapsulationComponent } from './features/view-encapsulation/view-encapsulation.component';
import { DependencyInjectionComponent } from './features/dependency-injection/dependency-injection.component';
import { RoutingExampleComponent } from './features/routing-example/routing-example.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { PipesViewComponent } from './features/pipes-view/pipes-view.component';
import { CssPracticeComponent } from './features/css-practice/css-practice.component';
import { ModuleExampleComponent } from './features/module-example/module-example.component';
import { AuthGuard } from './services/auth.guard';
import { JsInterviewComponent } from './features/js-interview-questions/js-interview.component';
import { AngularFundamentalsComponent } from './features/angular-fundamentals/angular-fundamentals.component';
import { AngularInterviewQuestionsComponent } from './features/angular-interview-questions/angular-interview-questions.component';

const routes: Routes = [
  { path: 'angular-fundamentals', component: AngularFundamentalsComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: 'templateForm', component: TemplateFormComponent },
  { path: 'directives', component: DirectivesViewerComponent },
  { path: 'lifecycle-hooks', component: LifecycleHooksComponent },
  {
    path: 'template-reference-variables',
    component: TemplateReferenceVariableComponent,
  },
  { path: 'view-encapsulation', component: ViewEncapsulationComponent },
  {
    path: 'dependency-injection',
    component: DependencyInjectionComponent,
  },
  {
    path: 'routing-example',
    component: RoutingExampleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pipes',
    component: PipesViewComponent,
  },
  {
    path: 'css-practice',
    component: CssPracticeComponent,
  },
  {
    path: 'module',
    component: ModuleExampleComponent,
  },
  {
    path: 'js-interview',
    component: JsInterviewComponent,
  },
  {
    path: 'angular-interview-questions',
    component: AngularInterviewQuestionsComponent,
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
