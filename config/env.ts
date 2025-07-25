export const ENV_BASE = {
    // url for the service mobile
    SERVICE_NAMES_MOBILE_ACTIVATE: 'http://localhost:3000/mobile/activate',
    SERVICE_NAMES_MOBILE_INQUIRY: 'http://localhost:3000/mobile/inquiry',
    SERVICE_NAMES_MOBILE_DEACTIVATE: 'http://localhost:3000/mobile/deactivate',

    // url for employees
    SERVICE_NAMES_QUERY_EMP:'http://localhost:3000/api/employees/search'
}

export const HEADERS = {
    // header
    MOBILE_ACTIVATE_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'promptpay-mobile-activate',
        'request-app-id': 'AB_EXAMPLE'
    },
    MOBILE_INQUIRY_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'promptpay-mobile-inquiry',
        'request-app-id': 'AB_EXAMPLE'
    },
    MOBILE_DEACTIVATE_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'promptpay-mobile-deactivate',
        'request-app-id': 'AB_EXAMPLE'
    }
}
