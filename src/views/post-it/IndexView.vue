<template>
  <body class="min-h-screen p-8 font-poppins">
    <div class="max-w-6xl mx-auto">
      <form class="mb-12">
        <button
          @click="showAlerte"
          class="bg-black text-white p-2 rounded-full px-5"
        >
          Add new post +
        </button>
      </form>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <div v-for="note in allnotes" :key="note._id">
          <div class="rounded post-it">
            <div
              class="w-full h-48 flex flex-col justify-between dark:border-gray-700 rounded-lg mb-6 py-5 px-4"
              v-bind:class="addColor()"
            >
              <div class="space-y-5">
                <h4
                  class="flex justify-start text-black text-xl font-bold mb-3 truncate"
                >
                  {{ note.title }}
                </h4>
                <p class="truncate text-black text-xl line-champ-1">
                  {{ note.content[0] }}
                </p>
              </div>
              <div>
                <div
                  class="flex items-center justify-between text-gray-800 dark:text-gray-100"
                >
                  <p class="text-sm text-black">
                    {{
                      new Date(note.createdAt)
                        .toString()
                        .split("G")[0]
                        .substring(0, 15)
                    }}
                  </p>
                  <div class="flex space-x-2">
                    <router-link
                      :to="{ name: 'notes', params: { id: note._id } }"
                      class="text-black"
                    >
                      <button
                        class="w-8 h-8 rounded-full bg-slate-800 dark:bg-slate-100 dark:text-slate-800 flex items-center justify-center text-center focus:outline-none"
                        aria-label="edit note"
                        role="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </button>
                    </router-link>
                    <button
                      v-on:click="deletePosts(note._id)"
                      class="w-8 h-8 rounded-full bg-red-800 dark:bg-red-100 dark:text-red-800 flex items-center justify-center text-center focus:outline-none"
                      aria-label="edit note"
                      role="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                    <router-link
                      :to="{ name: 'update', params: { id: note._id } }"
                      class="text-black"
                    >
                      <button
                        class="w-8 h-8 rounded-full bg-slate-800 dark:bg-slate-100 dark:text-slate-800 flex items-center justify-center text-center focus:outline-none"
                        aria-label="edit note"
                        role="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: function () {
    return {
      bg: ["bg-yellow-100", "bg-green-100", "bg-cyan-100", "bg-red-100"],
    };
  },
  computed: {
    ...mapGetters(["allnotes"]),
  },
  methods: {
    ...mapActions(["fetchData"]),
    async deletePosts(id) {
      await fetch("https://post-it.epi-bluelock.bj/notes/" + id, {
        method: "DELETE",
      });
      this.$store.dispatch("fetchData");
    },

    addColor() {
      let color = this.bg[Math.floor(Math.random() * this.bg.length)];
      return color;
    },
    showAlerte() {
      this.$router.push("create");
    },
  },
  /*mounted() {
    let colors = ["red", "yellow", "green"];
    let place = Math.floor(Math.random() * colors.length);
    this.bg = place;
    //console.log(colors[place]);
  },*/
  created() {
    this.$store.dispatch("fetchData");
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
