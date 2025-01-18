<template>
  <div class="flex items-center justify-center py-[80px]">
    <div class="w-full max-w-xl">
      <div class="p-6 bg-red-200 rounded-lg shadow-md relative overflow-hidden">
        <div
          class="relative rounded-2xl bg-white p-6 shadow border-2 border-yellow-300"
        >
          <div>
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
          <div class="space-y-7">
            <div>
              <h2
                class="text-2xl font-semibold text-gray-900 overflow-hidden break-words mt-5"
              >
                {{ note.title }}
              </h2>
            </div>
            <div>
              <p class="mb-4 text-center text-xl overflow-hidden breaks-word">
                {{ description }}
              </p>
            </div>
            <div class="flex justify-between">
              <div class="mb-4 text-center text-xl">
                <p class="font-bold">Create at:</p>
                {{ new Date(note.createdAt).toString().split("G")[0] }}
              </div>
              <div class="mb-4 text-center text-xl">
                <p class="font-bold">Update at:</p>
                <p>{{ new Date(note.updatedAt).toString().split("G")[0] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  data() {
    return {
      note: [],
      description: [],
    };
  },

  mounted() {
    const route = useRoute();
    fetch("https://post-it.epi-bluelock.bj/notes/" + route.params.id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (data) => ((this.note = data), (this.description = data.content[0]))
      );
  },
};
</script>
