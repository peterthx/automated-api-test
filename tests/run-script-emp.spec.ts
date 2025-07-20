import { test, expect } from '@playwright/test'
import { ENV_BASE } from '../config/env'

test('- Check data return for employees', async ({ request }) => {
    const res = await request.get(`${ENV_BASE.SERVICE_NAMES_QUERY_EMP}`,
        {
            headers: {
                'Accept': 'application/json'
            }
        }
    );
    expect(res.status()).toBe(200);
    const jsonData = await res.json();
    expect(jsonData).toMatchObject({
        data: {
            employee_id: expect.any(String),
            full_name: expect.any(String),
            email: expect.any(/^[^@\s]+@[^@\s]+\.[^@\s]+$/),
            salary: expect.any(String),
            department_name: expect.any(String),
            hire_date: expect.any(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
        }
    })
});
