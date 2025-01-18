<template>
  <div class="flex items-center justify-center py-[80px]">
    <div class="w-full max-w-lg">
      <div class="p-6 bg-red-200 rounded-lg shadow-md relative overflow-hidden">
        <div
          class="relative rounded-2xl bg-white p-6 shadow border-2 border-yellow-300"
        >
          <div>
            <h2 class="text-xl font-semibold text-gray-900">
              Update A Post-it
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
          <form @submit.prevent="update()" class="mb-4">
            <label class="" for="tilte">Title</label>
            <input
              class="mb-3 w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Your title"
              v-model="note.title"
            />
            <label class="" for="content">Description</label>
            <textarea
              class="mb-3 w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Your description"
              v-model="description"
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
//import { useRoute } from "vue-router";
//const route = useRoute();
import axios from "axios";
export default {
  data() {
    return {
      note: [],
      description: "",
    };
  },

  mounted() {
    fetch("https://post-it.epi-bluelock.bj/notes/" + this.$route.params.id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (data) => ((this.note = data), (this.description = data.content[0]))
      );
  },

  methods: {
    async update() {
      //const route = useRoute();
      await axios.put(
        "https://post-it.epi-bluelock.bj/notes/" + this.$route.params.id,
        {
          title: this.note.title,
          content: [this.description],
        }
      );
      this.$router.push("/");
    },
  },
};
</script>
