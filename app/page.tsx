import ExternalLayout from './(components)/External-Layout'
import Intro from './(components)/intro'
import Reviews from './(components)/reviews'
import Corevalues from './(components)/corevalues'
import Productcard from './(components)/productcard'

export default function Home() {
  const review = [
    {
      id: 1,
      imageUrl: "https://res.cloudinary.com/ilove2support/image/upload/v1699863110/client-3_utvld0.jpg",
      name: "Takar Bowa",
      reviewText: "The Pizzon app makes ordering a breeze! User-friendly, customizable options, and lightning-fast delivery. I appreciate the commitment to quality and the passion for pizza evident in every order."
    },
    {
      id: 2,
      imageUrl: "https://res.cloudinary.com/ilove2support/image/upload/v1699863109/client-2_sjfy2z.jpg",
      name: "Kelvin Arnold",
      reviewText: "Pizzon caters to all taste buds! Their diverse menu offers something for everyone. The vegetarian options are just as flavorful as the meaty ones. It's a pizza paradise!"
    },
    {
      id: 3,
      imageUrl: "https://res.cloudinary.com/ilove2support/image/upload/v1699863110/client-3_utvld0.jpg",
      name: "Salma Asha",
      reviewText: "Ordered from Pizzon for the first time, and I'm hooked! The crust was perfection, toppings were generous, and the delivery was quick. Already planning my next order!"
    },
    {
      id: 4,
      imageUrl: "https://res.cloudinary.com/ilove2support/image/upload/v1699863109/client-4_yqf75b.jpg",
      name: "Mujeeb Asmal",
      reviewText: "Ordered Pizzon for our office party, and it was a hit! The team loved the freshness of the ingredients, and the pizzas disappeared within minutes. Pizzon, you've earned a permanent spot in our office celebrations!"
    }
  ]

  return (
    <div className="max-w-[1440px] mx-auto">
      <ExternalLayout>
        <Intro />
        <Productcard />
        <Corevalues />
        <Reviews review ={review} />
      </ExternalLayout>
    </div>
  )
}
