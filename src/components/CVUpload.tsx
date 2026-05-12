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
    <div className="mt-10">
      <p className="font-body text-xs uppercase tracking-[0.3em] text-[#9e2750] mb-4">
        Enviá tu CV
      </p>
      <div
        onDrop={handleDrop}
        onDragOver={e => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        className="border border-dashed border-[#9e2750]/40 p-10 text-center cursor-pointer hover:border-[#9e2750] hover:bg-[#9e2750]/5 transition-all"
      >
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={e => { if (e.target.files?.[0]) handleFile(e.target.files[0]) }}
        />
        <Upload size={24} className="mx-auto mb-3 text-[#9e2750]/50" />
        {file ? (
          <p className="font-body text-sm text-[#9e2750]">{file.name}</p>
        ) : (
          <>
            <p className="font-body text-sm text-[#2a2a2a]/60">Arrastrá tu CV acá o hacé click para seleccionar</p>
            <p className="font-body text-xs text-[#2a2a2a]/40 mt-1">PDF, DOC, DOCX — máx. 5MB</p>
          </>
        )}
      </div>
      {file && status !== 'sent' && (
        <button
          onClick={handleSubmit}
          disabled={status === 'sending'}
          className="mt-4 w-full font-body text-sm uppercase tracking-widest bg-[#9e2750] text-white py-3 hover:bg-[#7d1f3f] transition-colors disabled:opacity-50"
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
