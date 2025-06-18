function toggleTheme() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

// Set theme on page load
window.onload = () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
};

function downloadPDF() {
  const element = document.querySelector(".resume-wrapper");
  html2pdf()
    .set({
      margin: 0.5,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    })
    .from(element)
    .save();
}