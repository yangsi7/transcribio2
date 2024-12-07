import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import type { Speaker } from '../types';

interface ExportOptions {
  speakers: Speaker[];
  speakerMap: Record<string, string>;
  text: string;
}

export async function exportTranscription(
  format: string,
  options: ExportOptions,
  filename = 'transcription'
) {
  const { speakers, speakerMap, text } = options;

  switch (format.toLowerCase()) {
    case 'txt': {
      const content = speakers
        .map((s) => `${speakerMap[s.speaker] || s.speaker}: ${s.text}`)
        .join('\n\n');
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, `${filename}.txt`);
      break;
    }

    case 'md': {
      const content = speakers
        .map((s) => `**${speakerMap[s.speaker] || s.speaker}**: ${s.text}`)
        .join('\n\n');
      const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
      saveAs(blob, `${filename}.md`);
      break;
    }

    case 'pdf': {
      const doc = new jsPDF();
      let y = 20;
      const lineHeight = 10;
      const pageHeight = doc.internal.pageSize.height - 20;

      speakers.forEach((s) => {
        const speaker = speakerMap[s.speaker] || s.speaker;
        const lines = doc.splitTextToSize(
          `${speaker}: ${s.text}`,
          doc.internal.pageSize.width - 20
        );

        if (y + lines.length * lineHeight > pageHeight) {
          doc.addPage();
          y = 20;
        }

        doc.setFont('helvetica', 'bold');
        doc.text(`${speaker}:`, 10, y);
        doc.setFont('helvetica', 'normal');
        doc.text(s.text, 10, y + lineHeight);
        y += (lines.length + 1) * lineHeight;
      });

      doc.save(`${filename}.pdf`);
      break;
    }

    case 'docx': {
      const doc = new Document({
        sections: [
          {
            children: speakers.map(
              (s) =>
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${speakerMap[s.speaker] || s.speaker}: `,
                      bold: true,
                    }),
                    new TextRun(s.text),
                  ],
                  spacing: {
                    after: 200,
                  },
                })
            ),
          },
        ],
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, `${filename}.docx`);
      break;
    }

    case 'rtf': {
      const content = speakers
        .map(
          (s) =>
            `{\\b ${speakerMap[s.speaker] || s.speaker}:} ${s.text.replace(
              /[\\{}]/g,
              '\\$&'
            )}`
        )
        .join('\\par\\par ');
      const rtf = `{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0 Times New Roman;}}\n${content}}`;
      const blob = new Blob([rtf], { type: 'text/rtf' });
      saveAs(blob, `${filename}.rtf`);
      break;
    }

    default:
      throw new Error(`Unsupported format: ${format}`);
  }
}