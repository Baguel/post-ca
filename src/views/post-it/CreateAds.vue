<template>
  <div class="flex items-center justify-center py-[80px]">
    <div class="w-full max-w-lg max-h-lg">
      <div class="p-6 bg-red-200 rounded-lg shadow-md relative overflow-hidden">
        <div
          class="relative rounded-2xl bg-white p-6 shadow border-2 border-yellow-300"
        >
          <div>
            <h2 class="text-xl font-semibold text-gray-900">
              Create A Post-it
            </h2>
            <router-link
              :to="{ name: 'home' }"
              class="absolute right-5 top-5 text-gray-800 hover:text-gray-600"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </router-link>
          </div>
          <p class="mb-4 text-center text-sm">
            We'd love to hear what you want to do
          </p>
          <form @submit.prevent="showAlerte()" class="mb-4">
            <label class="" for="tilte">Title</label>
            <input
              class="mb-3 w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Your title"
              v-model="formData.title"
            />
            <label class="" for="content">Description</label>
            <textarea
              class="mb-3 w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Your description"
              v-model="formData.content"
            ></textarea>
            <button
              class="w-full rounded-lg bg-yellow-300 py-2.5 text-sm font-semibold transition duration-300 hover:bg-yellow-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    async showAlerte() {
      await axios.post("https://post-it.epi-bluelock.bj/notes/", {
        title: this.formData.title,
        content: [this.formData.content],
      });
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.font-handwritten {
  font-family: "Indie Flower", cursive;
}
.font-poppins {
  font-family: "Poppins", sans-serif;
}
.post-it {
  transition: all 0.3s ease;
}
.post-it:hover {
  transform: scale(1.05) rotate(0deg) !important;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.post-it::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-width: 0 16px 16px 0;
  border-style: solid;
  border-color: #fef3c7 #f3f4f6;
  transition: all 0.3s ease;
}
.post-it:hover::before {
  border-width: 0 32px 32px 0;
}
</style>
