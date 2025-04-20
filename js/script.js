
function getRange() {
    const a = document.getElementById("range").value;
    document.getElementById("result").length = a;
    return document.getElementById("value_holder").innerText = a;
}

function generatePassword() {
    const UPPER = 'ABCDEFGHIJKLMOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const num = '1234567890';
    const char = '!@#$%^&*()_+-={}[]|\:;"<>,.?/~`';
    const a = document.getElementById('range').value;

    let r = '';
    let combineString = '';
    if (document.getElementById('number').checked) {
        combineString += num;
    }
    if (document.getElementById('char').checked) {
        combineString += char;
    }
    if (document.getElementById('UPPERCASE').checked) {
        combineString += UPPER;
    }
    if (document.getElementById('lowercase').checked) {
        combineString += lower;
    }
    for (let i = 0; i < a; i++) {
        r += combineString.charAt(Math.floor(Math.random() * combineString.length));
        document.getElementById('result').value = r; 
    }
    return r;
}

function CopytoClipboard() {
    const copyText = document.getElementById('result');
    const copyText_content = copyText.value;//Get the text from the result
    const copyText_length = copyText_content.length;//Get the length of the text
    if (copyText_length > 0) {
        copyText.select();
        copyText.setSelectionRange(0,99999);
        navigator.clipboard.writeText(copyText.value);
        showToast("Copied to Clipboard");
    }else{
        showToast("Nothing to Copy");
        // console.log(false);
    }
}

function showToast(message) {
    const toast = document.getElementById("feedback");
    toast.innerHTML = message;
    toast.className = "feedback show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}
function showPrivacy() {
    const toast = document.getElementById("privacyContainer");
    toast.className = "privacyContainer show1";
    if (toast.style.display === 'none') {
        toast.style.display = 'block'
    } else {
        toast.style.display = 'none'
    }
}
function closePrivacy() {
    document.getElementById("privacyContainer").style.display ='none';
}