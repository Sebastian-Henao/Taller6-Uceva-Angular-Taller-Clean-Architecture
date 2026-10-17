import { Component, inject } from '@angular/core';
import { PersonajesTableComponent } from '../../components/personajes-table/personajes-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { GetAllPersonajesUsecase } from '../../../core/application/usecases/get-all-personajes.usecase';
import { Personaje } from '../../../core/domain/models/personaje.model';
import { State } from '../../interfaces/state.interface';

/**
 * Página contenedora del listado de personajes.
 *
 * @remarks
 * Coordina la carga de datos mediante {@link GetAllPersonajesUsecase},
 * administra los estados de carga y entrega los resultados a
 * {@link PersonajesTableComponent}. Los estados de carga y error se
 * comunican a través de {@link AlertComponent}.
 *
 * Forma parte de la capa de presentación.
 *
 * @example
 * ```html
 * <app-personajes></app-personajes>
 * ```
 */
@Component({
  selector: 'app-personajes',
  imports: [PersonajesTableComponent, AlertComponent],
  templateUrl: './personajes.page.html',
  providers: [GetAllPersonajesUsecase]
})
export class PersonajesPage {
  /** Personajes obtenidos para mostrar en la tabla. */
  personajes: Personaje[] = [];

    /** Estado actual de la carga de personajes. */
    state: State = 'init';
  
    /** Caso de uso encargado de solicitar personajes. */
    private getAllPersonajesUseCase = inject(GetAllPersonajesUsecase);

    /**
     * Inicia la carga del listado al inicializar la página.
     *
     * @remarks
     * Solicita hasta 10 personajes y actualiza el estado a `success`
     * si la operación finaliza correctamente, o a `error` si falla.
     */
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
