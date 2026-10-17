import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { JUNGLERS_MOCK } from '../../../../mocks/junglers.mocks';
import { Jungler } from '../../../domain/models/jungler.model';
import { DataService } from '../../services/data.service';
import { JunglerNodeRepositoryImpl } from './jungler-node.repository.impl';

describe('JunglerNodeRepositoryImpl (Infrastructure)', () => {
  let repository: JunglerNodeRepositoryImpl;

  const countJunglers = 5;
  const DataServiceMock = { getAllJunglersNode: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JunglerNodeRepositoryImpl,
        { provide: DataService, useValue: DataServiceMock }
      ]
    }).compileComponents();
    repository = TestBed.inject(JunglerNodeRepositoryImpl);
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllJunglersNode()', () => {
    const getAllSpy = DataServiceMock.getAllJunglersNode.mockReturnValue(of([]));
    repository.getAll(countJunglers).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countJunglers);
  });

  it('debe devolver el listado de junglers como Observable', (done) => {
    DataServiceMock.getAllJunglersNode.mockReturnValue(of(JUNGLERS_MOCK));
    repository.getAll(countJunglers).subscribe((junglers: Jungler[]) => {
      expect(junglers).toEqual(JUNGLERS_MOCK);
      done();
    });
  });
});
