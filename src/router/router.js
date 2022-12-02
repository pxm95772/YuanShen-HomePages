import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: "/",
            component: () => import("../pages/Home")
        },
        {
            path: "/xingwen",
            component: () => import("../pages/xingwen")
        },
        {
            path: '/jiaose',
            component: () => import("../pages/jiaose"),
						redirect: "/jiaose/mengde",
            children: [{
                    path: "mengde",
                    component: () => import("../pages/jiaose/Mengde")
                },
                {
                    path: "liyue",
                    component: () => import("../pages/jiaose/Liyue")
                },
                {
                    path: "daoqi",
                    component: () => import("../pages/jiaose/Daoqi")
                },
                {
                    path: "xumi",
                    component: () => import("../pages/jiaose/Xumi")
                },
            ]
        },
        {
            path: '/shijie',
            component: () => import("../pages/shijie")
        },
        {
            path: '/manhua',
            component: () => import("../pages/manhua")
        },
        {
            path: '/shequ',
            component: () => import("../pages/shequ")
        }
    ]
});

export default router;