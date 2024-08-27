import { Test, TestingModule } from '@nestjs/testing';
import { CertificacionService } from './certificacion.service';

describe('CertificacionService', () => {
  let service: CertificacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CertificacionService],
    }).compile();

    service = module.get<CertificacionService>(CertificacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
