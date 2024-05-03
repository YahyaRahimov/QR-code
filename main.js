const qrBox = document.querySelector('.boxImg');
const qrImg = document.querySelector('#qrImage');
const qrText = document.querySelector('#qrText')

const QR = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

const createQR = () => {
  if(qrText.value.length > 0 ){
    qrBox.classList.add('show-img');
    qrImg.src = `${QR} + ${qrText.value}`;
  } else {
    qrText.classList.add('error')
    setTimeout(() => {
      qrText.classList.remove('error')
    },1000)
  }
}