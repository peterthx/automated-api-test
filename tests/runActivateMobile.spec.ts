import { test, expect } from '@playwright/test'
import { ENV_BASE, HEADERS } from '../config/env'
import { generateUUID, FormatterDatetime, generateRef } from '../utils/apiHelpers'
import PPMobileData from '../fixtures/DataMobile'

const randomItem = PPMobileData[Math.floor(Math.random() * PPMobileData.length)]
const DatetimeV1 = FormatterDatetime();

test.describe('Test API call as a service promt pay', () => {
    // Activate Mobile
    test('Activate a mobile prompt pay successfully', async ({ request }) => {

        const requestHeaders = {
            ...HEADERS.MOBILE_ACTIVATE_HEADER,
            'request_uuid': generateUUID(),
            'request-datetime': `${DatetimeV1}`
        }
        const res = await request.post(`${ENV_BASE.SERVICE_NAMES_MOBILE_ACTIVATE}`, {
            headers: requestHeaders,
            data: {
                mobile_no: randomItem.mobile_no,
                account_no: randomItem.acc_no,
                referance: generateRef()
            }
        })
        const jsonData = await res.json();
        expect(jsonData).toMatchObject({
            status: {
                code: expect.any(String),
                description: expect.any(String)
            }
        })

    });

    // Query Mobile
    test('Inquiry a mobile prompt pay successfully', async ({ request }) => {

        const requestHeaders = {
            ...HEADERS.MOBILE_INQUIRY_HEADER,
            'request_uuid': generateUUID(),
            'request-datetime': `${DatetimeV1}`
        }
        const res = await request.post(`${ENV_BASE.SERVICE_NAMES_MOBILE_INQUIRY}`, {
            headers: requestHeaders,
            data: {
                mobile_no: randomItem.mobile_no
            }
        });
        const jsonData = await res.json();
        expect(jsonData).toMatchObject({
            status: {
                code: expect.any(String),
                description: expect.any(String)
            }
        })

    });

    // Deactivate mobile
    test('Deactivate a mobile prompt pay successfully', async ({ request }) => {

        const requestHeaders = {
            ...HEADERS.MOBILE_DEACTIVATE_HEADER,
            'request_uuid': generateUUID(),
            'request-datetime': `${DatetimeV1}`
        }
        const res = await request.post(`${ENV_BASE.SERVICE_NAMES_MOBILE_DEACTIVATE}`, {
            headers: requestHeaders,
            data: {
                mobile_no: randomItem.mobile_no,
                referance: generateRef()

            }
        });
        const jsonData = await res.json();
        expect(jsonData).toMatchObject({
            status: {
                code: expect.any(String),
                description: expect.any(String)
            }
        })
    });
});
