import { captureException } from '@services/monitoring';
import apiConfig from '@apiConfig';
import config from '@config';
import BaseApi from '../BaseApi';
import { BaseApiException } from '../exceptions';

const { name, owner } = config;
const {
  emailJs: { baseUrl, serviceId, templateId, userId, accessToken },
} = apiConfig;

export class EmailJsApi extends BaseApi {
  /**
   * Send Email API request
   * @param {EmailJsSendEmailRequest} payload Email payload
   * */
  async send(payload: EmailJsSendEmailRequest): Promise<void> {
    try {
      const templateParams = {
        ...payload,
        site: name,
        to_name: owner,
        reply_to: payload.from_email,
      };

      const data = {
        serviceId,
        templateId,
        userId,
        templateParams,
        accessToken,
      };

      await this.restClient.post(`${this.baseUrl}/send`, data);
    } catch (error) {
      captureException(error as BaseApiException);
      throw new Error(`Failed to send email`);
    }
  }
}

export default new EmailJsApi(baseUrl);
