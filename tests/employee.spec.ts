import { test, expect } from '@playwright/test'
import { ENV_BASE } from '../config/env'

test.describe('Test employee service', () => {
    test('Check data return for employees', async ({ request }) => {
        const res = await request.get(`${ENV_BASE.SERVICE_NAMES_QUERY_EMPLOYEES}`,
            {
                headers: {
                    'Accept': 'application/json'
                }
            }
        );

        const jsonData = await res.json();
        expect(Array.isArray(jsonData.data)).toBe(true);
        for (const employee of jsonData.data) {
            expect(employee).toMatchObject({
                employee_id: expect.anything(),
                full_name: expect.any(String),
                email: expect.stringMatching(/^[^@\s]+@[^@\s]+\.[^@\s]+$/),
                salary: expect.any(String),
                department_name: expect.any(String),
                hire_date: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
            });
        }
    });

    test('health check', async ({ request }) => {
        const res = await request.get(`${ENV_BASE.SERVICE_NAMES_HEALTH_CHECK}`,
            {
                headers: {
                    'Accept': 'application/json'
                }
            }
        );
        expect(res.status()).toBe(200);
        const jsonData = await res.json();
        expect(jsonData).toMatchObject({
            timestamp: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
            uptime: expect.any(Number),
            environment: "development",
            version: "1.0.0"
        })
    });
});
