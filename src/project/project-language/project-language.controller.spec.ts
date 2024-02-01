import { Test, TestingModule } from '@nestjs/testing';
import { ProjectLanguageController } from './project-language.controller';
import { ProjectLanguageService } from './project-language.service';

describe('ProjectLanguageController', () => {
  let controller: ProjectLanguageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectLanguageController],
      providers: [ProjectLanguageService],
    }).compile();

    controller = module.get<ProjectLanguageController>(ProjectLanguageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
