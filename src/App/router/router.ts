import { createRouter, createWebHistory } from "vue-router";
import BoardsPage from "../pages/BoardsPage/BoardsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: BoardsPage,
    },
    {
      path: "/boards/:boardId",
      name: "board-page",
      // lazy loaded component
      component: () => import("../pages/BoardPage/BoardPage.vue"),
    },
    {
      path: "/boards/favorite",
      name: "favorite-boards",
      component: () =>
        import("../pages/FavoriteBoardsPage/FavoriteBoardsPage.vue"),
    },
  ],
});

export default router;
