type ResizeImageOptions = {
  width?: number
  height?: number
}

export function resizeImage(file: File, { width, height }: ResizeImageOptions): Promise<string> {
  return new Promise((resolve, reject) => {

    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    const maxW = width || 300
    const maxH = height || 300
    const img = document.createElement('img')

    img.onload = () => {
      const iw = img.width
      const ih = img.height
      const scale = Math.min((maxW / iw), (maxH / ih))
      const iwScaled = iw * scale
      const ihScaled = ih * scale
      canvas.width = iwScaled
      canvas.height = ihScaled
      context?.drawImage(img, 0, 0, iwScaled, ihScaled)
      resolve(String(canvas.toDataURL()))
    }
    img.src = URL.createObjectURL(file)
    img.onerror = reject
  })
}