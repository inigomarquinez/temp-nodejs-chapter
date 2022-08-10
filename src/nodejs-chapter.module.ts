import { Module } from '@nestjs/common';
import { NodeJSChapterController } from './nodejs-chapter.controller';
import { NodeJSChapterService } from './nodejs-chapter.service';

@Module({
  imports: [],
  controllers: [NodeJSChapterController],
  providers: [NodeJSChapterService],
})
export class NodeJSChapterModule {}
