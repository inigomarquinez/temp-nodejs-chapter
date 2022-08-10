import { Injectable } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { RepositoryDto } from './dtos/repository.dto';

@Injectable()
export class NodeJSChapterService extends ChapterService {
	getDescription(): string {
		return 'Best Chapter Ever!';
	}

	getRepositories(): RepositoryDto[] {
		return [
			{ name: 'cuckoojs', version: '0.1.0-alpha' },
			{ name: 'license-checker', version: '2.0.1' },
			{ name: 'systemic', version: '4.0.2' },
			{ name: 'More to come!', version: 'L.D.A-I' },
		];
	}
}
