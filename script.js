const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const downloadCVButton = document.getElementById('downloadCVBtn');

const cvFilePath = 'Resume.pdf';
const suggestedFileName = 'Adith_R_Lal_CV.pdf';

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

if(downloadCVButton){
    downloadCVButton.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = cvFilePath;
        link.download = suggestedFileName;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    });
}