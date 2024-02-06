const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');

const qrContainer = document.querySelector('.qr-body'); 
const qrImage = document.getElementById("qrImage");
generateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    generateQRCode();
});

sizes.addEventListener("change",(e)=>{
    sizes = e.target.value;
    generateQRCode();
})
function generateQRCode(){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    qr-body.classList.add("show-img");
}