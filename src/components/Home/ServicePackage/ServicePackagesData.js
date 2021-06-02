import { faCar, faCarAlt, faCarSide, faShuttleVan, faTaxi, faTruckPickup } from "@fortawesome/free-solid-svg-icons";

export const servicePackageIcons = [
    [faCar, 'Sedan', '#FFFF00', 'rgba(76,175,80,.3)'],
    [faCarAlt, 'MiniVan', '#FF00FF', 'rgba(255, 0, 255,.3)'],
    [faCarSide, 'HatchBack', '#00FFFF', 'rgba(0, 255, 255,.3)'],
    [faShuttleVan, 'StationWagon', '#800000', 'rgba(255, 0, 255,.3)'],
    [faTruckPickup, 'PickUp', '#00FF00', 'rgba(255, 0, 255,.3)'],
    [faTaxi, 'CrossOver', '#00008b', 'rgba(255, 0, 255,.3)']
]




export const servicePackages = [
    {
        packageType: 'Sedan',
        packagePrice: 280,
        image: "https://i.ibb.co/VgycG28/By-my-car-cuate-2.png",
        color: '#FFFF00',//yellow
        packageDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qui, mollitia magnam possimus nam esse vero consectetur quis corporis libero dolor provident, eaque architecto sit obcaecati ratione aperiam voluptas! Eveniet!'

    },
    {
        packageType: 'MiniVan',
        packagePrice: 320,
        color: '#FF00FF',//magenta
        image: "https://i.ibb.co/j5yshdt/By-my-car-cuate-1.png",
        packageDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qui, mollitia magnam possimus nam esse vero consectetur quis corporis libero dolor provident, eaque architecto sit obcaecati ratione aperiam voluptas! Eveniet!'

    },
    {
        packageType: 'HatchBack',
        packagePrice: 410,
        color: '#00FFFF',//cyan
        image: "https://i.ibb.co/g7p7qhz/By-my-car-cuate-2.png",
        packageDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qui, mollitia magnam possimus nam esse vero consectetur quis corporis libero dolor provident, eaque architecto sit obcaecati ratione aperiam voluptas! Eveniet!'

    },
    {
        packageType: 'StationWagon',
        packagePrice: 380,
        image: "https://i.ibb.co/8Ktz2BM/By-my-car-cuate-3.png",
        color: '#800000',//maroon
        packageDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qui, mollitia magnam possimus nam esse vero consectetur quis corporis libero dolor provident, eaque architecto sit obcaecati ratione aperiam voluptas! Eveniet!'

    },
    {
        packageType: 'PickUp',
        packagePrice: 195,
        image: "https://i.ibb.co/wLwJMYT/By-my-car-cuate-4.png",
        color: '#00FF00',//green
        packageDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qui, mollitia magnam possimus nam esse vero consectetur quis corporis libero dolor provident, eaque architecto sit obcaecati ratione aperiam voluptas! Eveniet!'

    },
    {
        packageType: 'CrossOver',
        packagePrice: 330,
        image: "https://i.ibb.co/6gf9V7M/By-my-car-cuate-red.png",
        color: '#00008b',//darkBlue
        packageDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qui, mollitia magnam possimus nam esse vero consectetur quis corporis libero dolor provident, eaque architecto sit obcaecati ratione aperiam voluptas! Eveniet!'

    }
]