"use client"

import Snackbar from "@/components/Snackbar";
import alert from "@/lib/Alert";
import parseMarkdownToReact from "@/lib/parseMarkdown";
import { Copy, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page(){
  
  const [ markdown, setMarkdown ] = useState("# Hello, World!\nThis is **bold**.");
  const [ htmlContent, setHtmlContent ] = useState("");
  const [snackbar, setSnackbar] = useState({
    visible: false,
    message: '',
    type: 'success' // 'success' or 'error' for different styling
  });

  const showSnackbar = (message: string, type = 'success') => {
    setSnackbar({ visible: true, message, type });

    setTimeout(() => {
      setSnackbar(prev => ({ ...prev, visible: false }));
    }, 3000);
  };
  
  const handleCopyClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showSnackbar('Text copied to clipboard!', 'success');
    } catch (err) {
      console.error('Failed to copy text: ', err);
      showSnackbar('Failed to copy text', 'error');
    }
  };

  useEffect(() => {
    async function parse() {
      const html = await parseMarkdownToReact(markdown);
      setHtmlContent(html);
    }
    parse()
  }, [markdown])

  return (
    <div className="flex flex-col h-fit md:h-screen bg-black text-neutral-50 px-3 py-2 md:flex-row">
      <div className="flex flex-col w-full h-svh md:h-11/12 items-end gap-2 md:w-1/2">
        <textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)}
          className="w-full h-full p-4
          font-mono text-neutral-50 bg-black
          border border-neutral-900 rounded-sm
          resize-none overflow-auto
          focus:border-neutral-800 focus:outline-none"/>
          <button className="flex gap-2 px-3 py-2 rounded-sm text-neutral-50 bg-neutral-950 hover:bg-neutral-900"
                  onClick={() => handleCopyClick(markdown)}>
            <Copy className="size-6 text-neutral-50"/>
            Markdown
          </button>
      </div>
      <div className="flex flex-col w-full h-svh md:h-11/12 items-end gap-2 md:w-1/2">
        <div className="p-4 w-full h-full overflow-auto rounded-sm flex flex-col gap-1" dangerouslySetInnerHTML={{__html: htmlContent}}></div>
        <div className="flex gap-2">
            <button onClick={() => alert({message: 'Press ctrl+p to print the pdf'})}>
              <Link href={`/pdf?query=${encodeURIComponent(htmlContent.trim())}`}
                    className="flex gap-2 px-3 py-2 rounded-sm text-neutral-50 bg-neutral-950 hover:bg-neutral-900">
                  <Download className="size-6 text-neutral-50"/>
                  <span className="text-white">PDF</span>
              </Link>
            </button>
            <button className="flex gap-2 px-3 py-2 rounded-sm text-neutral-50 bg-neutral-950 hover:bg-neutral-900"
                    onClick={() => handleCopyClick(htmlContent)}>
                <Copy className="size-6 text-neutral-50"/>
                HTML
            </button>
        </div>
      </div>
      {snackbar.visible && <Snackbar snackbar={snackbar} />}
    </div>
  )
}
