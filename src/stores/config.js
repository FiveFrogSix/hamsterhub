import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
    state: () => {
        return {
            checkEmpty: new Array(undefined, null, "", "undefined", "null"),
            swiper: {
                breakpoints: {
                    '576': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '768': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    '992': {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
                paginations: {
                    clickable: true,
                },
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                }
            },
            navItems: [
                { url: "/", name: "Hub", className: "Hub", idRef: "menuCustom0",active: true},
                { url: "/apps", name: "3D", className: "apps", idRef: "menuCustom1",  active: false},
                { url: "/roblox", name: "Roblox", className: "roblox", idRef: "menuCustom2",  active: false},
                { url: "/python", name: "Python",className: "python", idRef: "menuCustom3",   active: false},
                { url: "/extra", name: "Extra",className: "Extra", idRef: "menuCustom4",   active: false},
            ],
            pageColor: {
                "hub": "#FFE056",
                "roblox": "#FF7538",
                "apps": "#0089D4",
                "python": "#8DFFA6",
                "extra": "#60CFFF",
            },
            flip: true
        }
    },
    actions: {
        updateActiveNavItem(navItem){
            const state = this
            state.navItems.map( (item) => {
                item.active = false
                if( item.name === navItem.name) item.active = true
                return item
            })
        },
        transitionFlip(){
            const state = this
            state.flip = false
            setTimeout(() => {
                state.flip = true
            }, 300);
        }
    },
    getters: {
       getSwiper: (state) => state.swiper,
       getNavItems: (state) => state.navItems,
       getPageColor: (state) => state.pageColor,
       getFlip: (state) => state.flip,
    }
})
