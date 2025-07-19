export const ENV_BASE = {
    // url for the service mobile
    SERVICE_NAMES_MOBILE_ACTIVATE: 'http://localhost:3000/mobile/activate',
    SERVICE_NAMES_MOBILE_INQUIRY: 'http://localhost:3000/mobile/inquiry',
    SERVICE_NAMES_MOBILE_DEACTIVATE: 'http://localhost:3000/mobile/deactivate',

    // url for the service tax
    SERVICE_NAMES_NATID_ACTIVATE: 'http://localhost:3000/citizen/activate',
    SERVICE_NAMES_NATID_INQUIRY: 'http://localhost:3000/citizen/inquiry',
    SERVICE_NAMES_NATID_DEACTIVATE: 'http://localhost:3000/citizen/deactivate',

    // url for the service tax
    SERVICE_NAMES_TAX_ACTIVATE: 'http://localhost:3000/tax/activate',
    SERVICE_NAMES_TAX_INQUIRY: 'http://localhost:3000/tax/inquiry',
    SERVICE_NAMES_TAX_DEACTIVATE: 'http://localhost:3000/tax/deactivate',
}

export const HEADERS = {
    // header
    TAX_ACTIVATE_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'promptpay-tax-activate',
        'request-app-id': 'AB_EXAMPLE'
    },
    TAX_INQUIRY_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'promptpay-tax-inquiry',
        'request-app-id': 'AB_EXAMPLE'
    },
    TAX_DEACTIVATE_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'promptpay-tax-deactivate',
        'request-app-id': 'AB_EXAMPLE'
    },
    CITIZEN_ACTIVATE_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'promptpay-citizen-activate',
        'request-app-id': 'AB_EXAMPLE'
    },
    CITIZEN_INQUIRY_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'promptpay-citizen-inquiry',
        'request-app-id': 'AB_EXAMPLE'
    },

    CITIZEN_DEACTIVATE_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'promptpay-citizen-deactivate',
        'request-app-id': 'AB_EXAMPLE'
    },
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
