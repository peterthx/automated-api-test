import { test, expect } from '@playwright/test'
import { ENV_BASE, HEADERS } from '../config/env'
import { generateUUID, FormatterDatetime, generateRef } from '../utils/apiHelpers'
import PPTaxData from '../fixtures/DataTax'

const randomItem = PPTaxData[Math.floor(Math.random() * PPTaxData.length)]
const DatetimeV1 = FormatterDatetime();

test.describe('Test API call as a service tax promtpay', async () => {
    
    test('Activate a tax prompt pay successfully', async ({ request }) => {
        // Activate Tax
        const requestHeaders = {
            ...HEADERS.TAX_ACTIVATE_HEADER,
            'request_uuid': generateUUID(),
            'request-datetime': `${DatetimeV1}`
        }
        const res = await request.post(`${ENV_BASE.SERVICE_NAMES_TAX_ACTIVATE}`, {
            headers: requestHeaders,
            data: {
                citizen_id: randomItem.tax,
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

    test('Inquiry a tax prompt pay successfully', async ({ request }) => {
        // Query Tax
        const requestHeaders = {
            ...HEADERS.TAX_INQUIRY_HEADER,
            'request_uuid': generateUUID(),
            'request-datetime': `${DatetimeV1}`
        }
        const res = await request.post(`${ENV_BASE.SERVICE_NAMES_TAX_INQUIRY}`, {
            headers: requestHeaders,
            data: {
                citizen_id: randomItem.tax
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

    test('Deactivate a tax prompt pay successfully', async ({ request }) => {
        // Deactivate Tax
        const requestHeaders = {
            ...HEADERS.TAX_DEACTIVATE_HEADER,
            'request_uuid': generateUUID(),
            'request-datetime': `${DatetimeV1}`
        }
        const res = await request.post(`${ENV_BASE.SERVICE_NAMES_TAX_DEACTIVATE}`, {
            headers: requestHeaders,
            data: {
                citizen_id: randomItem.tax,
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
});
