
var div = document.createElement('div');
div.innerHTML = div.innerHTML = `
<div>
	Copyright © 2024 Project Developed by 
	<a href="https://github.com/ayushchahal44" target="_blank">Ayush Chahal</a>
</div>
`;

// set style
div.style.color = 'rgb(156 159 166)';
div.style.float = 'left';
div.style.position = 'fixed';
div.style.bottom = '0';
div.style.left = '0';
div.style.right = '0';
div.style.padding = '10px';
div.style.background = '#fff';
div.style.textAlign = 'center';

// better to use CSS though - just set class
div.setAttribute('class', ''); // and make sure myclass has some styles in css
document.body.appendChild(div);
