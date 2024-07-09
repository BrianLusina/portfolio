import { captureException } from '@services/monitoring';
import config from '@config';
import { BaseApiException } from '../exceptions';
import BaseApi from '../BaseApi';

const {
  cms: { paperRabbit :{ baseUrl } },
} = config;

export class AboutApi extends BaseApi {
  private readonly basePath = '/api/collections/';

  constructor(baseUrl: string) {
      super(baseUrl);
  }

  async mainSkills(): Promise<MainSkillResponseDto> {
    try {
      const response = await this.restClient.get<MainSkillResponseDto>(`${this.baseUrl}/${this.basePath}/main_skills/records`);
      return response.data
    } catch (error) {
      captureException(error as BaseApiException);
      throw new Error(`Failed to send email`);
    }
  }
}

const aboutApi = new AboutApi(baseUrl);

export default aboutApi;
