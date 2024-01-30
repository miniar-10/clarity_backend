import { Test, TestingModule } from '@nestjs/testing';
import { ActionItemService } from './action-item.service';

describe('ActionItemService', () => {
  let service: ActionItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActionItemService],
    }).compile();

    service = module.get<ActionItemService>(ActionItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
