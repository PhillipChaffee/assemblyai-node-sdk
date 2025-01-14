/**
 * Instead of polling for the result of your transcription, you can receive a webhook once your transcript is complete, or if there was an error transcribing your audio file.
 *
 * Specify Your Webhook URL
 * ------------------------
 *
 * When submitting an audio file for transcription, you can include the additional parameter `webhook_url` in your POST request. This must be a URL that can be reached by our backend.
 *
 * Receiving the Webhook
 * ---------------------
 *
 * You'll receive a webhook when your transcription goes to status `"completed"`, or when your transcription goes to status `"error"`. In either case, a `POST` request will be made to the webhook URL you supplied. The headers and body will look like this:
 * ```
 *     headers
 *     ---
 *     content-length: 79
 *     accept-encoding: gzip, deflate
 *     accept: *\/*
 *     user-agent: python-requests/2.21.0
 *     content-type: application/json
 *
 *     request body
 *     --
 *     status: completed
 *     transcript_id: 5552493-16d8-42d8-8feb-c2a16b56f6e8
 * ```
 *
 * Once you receive the webhook, you can make a `GET` request to `/v2/transcript` to [fetch the final result](/walkthroughs#getting-the-transcription-result "null") of your transcription.
 *
 * Including Custom Parameters in Your Webhook Request
 * ---------------------------------------------------
 *
 * Often times, you'll want to associate certain meta data with your transcription request, such as a customer ID, and have that passed back to your webhook. The easiest way to do this is to include these parameters in your webhook URL as query parameters, for example:
 *
 *     https://foo.com/webhook?myParam1=foo&myParam2=bar
 *
 * Then, when you receive the webhook, you can parse these parameters out of the webhook URL.
 *
 * Failed webhooks and retries
 * ---------------------------
 *
 * If we get a non `2xx` response when we `POST` to your webhook URL, we'll retry the request 10 times, with a 10 second interval between each retry. After all 10 retries fail, we'll consider the webhook to be permanently failed.
 *
 * If we are unable to reach your webhook URL (usually caused by a timeout, or your server being offline), no retries will be attempted.
 *
 * Audio Redaction
 * ---------------
 *
 * If a [`webhook_url`](/walkthroughs#using-webhooks "null") was provided in your `POST` request when submitting your audio file for transcription, we will send a `POST` to your `webhook_url` when the redacted audio is ready. The `POST` request headers and JSON body will look like this:
 * ```
 *     headers
 *     ---
 *     content-length: 79
 *     accept-encoding: gzip, deflate
 *     accept: *\/*
 *     user-agent: python-requests/2.21.0
 *     content-type: application/json
 *
 *     params
 *     --
 *     status: 'redacted_audio_ready'
 *     redacted_audio_url: 'https://link-to-redacted-audio'
 * ```
 */
export class WebhookResponse {
  /**
   * The status of your transcription. `queued`, `processing`, `completed`, or `error`
   * or
   * The status of the redacted audio file. `redacted_audio_ready`
   */
  status?: string;
  /**
   * The unique identifier of your transcription.
   */
  transcript_id?: string;
  /**
   * The link to the redacted audio file.
   */
  redacted_audio_url?: string;
}
