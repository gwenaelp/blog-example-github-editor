<template>
  <div>
    <h1>Edit Readme</h1>
      <div>
        From this form you can edit the readme of the project.
      </div>
      <div>
        <textarea v-model="readme" placeholder="Content of the Readme file"></textarea>
      </div>
    <button @click="save">Save changes</button>
  </div>
</template>

<script>

export default {
  name: 'Editor',
  data() {
    // Redirect to login if the user did not log in
    if (!window.repository) {
      this.$router.push('/');
    }

    window.repository.getContents('master', 'README.md', false, (err, responseText) => {
      if (err) {
        console.error(err);
      }

      // The content is encoded with base64, so you need to use atob() to get it.
      this.readme = atob(responseText.content);
    });

    return {
      readme: '',
    };
  },
  methods: {
    save() {
      window.repository.writeFile(
        'master', // Branch you want to push the file to
        'README.md', // File path
        this.readme, // Content
        'edit readme from the webapp', // Commit message
        (err) => {
          // Callback
          if (err) {
            console.error(err);
          } else {
            alert('File edited sucessfully.');
          }
        },
      );
    },
  },
};
</script>
