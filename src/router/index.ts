import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import KanbanBoard from "../components/KanbanBoard.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: KanbanBoard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
