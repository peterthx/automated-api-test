import { test, expect } from '@playwright/test'
import { ENV_BASE, HEADERS } from '../config/env'
import { generateUUID, FormatterDatetime, generateRef } from '../utils/apiHelpers'
import PPNatIdData from '../fixtures/DataNatID'

const randomItem = PPNatIdData[Math.floor(Math.random() * PPNatIdData.length)]
const DatetimeV1 = FormatterDatetime();

test.describe('Test API call as a service citizen promtpay', () => {

    test('Activate a citizen prompt pay successfully', async ({ request }) => {
        // Activate citizen
        const requestHeaders = {
            ...HEADERS.CITIZEN_ACTIVATE_HEADER,
            'request_uuid': generateUUID(),
            'request-datetime': `${DatetimeV1}`
        }
        const res = await request.post(`${ENV_BASE.SERVICE_NAMES_NATID_ACTIVATE}`, {
            headers: requestHeaders,
            data: {
                citizen_id: randomItem.citizen,
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

    test('Inquiry a citizen prompt pay successfully', async ({ request }) => {
        // Query citizen
        const requestHeaders = {
            ...HEADERS.CITIZEN_INQUIRY_HEADER,
            'request_uuid': generateUUID(),
            'request-datetime': `${DatetimeV1}`
        }
        const res = await request.post(`${ENV_BASE.SERVICE_NAMES_NATID_INQUIRY}`, {
            headers: requestHeaders,
            data: {
                citizen_id: randomItem.citizen
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

    test('Deactivate a mobile prompt pay successfully', async ({ request }) => {
        // Deactivate citizen
        const requestHeaders = {
            ...HEADERS.CITIZEN_DEACTIVATE_HEADER,
            'request_uuid': generateUUID(),
            'request-datetime': `${DatetimeV1}`
        }
        const res = await request.post(`${ENV_BASE.SERVICE_NAMES_NATID_DEACTIVATE}`, {
            headers: requestHeaders,
            data: {
                citizen_id: randomItem.citizen,
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
