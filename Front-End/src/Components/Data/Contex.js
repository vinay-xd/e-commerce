import { createContext } from "react";
import * as Images from '../../assets/Images/img.js'


export const MyContext = createContext()

export const Products = [
    {   id: 1,
        imgurl: [Images.Gamepad],
        title: "HAVIT HV-G92 Gamepad",
        description: '',
        price: '$120',
        disc: '-40%',
        rating: '5',
        review: '88',
        discount: true
    },
    {
        id: 2,
        imgurl: [Images.GamingKeyboard],
        title: "AK-900 Wired Keyboard",
        description: '',
        price: '$960',
        disc: '-35%',
        rating: '4',
        review: '76',
        discount: true
    },
    {
        id: 3,
        imgurl: [Images.Monitor],
        title: "IPS LCD Gaming Monitor",
        description: '',
        price: '$370',
        disc: '-30%',
        rating: '5',
        review: '99',
        discount: true
    },
    {
        id: 4,
        imgurl: [Images.CusinChair],
        title: "S-Series Comfort Chair ",
        description: '',
        price: '$375',
        disc: '-25%',
        rating: '4.5',
        review: '99',
        discount: true
    },
    {
        id: 5,
        imgurl: [Images.redCoat],
        title: "The north coat",
        description: '',
        price: '$260',
        rating: '5',
        review: '65',
        BestSelling: true
    },
    {
        id: 6,
        imgurl: [Images.GucciBag],
        title: "Gucci duffle bag",
        description: '',
        price: '$960',
        rating: '4.5',
        review: '65',
        BestSelling: true
    },
    {
        id: 7,
        imgurl: [Images.WaterCooler],
        title: "RGB liquid CPU Cooler",
        description: '',
        price: '$170',
        rating: '4.5',
        review: '65',
        BestSelling: true
    },
    {
        id: 8,
        imgurl: [Images.Bookself],
        title: "Small BookSelf",
        description: '',
        price: '$360',
        rating: '5',
        review: '65',
        BestSelling: true
    },
    {
        id: 9,
        imgurl: [Images.DogFood],
        title: "Breed Dry Dog Food",
        discription: '',
        price: '$100',
        rating: '3',
        review: '35'
    },
    {
        id: 10,
        imgurl: [Images.DigitalCamera],
        title: "CANON EOS DSLR Camera",
        description: '',
        price: '$360',
        rating: '4',
        review: '95'
    },
    {
        id: 11,
        imgurl: [Images.GamingLaptop],
        title: "ASUS FHD Gaming Laptop",
        description: '',
        price: '$700',
        rating: '5',
        review: '325'
    },
    {
        id: 12,
        imgurl: [Images.Cream],
        title: "Curology Product Set ",
        description: '',
        price: '$500',
        rating: '4',
        review: '145'
    },
    {
        id: 13,
        imgurl: [Images.ToyCar],
        title: "Kids Electric Car",
        description: '',
        price: '$960',
        disc: 'new',
        rating: '5',
        review: '65',
        discount: true
    },
    {
        id: 14,
        imgurl: [Images.YellowShoes],
        title: "Jr. Zoom Soccer Cleats",
        description: '',
        price: '$1160',
        rating: '5',
        review: '35'
    },
    {
        id: 15,
        imgurl: [Images.Game],
        title: "GP11 Shooter USB Gamepad",
        description: '',
        price: '$660',
        disc: 'new',
        rating: '4.5',
        review: '55',
        discount: true
    },
    {
        id: 16,
        imgurl: [Images.GreenJacket],
        title: "Quilted Satin Jacket",
        description: '',
        price: '$660',
        rating: '4.5',
        review: '55',
    },
    {
        id: 17,
        imgurl: [Images.Gamepad1, Images.Gamepad2, Images.Gamepad3, Images.Gamepad4, Images.Gamepad5],
        title: "Quilted Satin Jacket",
        description: '',
        price: '$660',
        rating: '4.5',
        review: '55',
    }

]