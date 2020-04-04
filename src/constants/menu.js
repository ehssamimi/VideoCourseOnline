const data = [
    {
        id: "access_level",
        icon: "iconsminds-air-balloon-1",
        label: "AccessLevel",
        to: "/access-level",
        subs: [
            {
                icon: "simple-icon-paper-plane",
                label: "permission",
                to: "/access-level/permission",
                subs: [
                    {
                        icon: "simple-icon-paper-plane",
                        label: "permission Show",
                        to: "/access-level/permission/show"
                    },
                    {
                        icon: "simple-icon-paper-plane",
                        label: "permission Create",
                        to: "/access-level/permission/create"
                    }
                ]
            },
            {
                icon: "simple-icon-paper-plane",
                label: "Role",
                to: "/access-level/role",
                subs: [
                    {
                        icon: "simple-icon-paper-plane",
                        label: "role Show",
                        to: "/access-level/role/show"
                    },
                    {
                        icon: "simple-icon-paper-plane",
                        label: "role Create",
                        to: "/access-level/role/create/:Id?"
                    }
                ]
            },
            {
                icon: "simple-icon-paper-plane",
                label: "user role",
                to: "/access-level/user-role",
                subs: [
                    {
                        icon: "simple-icon-paper-plane",
                        label: "user role Show",
                        to: "/access-level/user-role/show"
                    },
                    {
                        icon: "simple-icon-paper-plane",
                        label: "user role Create",
                        to: "/access-level/user-role/create/:Id?"
                    }
                ]
            },
            {
                icon: "simple-icon-paper-plane",
                label: "trusted service",
                to: "/access-level/trusted_service",
                subs: [
                    {
                        icon: "simple-icon-paper-plane",
                        label: "trusted service Show",
                        to: "/access-level/trusted_service/show"
                    },
                    {
                        icon: "simple-icon-paper-plane",
                        label: "trusted serviceCreate",
                        to: "/access-level/trusted_service/create/:Id?"
                    }
                ]
            }
        ]
    },
    {
        id: "gogo",
        icon: "iconsminds-air-balloon-1",
        label: "menu.gogo",
        to: "/app/gogo",
        subs: [
            {
                icon: "simple-icon-paper-plane",
                label: "menu.start",
                to: "/app/gogo/start"
            }
        ]
    },
    {
        id: "upload",
        icon: "iconsminds-air-balloon-1",
        label: "Upload",
        to: "/upload",
        subs: [
            {
                icon: "simple-icon-paper-plane",
                label: "menu.start",
                to: "/upload/upload-video"
            }
        ]
    },
    {
        id: "secondmenu",
        icon: "iconsminds-three-arrow-fork",
        label: "menu.second-menu",
        to: "/app/second-menu",
        subs: [
            {
                icon: "simple-icon-paper-plane",
                label: "menu.second",
                to: "/app/second-menu/second"
            }
        ]
    },
    {
        id: "blankpage",
        icon: "iconsminds-bucket",
        label: "menu.blank-page",
        to: "/app/blank-page"
    },
    {
        id: "docs",
        icon: "iconsminds-library",
        label: "menu.docs",
        to: "https://gogo-react-docs.coloredstrategies.com/",
        newWindow: true
    }
];
export default data;
