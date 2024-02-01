import { Test, TestingModule } from '@nestjs/testing';
import { ProjectLanguageService } from './project-language.service';

describe('ProjectLanguageService', () => {
  let service: ProjectLanguageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectLanguageService],
    }).compile();

    service = module.get<ProjectLanguageService>(ProjectLanguageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
