import { Controller, Get } from '@nestjs/common';
import { NodeJSChapterService } from './nodejs-chapter.service';
import { RepositoryDto } from './dtos/repository.dto';

@Controller()
export class NodeJSChapterController {
	constructor(private readonly chapterService: NodeJSChapterService) { }

	@Get()
	getDescription(): string {
		return this.chapterService.getDescription();
	}

	@Get('repositories')
	getRepositories(): RepositoryDto[] {
		return this.chapterService.getRepositories();
	}
}
