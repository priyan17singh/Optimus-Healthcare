function searchItem(query, type) {
    if (query.length < 2) return; // Trigger search only after typing 2+ characters

    fetch(`http://localhost:3000/search?query=${query}&type=${type}`)
        .then(response => response.json())
        .then(data => {
            const suggestions = document.getElementById(type + '-list');
            suggestions.innerHTML = '';
            data.forEach(item => {
                const option = document.createElement('div');
                option.textContent = item.name;
                option.onclick = () => addToPrescription(item.name, type);
                suggestions.appendChild(option);
            });
        });
}

function addToPrescription(name, type) {
    const list = document.getElementById(type + '-prescription');
    const item = document.createElement('li');
    item.textContent = name;
    list.appendChild(item);
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text('Doctor Prescription', 10, 10);

    let y = 20;
    doc.text('Medicines:', 10, y);
    document.querySelectorAll('#medicine-prescription li').forEach((li, index) => {
        y += 10;
        doc.text(`${index + 1}. ${li.textContent}`, 10, y);
    });

    y += 10;
    doc.text('Checkups:', 10, y);
    document.querySelectorAll('#checkup-prescription li').forEach((li, index) => {
        y += 10;
        doc.text(`${index + 1}. ${li.textContent}`, 10, y);
    });

    doc.save('prescription.pdf');
}