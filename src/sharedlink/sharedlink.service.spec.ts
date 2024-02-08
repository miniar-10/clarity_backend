import { Test, TestingModule } from '@nestjs/testing';
import { SharedlinkService } from './sharedlink.service';

describe('SharedlinkService', () => {
  let service: SharedlinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharedlinkService],
    }).compile();

    service = module.get<SharedlinkService>(SharedlinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
