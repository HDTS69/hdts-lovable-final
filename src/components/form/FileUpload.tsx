import { useState, ChangeEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, X } from 'lucide-react'

interface FileUploadProps {
  files: File[]
  setFiles: (files: File[]) => void
}

export function FileUpload({ files, setFiles }: FileUploadProps) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-1">
      <Label htmlFor="file-upload">Upload Photos or Files (Optional)</Label>
      <div className="flex items-center space-x-2">
        <Input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="hidden"
          multiple
          accept="image/*,.pdf,.doc,.docx"
        />
        <Button
          type="button"
          variant="outline"
          onClick={() => document.getElementById('file-upload')?.click()}
          className="w-full bg-white"
        >
          <Upload className="w-4 h-4 mr-2" />
          Choose Files
        </Button>
      </div>
      {files.length > 0 && (
        <div className="mt-1 space-y-1">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-100 p-1.5 rounded">
              <span className="text-sm truncate max-w-[200px] sm:max-w-none">{file.name}</span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeFile(index)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}