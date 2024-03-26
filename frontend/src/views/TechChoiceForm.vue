<template>
  <div class="p-4">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Name:</label>
        <input type="text" id="name" v-model="techChoice.name" required class="form-control" />
      </div>
      <!-- Add fields for shortName, description, websiteLink, documentationLink, releaseNotesLink, brandColour -->
      <div class="mb-3">
        <label for="c4ModelAbstraction" class="form-label">C4 Model Abstraction:</label>
        <select id="c4ModelAbstraction" v-model="techChoice.c4ModelAbstraction" required class="form-control">
          <option value="component">Component</option>
          <option value="container">Container</option>
          <option value="system">System</option>
          <option value="person">Person</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const techChoice = ref({
  name: '',
  shortName: '',
  description: '',
  websiteLink: '',
  documentationLink: '',
  releaseNotesLink: '',
  brandColour: '',
  c4ModelAbstraction: '',
});

const submitForm = async () => {
  try {
    await axios.post('http://localhost:3000/tech-choice', techChoice.value);
    alert('Technology choice submitted successfully');
    // Reset form or redirect as needed
  } catch (error) {
    alert('Failed to submit technology choice');
  }
};
</script>