function getName() {
    return document.getElementById('fullname').value;
}
function clearName() {
    document.getElementById('fullname').value = '';
    document.getElementById('fullname').focus();
}

function addNameToOutput(name) {
    if(!name) return;

    let list = document.querySelector('div#output > ul');
    list.innerHTML += '<li>' + name + '</li>';
}

document.getElementById('btnAdd').onclick = function() {
    let name = getName();
    addNameToOutput(name);
    clearName();
};