import { Test, TestingModule } from '@nestjs/testing';
import { ActionItemController } from './action-item.controller';
import { ActionItemService } from './action-item.service';

describe('ActionItemController', () => {
  let controller: ActionItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActionItemController],
      providers: [ActionItemService],
    }).compile();

    controller = module.get<ActionItemController>(ActionItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
