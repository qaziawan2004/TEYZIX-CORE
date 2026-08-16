import jsPDF from 'jspdf'
import 'jspdf-autotable'

export const exportToPDF = (data, title = 'Dashboard Report', filename = 'dashboard-report.pdf') => {
  if (!data || data.length === 0) {
    console.warn('No data to export')
    return
  }

  const doc = new jsPDF('landscape')
  
  doc.setFontSize(20)
  doc.setTextColor(59, 130, 246)
  doc.text(title, 14, 22)
  
  doc.setFontSize(11)
  doc.setTextColor(100, 116, 139)
  doc.text(`Generated: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`, 14, 32)

  doc.setDrawColor(200, 200, 200)
  doc.line(14, 36, 280, 36)

  const headers = Object.keys(data[0])
  const rows = data.map(row => headers.map(header => row[header] || ''))

  doc.autoTable({
    head: [headers.map(h => h.toUpperCase())],
    body: rows,
    startY: 40,
    styles: {
      fontSize: 8,
      cellPadding: 3,
    },
    headStyles: {
      fillColor: [59, 130, 246],
      textColor: [255, 255, 255],
      fontSize: 9,
      fontStyle: 'bold',
    },
    alternateRowStyles: {
      fillColor: [245, 247, 250],
    },
  })

  const pageCount = doc.internal.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.setTextColor(150, 150, 150)
    doc.text(
      `Page ${i} of ${pageCount}`,
      doc.internal.pageSize.getWidth() / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'center' }
    )
  }

  doc.save(filename)
}