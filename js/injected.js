
const div = document.createElement('div');
div.innerHTML = 'Hello, world!';
// div.style.position = 'fixed';
div.style.top = '0';
div.style.right = '0';
div.style.zIndex = '999999';
div.style.backgroundColor = 'black';
div.style.color = 'white';
div.style.padding = '10px';
div.style.fontSize = '20px';
// width and height 100% to cover the whole screen
div.style.width = '100%';
div.style.height = '100%';
div.style.display = 'flex';
div.style.justifyContent = 'center';

const form = document.createElement('form');
form.action = '#';

const recaptcha = document.createElement('div');
recaptcha.className = 'g-recaptcha';
recaptcha.dataset.sitekey = '6Le1wDwjAAAAAHrpaym0GXIVHzwZjHpWFMbefqMn';
recaptcha.id = 'recaptcha';
form.appendChild(recaptcha);

const br = document.createElement('br');
form.appendChild(br);

const textareaCaptchaId = document.createElement('textarea');
textareaCaptchaId.id = 'captcha';
textareaCaptchaId.name = 'captcha';
form.appendChild(textareaCaptchaId);

div.appendChild(form);
document.body.appendChild(div);

const script = document.createElement('script');
script.type = 'text/javascript';
script.text = `
    var onloadCallback = function() {
        grecaptcha.render('recaptcha', {
            'sitekey' : '6Le1wDwjAAAAAHrpaym0GXIVHzwZjHpWFMbefqMn',
            'callback' : verifyCallback,
        });

    };

    function verifyCallback(response) {
        captcha.value = response;
        console.log('verifyCallback', response);
    }
`;

document.body.appendChild(script);

const script2 = document.createElement('script');
script2.src = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit&hl=vi';
script2.async = true;
script2.defer = true;

document.body.appendChild(script2);