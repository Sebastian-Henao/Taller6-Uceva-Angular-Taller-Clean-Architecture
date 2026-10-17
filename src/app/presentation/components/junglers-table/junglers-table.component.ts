import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Jungler, JunglerDifficulty, JunglerRole } from '../../../core/domain/models/jungler.model';

/**
 * Componente de tabla de campeones junglers.
 *
 * Muestra el listado de campeones junglers en una tabla estilizada con Bootstrap,
 * incluyendo badges visuales para rol y dificultad.
 *
 * @remarks
 * Este componente recibe los datos a través del Input `junglers` y utiliza
 * `roleMap` y `difficultyMap` para asignar colores a los badges.
 */
@Component({
  selector: 'app-junglers-table',
  templateUrl: './junglers-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class JunglersTableComponent {
  /**
   * Listado de campeones junglers que se muestran en la tabla.
   */
  @Input() junglers: Jungler[] = [];

  /**
   * Mapeo de roles a estilos cromáticos de badges.
   */
  roleMap: Record<JunglerRole, BadgeType> = {
    'Luchador': 'primary',
    'Asesino': 'danger',
    'Tanque': 'success',
    'Mago': 'info',
    'Tirador': 'warning',
  };

  /**
   * Mapeo de dificultad a estilos de badges.
   */
  difficultyMap: Record<JunglerDifficulty, BadgeType> = {
    'Baja': 'success',
    'Media': 'warning',
    'Alta': 'danger',
  };
}
