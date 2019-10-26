const forms = {
    getFormValues(e, callback) {
        const form = e.target.parentElement;
        const inputs = [...form.querySelectorAll('input, textarea')];
        const d = new Date();
        const values = { start: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}` };
    
        inputs.forEach(input => values[input.name] = input.type.toLowerCase() !== 'checkbox' ? input.value : input.checked);
        callback(values);
    }
}

export default forms;