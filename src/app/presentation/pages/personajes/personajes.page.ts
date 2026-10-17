import { Component, inject } from '@angular/core';
import { PersonajesTableComponent } from '../../components/personajes-table/personajes-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { GetAllPersonajesUsecase } from '../../../core/application/usecases/get-all-personajes.usecase';
import { Personaje } from '../../../core/domain/models/personaje.model';
import { State } from '../../interfaces/state.interface';

@Component({
  selector: 'app-personajes',
  imports: [PersonajesTableComponent, AlertComponent],
  templateUrl: './personajes.page.html',
  providers: [GetAllPersonajesUsecase]
})
export class PersonajesPage {
  personajes: Personaje[] = [];

    state: State = 'init';
  
    private getAllPersonajesUseCase = inject(GetAllPersonajesUsecase);

    ngOnInit(): void {
      this.state = 'loading';
      this.getAllPersonajesUseCase.execute(10).subscribe({
        next: (personajes) => {
          this.personajes = personajes;
          this.state = 'success';
        },
        error: (error) => {
          this.state = 'error';
        },
      })
    }
}
