import { v4 as uuidv4 } from 'uuid';
import iphone3 from '../image/iphone3.png';
import hp3 from '../image/hp3.png'
import watch from '../image/watch1.png'
import key from '../image/key1.png'
import dell from '../image/laptop2.png'
import eye from '../image/eyerphone4.png'
import iphone from '../image/iphone1.png'
import mouse from '../image/mouse1.png'


const Products =[
    {
        id: uuidv4(),
        productName:'Iphone14',
        price:1000.0,
        productImage: iphone3,
        quantity: 1,        
    },
    {
        id: uuidv4(),
        productName:'Hp Laptop',
        price:700.0,
        productImage: hp3,
        quantity: 1,
        
    },
    {
        id: uuidv4(),
        productName:'I Watch',
        price:300.0,
        productImage: watch,
        quantity: 1,
        
    },
    {
        id: uuidv4(),
        productName:'RGB Keyboard',
        price:200.0,
        productImage: key,
        quantity: 1,
    },
    {
        id: uuidv4(),
        productName:'Dell Laptop',
        price:700.00,
        productImage: dell,
        quantity: 1,        
    },
    {
        id: uuidv4(),
        productName:'Hp Laptop',
        price:700.0,
        productImage: hp3,
        quantity: 1,        
    },
    {
        id: uuidv4(),
        productName:'EyerPhone',
        price:100.00,
        productImage: eye,
        quantity: 1,        
    },{
        id: uuidv4(),
        productName:'IPhone 12 Pro',
        price:900.0,
        productImage: iphone,
        quantity: 1,        
    },
    {
        id: uuidv4(),
        productName:'RGB Mouse',
        price:150.0,
        productImage: mouse,
        quantity: 1,        
    },
    {
        id: uuidv4(),
        productName:'Iphone14',
        price:1000.0,
        productImage: iphone3,
        quantity: 1,        
    },
]

export default Products;