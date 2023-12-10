<template>
  <div>
    <h1>Upload PNG Image</h1>
    <input type="file" @change="handleFileChange">
    <button @click="uploadImage">Upload Image</button>

    <!-- Display uploaded image -->
    <div v-if="uploadedImageUrl">
      <p>Uploaded Image:</p>
      <img :src="uploadedImageUrl" alt="Uploaded Image">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
      uploadedImageUrl: null,
    };
  },
  methods: {
    handleFileChange(event) {
      // Update selectedFile when the input value changes
      this.selectedFile = event.target.files[0];
    },
    uploadImage() {
      if (this.selectedFile && this.selectedFile.type === 'image/png') {
        const formData = new FormData();
        formData.append('image', this.selectedFile);

        // Replace 'https://api.example.com/upload' with your actual API endpoint
        const apiUrl = 'https://api.example.com/upload';

        // Use Axios to send a POST request
        axios.post(apiUrl, formData)
          .then(response => {
            // Assuming the server responds with the URL of the uploaded image
            this.uploadedImageUrl = response.data.imageUrl;
          })
          .catch(error => {
            console.error('Error uploading image:', error);
            // Handle error, if needed
          });
      } else {
        console.warn('Please select a valid PNG image.');
      }
    },
  },
};
</script>