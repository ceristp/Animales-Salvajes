const db = (() => {
    const URL = './animales.json';
    const getData = async() => {
        const res = await fetch(URL);
        const data = await res.json();
        return data
    }
    return { getData }
})();

export default db
