import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';
import { LoadingController } from '@ionic/angular';

describe('LoadingService', () => {
  let service: LoadingService;
  let loadingCtrl: LoadingController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    loadingCtrl = TestBed.inject(LoadingController);
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should present loading', async () => {
    const loadingControllerSpy = spyOn(loadingCtrl, 'create').and.callThrough();
    await service.presentLoading();
    expect(loadingControllerSpy).toHaveBeenCalled();
    expect(service.isLoading).toBeTrue();
    loadingCtrl.dismiss();
  });

  it('should dismiss loading', async () => {
    service.isLoading = true;
    service.loading = await loadingCtrl.create({
      message: 'Cargando...'
    });
  
    await service.dismissLoading();
  
    expect(service.isLoading).toBeFalse();
  });
});
