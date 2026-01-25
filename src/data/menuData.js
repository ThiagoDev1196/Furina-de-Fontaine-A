const base = import.meta.env.BASE_URL

export const menuItems =[
    {
        name:"Americano",
        image: `${base}/menu-coffee-pictures/americano.png`,
        alt: "Americano in a cup on a table",
        description:"A classic black coffee made with a shot of espresso and hot water.",
        price: "2.50",
    },

    {
        name:"Cappuccino",
        image: `${base}/menu-coffee-pictures/capuccino.png`,
        alt: "Cappuccino in a cup on a table",
        description:"A rich and creamy coffee drink made with espresso and steamed milk.",
        price: "3.00",
    },
    
    {
        name:"Latte",
        image: `${base}/menu-coffee-pictures/latte.png`,
        alt: "Latte in a cup on a table",
        description:"Equal parts espresso, steamed milk, and foam, offering a balanced and frothy texture.",
        price: "4.00",
    },

    {
        name:"Espresso",
        image: `${base}/menu-coffee-pictures/espesso.png`,
        alt: "Espresso in a cup on a table",
        description:"A strong and concentrated shot of pure espresso.",
        price: "2.50",
    },

    {
        name:"Cortado",
        image: `${base}/menu-coffee-pictures/cortado.png`,
        alt: "Cortado in a cup on a table",
        description:"Espresso cut with a small amount of steamed milk for a bold yet balanced flavor.",
        price: "3.00",
    },

    {
        name:"Iced Coffee",
        image: `${base}/menu-coffee-pictures/helado.png`,
        alt: "Iced Coffee in a cup on a table",
        description:"Chilled coffee served over ice with a touch of vanilla syrup.",
        price: "3.50",
    }

]