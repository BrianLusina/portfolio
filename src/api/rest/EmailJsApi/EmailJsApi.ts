import { captureException } from '@services/monitoring';
import apiConfig from '@apiConfig';
import config from '@config';
import BaseApi from '../BaseApi';
import { BaseApiException } from '../exceptions';

const { title } = config;
const {
  emailJs: { baseUrl, serviceId, templateId, userId },
} = apiConfig;

export class EmailJsApi extends BaseApi {
  /**
   * Send Email API request
   * @param {EmailJsSendEmailRequest} payload Email payload
   * */
  async send(payload: SendEmailRequest): Promise<void> {
    try {
      const templateParams = {
        ...payload,
        site: title,
        reply_to: payload.email,
      };

      const data = {
        serviceId,
        templateId,
        userId,
        templateParams,
      };

      await this.restClient.post(`${this.baseUrl}/send`, data);
    } catch (error) {
      captureException(error as BaseApiException);
      throw new Error(`Failed to send email`);
    }
  }
}

const emailApi = new EmailJsApi(baseUrl);

export default emailApi;
