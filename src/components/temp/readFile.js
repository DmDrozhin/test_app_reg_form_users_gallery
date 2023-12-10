function readFile(file) {
  return new Promise((resolve, reject) => {
    const rd = new FileReader()
    rd.onload = (ev) => {
      const img = new Image()
      img.src = ev.target.result
      img.onload = () => {
        resolve({ width: img.width, height: img.height })
      }
      img.onerror = () => {
        reject(new Error('Failed to load image'));
      }
    }
    rd.onerror = () => {
      reject(new Error('Failed to read file'));
    }
    rd.readAsDataURL(file)
  })
}

// Example usage:
const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];

  try {
    const dimensions = await readFile(file);
    console.log('Image dimensions:', dimensions);
  } catch (error) {
    console.error('Error:', error.message);
  }
});