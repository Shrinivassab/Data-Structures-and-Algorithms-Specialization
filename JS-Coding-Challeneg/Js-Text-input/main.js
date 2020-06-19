const elements = document.querySelectorAll( "#parent input[type='text']");

const result = Array.from(elements).reduce((prev, current) => {
    const names = current.name.split(".");
    let temp = prev;
    names.forEach((name, index) => {
        if (!(name in temp)) {
            temp[name] = {};
        }
        if (index == names.length - 1) {
            temp[name] = current.value;
        }
        temp = temp[name];
    });
    return prev;
}, {});

getValues('parent');
