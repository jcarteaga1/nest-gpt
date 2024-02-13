import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

import { orthographyCheckUseCase } from './use-cases';
import { OrthographyDto } from './dtos';

@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async orthographyCheck(body: OrthographyDto) {
    return await orthographyCheckUseCase(this.openai, {
      prompt: body.prompt,
    });
  }
}
