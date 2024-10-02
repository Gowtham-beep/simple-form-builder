const selecteOption = document.getElementById("field-type");
const fieldName = document.getElementById("field-name");

// Add field
function addfield() {
    if (!selecteOption.value) {
        alert("Select the input type..!");
        return;
    }

    switch (selecteOption.value) {
        case 'text':
            addtext();
            break;
        case 'checkbox':
            addcheckbox();
            break;
        case 'radio':
            addradio();
            break;
        default:
            console.log("Invalid option selected");
    }
}

// Text Field
function addtext() {
    const preview = document.getElementById("preview-field");
    const div = document.createElement('div');
    div.classList.add('flex', 'items-center', 'space-x-4');

    const label = document.createElement('label');
    label.innerHTML = fieldName.value;
    label.classList.add('font-semibold', 'text-gray-700');

    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('px-2', 'py-1', 'border', 'border-gray-300', 'rounded');

    div.appendChild(label);
    div.appendChild(input);
    preview.appendChild(div);
}

// Checkbox
function addcheckbox() {
    const preview = document.getElementById('preview-field');
    const div = document.createElement('div');
    div.classList.add('flex', 'items-center', 'space-x-4');

    const label = document.createElement('label');
    label.innerHTML = fieldName.value;
    label.classList.add('font-semibold', 'text-gray-700');

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('rounded', 'text-blue-500', 'focus:ring-blue-500');

    div.appendChild(label);
    div.appendChild(input);
    preview.appendChild(div);
}

// Radio Button
function addradio() {
    const preview = document.getElementById('preview-field');
    const div = document.createElement('div');
    div.classList.add('flex', 'items-center', 'space-x-4');

    const label = document.createElement('label');
    label.innerHTML = fieldName.value;
    label.classList.add('font-semibold', 'text-gray-700');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'radio-group';
    input.classList.add('rounded-full', 'text-blue-500', 'focus:ring-blue-500');

    div.appendChild(label);
    div.appendChild(input);
    preview.appendChild(div)
}
