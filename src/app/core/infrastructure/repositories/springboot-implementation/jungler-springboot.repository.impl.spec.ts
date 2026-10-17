import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { JUNGLERS_MOCK } from '../../../../mocks/junglers.mocks';
import { Jungler } from '../../../domain/models/jungler.model';
import { DataService } from '../../services/data.service';
import { JunglerSpringBootRepositoryImpl } from './jungler-springboot.repository.impl';

describe('JunglerSpringBootRepositoryImpl (Infrastructure)', () => {
  let repository: JunglerSpringBootRepositoryImpl;

  const countJunglers = 5;
  const DataServiceMock = { getAllJunglersSpringBoot: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JunglerSpringBootRepositoryImpl,
        { provide: DataService, useValue: DataServiceMock }
      ]
    }).compileComponents();
    repository = TestBed.inject(JunglerSpringBootRepositoryImpl);
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllJunglersSpringBoot()', () => {
    const getAllSpy = DataServiceMock.getAllJunglersSpringBoot.mockReturnValue(of([]));
    repository.getAll(countJunglers).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countJunglers);
  });

  it('debe devolver el listado de junglers como Observable', (done) => {
    DataServiceMock.getAllJunglersSpringBoot.mockReturnValue(of(JUNGLERS_MOCK));
    repository.getAll(countJunglers).subscribe((junglers: Jungler[]) => {
      expect(junglers).toEqual(JUNGLERS_MOCK);
      done();
    });
  });
});
