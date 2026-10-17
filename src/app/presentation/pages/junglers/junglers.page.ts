import { Component, inject, OnInit } from '@angular/core';
import { GetAllJunglersUseCase } from '../../../core/application/usecases/get-all-junglers.usecase';
import { Jungler } from '../../../core/domain/models/jungler.model';
import { AlertComponent } from '../../components/alert/alert.component';
import { JunglersTableComponent } from '../../components/junglers-table/junglers-table.component';
import { State } from '../../interfaces/state.interface';

/**
 * Componente contenedor de la página de campeones junglers.
 *
 * @remarks
 * Consume exclusivamente el caso de uso {@link GetAllJunglersUseCase}
 * respetando estrictamente los principios de Clean Architecture.
 * No accede a HttpClient ni a detalles de infraestructura.
 */
@Component({
  selector: 'app-junglers',
  templateUrl: `./junglers.page.html`,
  imports: [JunglersTableComponent, AlertComponent],
  providers: [GetAllJunglersUseCase]
})
export class JunglersPage implements OnInit {
  /**
   * Listado de campeones junglers.
   */
  junglers: Jungler[] = [];

  /**
   * Estado visual de la página.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Caso de uso inyectado para obtener los junglers.
   */
  private getAllJunglersUseCase = inject(GetAllJunglersUseCase);

  /**
   * Inicializa la vista y solicita los campeones.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.getAllJunglersUseCase.execute(20).subscribe({
      next: (junglers) => {
        this.junglers = junglers;
        this.state = 'success';
      },
      error: () => {
        this.state = 'error';
      },
    });
  }
}
