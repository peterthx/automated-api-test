// Generate uuid
export function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

// Get datetime
export function FormatterDatetime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDay()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const DatetimeV1 = `${year}-${month}-${day}T${hours}-${minutes}-${seconds}`;
    return DatetimeV1
}

// Generate Referance
export function generateRef(){
    const prefix = 'NTB';
    const randomNumber = Math.floor(Math.random()*900000)+ 100000;
    return `${prefix}${randomNumber}`
}