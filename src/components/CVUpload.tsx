'use client'
import { useState, useRef } from 'react'
import { Upload, CheckCircle } from 'lucide-react'

export default function CVUpload() {
  const [file, setFile]       = useState<File | null>(null)
  const [status, setStatus]   = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const inputRef              = useRef<HTMLInputElement>(null)

  const handleFile = (f: File) => {
    if (f.size > 5 * 1024 * 1024) { alert('El archivo no debe superar 5MB.'); return }
    setFile(f)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const f = e.dataTransfer.files[0]
    if (f) handleFile(f)
  }

  const handleSubmit = async () => {
    if (!file) return
    setStatus('sending')
    const formData = new FormData()
    formData.append('cv', file)
    try {
      const res = await fetch('/api/cv', { method: 'POST', body: formData })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={e => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        className="border border-dashed border-[#73223e]/40 px-4 py-3 flex items-center gap-3 cursor-pointer hover:border-[#73223e] hover:bg-[#73223e]/5 transition-all"
      >
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={e => { if (e.target.files?.[0]) handleFile(e.target.files[0]) }}
        />
        <Upload size={16} className="text-[#73223e]/50 shrink-0" />
        {file ? (
          <p className="font-body text-sm text-[#73223e]">{file.name}</p>
        ) : (
          <p className="font-body text-sm text-[#2a2a2a]/50">Adjuntá tu CV — PDF, DOC, DOCX (máx. 5MB)</p>
        )}
      </div>
      {file && status !== 'sent' && (
        <button
          onClick={handleSubmit}
          disabled={status === 'sending'}
          className="mt-4 w-full font-body text-sm uppercase tracking-widest bg-[#73223e] text-white py-3 hover:bg-[#7d1f3f] transition-colors disabled:opacity-50"
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar CV'}
        </button>
      )}
      {status === 'sent' && (
        <div className="mt-4 flex items-center gap-2 text-[#676537]">
          <CheckCircle size={16} />
          <p className="font-body text-sm">¡Tu CV fue enviado con éxito!</p>
        </div>
      )}
      {status === 'error' && (
        <p className="mt-4 font-body text-sm text-red-500">
          Hubo un error. Por favor intentá de nuevo o escribinos al WhatsApp.
        </p>
      )}
    </div>
  )
}
