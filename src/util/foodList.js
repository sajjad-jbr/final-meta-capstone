import {faker} from '@faker-js/faker'
const getNewFoodImage = ()=>{
    return faker.image.food()
}
export const getFoodsLIst = (n=10)=>{
    let res = []
    for (let i =0;i<n;i++){
        res.push({
            name:faker.commerce.productName(),
            price:faker.commerce.price(),
            image:getNewFoodImage(),
            description:faker.lorem.sentences(1),
        })
    }

    return res
}
