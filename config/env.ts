export const ENV_BASE = {
    // url for the service tax
    SERVICE_NAMES_ACTIVATE_TAX: 'http://localhost:3000/tax/activate',
    SERVICE_NAMES_INQ_TAX: 'http://localhost:3000/tax/inquiry',
    SERVICE_NAMES_DEACTIVATE_TAX: 'http://localhost:3000/tax/deactivate',

    // url for the service mobile
    SERVICE_NAMES_ACTIVATE_MOBILE: 'http://localhost:3000/mobile/activate',
    SERVICE_NAMES_INQ_MOBILE: 'http://localhost:3000/mobile/inquiry',
    SERVICE_NAMES_DEACTIVATE_MOBILE: 'http://localhost:3000/mobile/deactivate',

    SERVICE_NAMES_ACTIVATE_NATID: 'http://localhost:3000/citizen/activate',
    SERVICE_NAMES_INQ_NATID: 'http://localhost:3000/citizen/inquiry',
    SERVICE_NAMES_DEACTIVATE_NATID: 'http://localhost:3000/citizen/deactivate'
}

export const HEADERS = [{
    // header
    TAX_ACTIVATE_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'registered-promptpay-tax-activate',
        'request-app-id': 'AB_EXAMPLE'
    },
    TAX_INQUIRY_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'registered-promptpay-tax-inquiry',
        'request-app-id': 'AB_EXAMPLE'
    },
    TAX_DEACTIVATE_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'registered-promptpay-tax-deactivate',
        'request-app-id': 'AB_EXAMPLE'
    },
    CITIZEN_ACTIVATE_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'registered-promptpay-citizen-activate',
        'request-app-id': 'AB_EXAMPLE'
    },
    CITIZEN_INQUIRY_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'registered-promptpay-citizen-inquiry',
        'request-app-id': 'AB_EXAMPLE'
    },

    CITIZEN_DEACTIVATE_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'registered-promptpay-citizen-deactivate',
        'request-app-id': 'AB_EXAMPLE'
    },
    MOBILE_ACTIVATE_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'registered-promptpay-mobile-activate',
        'request-app-id': 'AB_EXAMPLE'
    },
    MOBILE_INQUIRY_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'registered-promptpay-mobile-inquiry',
        'request-app-id': 'AB_EXAMPLE'
    },

    MOBILE_DEACTIVATE_HEADER: {
        'Content-Type': 'application/json',
        'service-name': 'registered-promptpay-mobile-deactivate',
        'request-app-id': 'AB_EXAMPLE'
    }
}]