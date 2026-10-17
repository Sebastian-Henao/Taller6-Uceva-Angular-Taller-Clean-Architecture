import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { JUNGLERS_MOCK } from '../../../../mocks/junglers.mocks';
import { Jungler } from '../../../domain/models/jungler.model';
import { DataService } from '../../services/data.service';
import { JunglerLocalRepositoryImpl } from './jungler-local.repository.impl';

describe('JunglerLocalRepositoryImpl (Infrastructure)', () => {
  let repository: JunglerLocalRepositoryImpl;

  const countJunglers = 5;
  const DataServiceMock = { getAllJunglersLocal: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JunglerLocalRepositoryImpl,
        { provide: DataService, useValue: DataServiceMock }
      ]
    }).compileComponents();
    repository = TestBed.inject(JunglerLocalRepositoryImpl);
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllJunglersLocal()', () => {
    const getAllSpy = DataServiceMock.getAllJunglersLocal.mockReturnValue(of([]));
    repository.getAll(countJunglers).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countJunglers);
  });

  it('debe devolver el listado de junglers como Observable', (done) => {
    DataServiceMock.getAllJunglersLocal.mockReturnValue(of(JUNGLERS_MOCK));
    repository.getAll(countJunglers).subscribe((junglers: Jungler[]) => {
      expect(junglers).toEqual(JUNGLERS_MOCK);
      done();
    });
  });
});
