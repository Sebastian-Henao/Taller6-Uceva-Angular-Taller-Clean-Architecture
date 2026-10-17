import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Personaje, RolCategoria } from '../../../core/domain/models/personaje.model';

/**
 * Tabla de presentación de personajes.
 *
 * @remarks
 * Recibe el listado desde un componente padre mediante el input
 * `personajes` y muestra sus datos junto con un badge cuyo estilo depende
 * del rol. Forma parte de la capa de presentación y del nivel organismo
 * del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-personajes-table [personajes]="personajes"></app-personajes-table>
 * ```
 */
@Component({
  selector: 'app-personajes-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './personajes-table.component.html',
})
export class PersonajesTableComponent {
  /** Personajes que se mostrarán en la tabla. */
  @Input() personajes: Personaje[] = [];

  /**
   * Asocia cada rol con el tipo de badge usado para representarlo.
   *
   * @remarks
   * El mapeo debe incluir todos los valores de {@link RolCategoria}.
   */
  categoryMap: Record<RolCategoria, BadgeType> = {
   'Vanguardia': 'primary',
   'Ladron': 'dark',
   'Jefe': 'danger',
   'Ilusionista': 'info',
   'Explorador': 'success', 
  }
}
