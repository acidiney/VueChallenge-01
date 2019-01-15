import Vue from "vue";
import Router from "vue-router";
import Splash from "./views/Splash.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "splash",
      component: Splash
    },
    {
      path: "/auth",
      name: "Auth",
      children: [
        { path: "", redirect: { name: "Login" } },
        {
          path: "login",
          name: "Login",
          component: () => import("./components/Login.vue")
        },
        {
          path: "register",
          name: "Register",
          component: () => import("./components/Register.vue")
        }
      ],
      component: () => import("./views/Auth.vue")
    }
  ]
});
