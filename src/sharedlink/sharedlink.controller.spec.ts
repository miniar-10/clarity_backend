import { Test, TestingModule } from '@nestjs/testing';
import { SharedlinkController } from './sharedlink.controller';
import { SharedlinkService } from './sharedlink.service';

describe('SharedlinkController', () => {
  let controller: SharedlinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SharedlinkController],
      providers: [SharedlinkService],
    }).compile();

    controller = module.get<SharedlinkController>(SharedlinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
