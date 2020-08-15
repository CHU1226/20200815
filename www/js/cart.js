var vm = new Vue({
    el: "#app",
    data: {
        products: [
            {
                id: '1',
                name: '有機土雞蛋',
                price: 150,
                content: '蛋殼厚實較不易破、蛋白及蛋黃扎實、維生素含量較一般市售雞蛋高。經過嚴格把關，賣出的都是最精緻健康的雞蛋。',
                thumb: "img/product1.png",
                amount: 0,
                amountShow: 1,
                slogan: "img/shop-slogan.png",
                idName: 'tab1',
            },
            {
                id: '3',
                name: '嚴選國產牛',
                price: 599,
                content: '嚴選國產牛肉，取自牛隻的後腿近臀部的一塊肌肉，肉質風味佳，鮮甜滋味最能展現台灣牛肉的鮮Q嫩。',
                thumb: "img/product2.png",
                amount: 0,
                amountShow: 1,
                slogan: "img/shop-slogan.png",
                idName: 'tab2',
            },
            {
                id: '3',
                name: '沁涼水果茶',
                price: 45,
                content: '柚子、檸檬、蘋果等多種水果組合而成，形成獨特的風味，健康營養又不會太甜，原料皆為本農場自種，可放心飲用。',
                thumb: "img/product3.png",
                amount: 0,
                amountShow: 1,
                slogan: "img/shop-slogan.png",
                idName: 'tab3',
            },
            {
                id: '4',
                name: '新鮮萵苣',
                price: 89,
                content: '低熱量，不苦澀，可搭配本商場的水果調製成個人口味的沙拉，無毒無農，不泡水，呈現真實的樣貌。',
                thumb: "img/product4.png",
                amount: 0,
                amountShow: 1,
                slogan: "img/shop-slogan.png",
                idName: 'tab4',
            },
            {
                id: '5',
                name: '厚德鮮乳',
                price: 80,
                content: '來自健康的乳牛與舒適的環境，堅持天然無調整，不添加、不抽取、100%優質生乳加工，自然營養的完美口感、香醇滑順的好滋味。',
                thumb: "img/product5.png",
                amount: 0,
                amountShow: 1,
                slogan: "img/shop-slogan.png",
                idName: 'tab5',
            },
            {
                id: '6',
                name: '現採柳橙',
                price: 430,
                content: '養殖期間不使用農藥，現採現賣，無須擔心農藥殘留，果實飽滿豐富，甜味相比一般市上的更甜，是各個年齡層都愛的水果。',
                thumb: "img/product6.png",
                amount: 0,
                amountShow: 1,
                slogan: "img/shop-slogan.png",
                idName: 'tab6',
            },
        ]
    },
    methods: {
        minusOne (product) {
            product.amountShow--
            product.amountShow = (product.amountShow < 1) ? 1 : product.amountShow
        },
        addOne (product) {
            product.amountShow++
            product.amountShow = (product.amountShow > 9) ? 9 : product.amountShow
        },
        addToCart (product) {
            product.amount += product.amountShow
        },
        remove (product) {
            product.amount = 0
        },
    },
    computed: {
        productsInCart () {
            return this.products
                .filter(p => p.amount)
                .map(p => {
                    p.sum = p.amount * p.price
                    return p
                })
        },
        total () {
            return this.productsInCart
                .reduce((sum, p) => (sum + p.sum), 0)
        }
    }
})