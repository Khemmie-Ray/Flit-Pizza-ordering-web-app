import React from 'react'
import ExternalLayout from '@/app/(components)/External-Layout';
import Image from 'next/image';

const BlogDetails = ({params} : {params: {blogid : string}}) => {

    interface Blog {
        id: number;
        intro: string;
        main: string;
        conclusion: string;
        title: string;
        date: string;
        img: string;
    }

    const blog:Blog[] = [
        {
            id: 1,
            title: "Unlock the Flavors: A Journey Through Our Pizza Toppings",
            intro: "Craving a pizza that bursts with flavor? Look no further!  Our pizza ordering web application offers a delectable array of toppings that will take your taste buds on a culinary adventure. From classic favorites to unique combinations, we've got something to suit every palate.",
            main: "Our menu boasts a wide selection of premium toppings, including fresh vegetables, savory meats, and mouthwatering cheeses. Dive into the rich textures of our handpicked ingredients, carefully curated to elevate your pizza experience. Whether you're a fan of the traditional Margherita or eager to explore bold new flavors like BBQ Chicken or Mediterranean Veggie, our pizza toppings are sure to leave you craving for more. With our user-friendly interface, customizing your pizza is a breeze.",
            conclusion: "Experiment with different combinations, discover your perfect flavor profile, and create a pizza that's uniquely yours. At our pizza ordering web application, we believe that every bite should be an adventure – so why settle for ordinary when you can unlock a world of flavors? Embark on a taste journey with us today and savor the extraordinary!",
            date: "11/01",
            img: "https://res.cloudinary.com/ilove2support/image/upload/v1696766114/uploads/qensxeruxhb3o2d9txbb.png"
        },
        {
            id: 2,
            title: "Pizza Anytime, Anywhere: The Convenience of Our Ordering Apps",
            intro: "Craving pizza but don't feel like leaving the house? No worries! With our mobile ordering app, delicious pizza is just a few taps away, bringing convenience to your fingertips.",
            main: "Whether you're at home, in the office, or on the go, satisfy your pizza cravings anytime, anywhere. Our user-friendly app ensures a seamless ordering experience. Browse through our menu, customize your pizza, and complete your order with a few simple steps. Track your delivery in real-time, so you know exactly when to expect your piping hot pizza at your doorstep. Forget about waiting in long lines or dealing with complicated ordering processes – we've made it easy for you.",
            conclusion: "Join the ranks of pizza lovers who enjoy the convenience of our mobile ordering app. Download it today and elevate your pizza experience with just a tap! Because when it comes to pizza, we believe you should have it your way, on your terms.",
            date: "26/12",
            img: "https://res.cloudinary.com/ilove2support/image/upload/v1680188549/Front-end/15-essentials-for-a-developer-desk-2794-1631159590254_roe2vp.jpg"
        },
        {
            id: 3,
            title: "The Ultimate Pizza Experience: Quality Ingredients, Exceptional Taste",
            intro: "At our pizza ordering web application, we take pride in delivering the ultimate pizza experience by prioritizing quality ingredients and exceptional taste.",
            main: "From the moment you place your order to the first heavenly bite, we ensure that every step of the process reflects our commitment to excellence.Our dough is freshly made, creating a perfect foundation for a crispy yet chewy crust that holds up to the weight of our generous toppings. We source the finest tomatoes for our sauce and use a blend of premium cheeses that melt into gooey perfection. The result? A pizza that not only looks amazing but also delivers an explosion of flavors with each bite. We understand the importance of variety, catering to diverse tastes with our extensive menu.",
            conclusion: "Whether you're a fan of the classics or prefer bold and adventurous combinations, our pizza ordering web application has something for everyone. Elevate your pizza experience with us – where quality meets taste in every slice. Indulge in a pizza crafted with care and dedication. Your taste buds deserve it!",
            date: "15/12",
            img: "https://res.cloudinary.com/ilove2support/image/upload/v1704465911/uploads/xk7ufrseoz01ez81ivpg.png"
        },
    ]

    const details:any = blog.find(item => item.id === parseInt(params.blogid, 10))

  return (
    <div className='max-w-[1440px] mx-auto'>
        <ExternalLayout>
    <div className='lg:w-[60%] md:w-[60%] w-[100%] mx-auto my-8 p-6' >
    <p className='font-[700] text-[1.5rem] bg-[rgba(0,0,0,0.8)] p-2 rounded-full px-6 text-white mb-8'> {details.date}</p>
    <div>
    <Image 
        src={details.img}
        alt=''
        width={250}
        height={250}
        className='lg:float-left md:float-left lg:m-[10px] md:m-[10px] mb-6'
    />
    </div>
    <div className='lg:text-justify md:text-justify'>
        <h3 className='font-[700] lg:text-[1.8rem] text-[1.4rem]'>{details.title}</h3>
        <p className='my-4 leading-8'>{details.intro}</p>
        <p className='my-4 leading-8'>{details.main}</p>
        <p className='my-4 leading-8'>{details.conclusion}</p>
    </div>
</div>
</ExternalLayout>
</div>
  )
}

export default BlogDetails