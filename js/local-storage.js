// Local Storage functions
export function saveToLocalStorage(key, value) {
    const valueJson = JSON.stringify(value);
    localStorage.setItem(key, valueJson);
}

export function loadFromLocalStorage(key) {
    const retrievedValue = localStorage.getItem(key);
    return JSON.parse(retrievedValue);
}
