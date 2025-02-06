const formater = {
    formatDateTime: (stringDate: string) => {
        const date = new Date(stringDate);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }
};

export { formater };