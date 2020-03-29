const data = [
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