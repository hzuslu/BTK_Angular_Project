import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  filteredList: any = [];

  boxList: any = [];

  itemCount: number = 0;
  private itemCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public itemCount$: Observable<number> = this.itemCountSubject.asObservable();

  private filteredListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  filteredList$: Observable<any[]> = this.filteredListSubject.asObservable();

  hats = [
    {
      title: "Spelling Bee Hat",
      image: "https://store.nytimes.com/cdn/shop/files/spelling-bee-hat-1_ce8ee70e-77e5-4a96-b523-cfbfaab82007_1024x1024.jpg?v=1694459871",
      rating: 4.8,
      orders: 310,
      price: 29.99,
      discountedPrice: 39.99,
      shipping: "Free shipping",
      description: "Stay cool and comfortable with the Spelling Bee Hat. This hat is perfect for outdoor activities with its lightweight design and breathable fabric. Whether you're on a hike or enjoying a casual day out, it offers sun protection and style in one.",
      category: "hat"
    },
    {
      title: "Race Hat",
      image: "https://www.headsweats.com/cdn/shop/products/7700-202_RACEHAT_BLACKKNIT.RF_88ca008d-c9d5-4dc3-bb25-a6c9b868f84d.jpg?v=1685552813",
      rating: 4.6,
      orders: 280,
      price: 24.99,
      discountedPrice: 34.99,
      shipping: "Free shipping",
      description: "Get ready for any race with the Race Hat. Engineered for performance, it features moisture-wicking fabric and a comfortable fit. Whether you're running a marathon or hitting the gym, this hat keeps you cool and focused on your goals.",
      category: "hat"
    },
    {
      title: "Chill Cap",
      image: "https://l2brands.com/cdn/shop/files/BLANKCHILL_CHILLMarineBlueP_133046151290201977_1024x1024.png?v=1714415537",
      rating: 4.7,
      orders: 320,
      price: 19.99,
      discountedPrice: 29.99,
      shipping: "Free shipping",
      description: "Relax in style with the Chill Cap. Designed for casual comfort, it features a relaxed fit and soft cotton fabric. Whether you're hanging out with friends or running errands, this cap adds a laid-back vibe to your outfit.",
      category: "hat"
    },
    {
      title: "Outdoor Sun Hat",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhwMjnl3k1pSF0DUyN0SwtdPcVJBn2P0NqQ&s",
      rating: 4.5,
      orders: 250,
      price: 39.99,
      discountedPrice: 49.99,
      shipping: "Free shipping",
      description: "Enjoy the outdoors with the Outdoor Sun Hat. This hat offers UPF 50+ protection against the sun's rays and features a wide brim for added coverage. Whether you're gardening or lounging by the pool, it's a must-have for sunny days.",
      category: "hat"
    },
    {
      title: "Columbia Booney Hat",
      image: "https://img-phantomcolumbia.mncdn.com/mnresize/1536/-/img/assets/base/originals/CU0129_464-0-240315071100865.jpg",
      rating: 4.9,
      orders: 340,
      price: 49.99,
      shipping: "Free shipping",
      description: "Explore the great outdoors with the Columbia Booney Hat. Designed for adventurers, it offers superior sun protection and features an adjustable chin strap for a secure fit. Whether you're hiking or fishing, this hat keeps you comfortable and protected.",
      category: "hat"
    }
  ];

  handbags = [
    {
      title: "Yellow Women's Bag",
      image: "https://img2-hotic.mncdn.com/Content/Images/Thumbs/3496898_sari-kadin-canta-185844.jpeg",
      rating: 4.5,
      orders: 154,
      price: 49.99,
      discountedPrice: 69.99,
      shipping: "Free shipping",
      description: "Elevate your style with this vibrant Yellow Women's Bag. It features a spacious interior with multiple compartments for your essentials. The durable material and elegant design make it perfect for both casual outings and special occasions.",
      category: "handbag"
    },
    {
      title: "Light Blue Women's Bag",
      image: "https://img2-hotic.mncdn.com/Content/Images/Thumbs/3484199_acik-mavi-kadin-canta-178585.jpeg",
      rating: 4.3,
      orders: 120,
      price: 39.99,
      discountedPrice: 59.99,
      shipping: "Free shipping",
      description: "Add a touch of sophistication to your ensemble with the Light Blue Women's Bag. This bag combines practicality with elegance, featuring a sleek design and ample storage space. Ideal for daily use or evening events, it's a must-have accessory for any wardrobe.",
      category: "handbag"
    },
    {
      title: "Black Leather Handbag",
      image: "https://m.media-amazon.com/images/I/415pWLoAieL._AC_SY780_.jpg",
      rating: 4.7,
      orders: 209,
      price: 89.99,
      shipping: "Free shipping",
      description: "Discover timeless elegance with the Black Leather Handbag. Crafted from high-quality leather, this bag exudes luxury and sophistication. It features a spacious interior, versatile design, and sturdy handles. Perfect for everyday use or special occasions.",
      category: "handbag"
    },
    {
      title: "Beige Women's Shoulder Bag",
      image: "https://productimages.hepsiburada.net/s/394/375-500/110000418410853.jpg",
      rating: 4.6,
      orders: 185,
      price: 79.99,
      discountedPrice: 99.99,
      shipping: "Free shipping",
      description: "Stay organized and stylish with the Beige Women's Shoulder Bag. This bag offers a blend of functionality and fashion, featuring multiple compartments and a chic shoulder strap. Ideal for work or leisure, it complements any outfit with its classic beige tone.",
      category: "handbag"
    },
    {
      title: "Brown Leather Crossbody Bag",
      image: "https://productimages.hepsiburada.net/s/217/375-500/110000195518065.jpg",
      rating: 4.4,
      orders: 150,
      price: 69.99,
      discountedPrice: 89.99,
      shipping: "Free shipping",
      description: "Upgrade your accessories collection with the Brown Leather Crossbody Bag. Crafted from premium leather, this bag offers durability and style. It features an adjustable crossbody strap and a compact design that's perfect for carrying essentials on the go.",
      category: "handbag"
    }
  ];

  jackets = [
    {
      title: "Rucksack Backpack Jeans",
      image: "https://static.zara.net/assets/public/47e8/6fa9/9f8248e8aa80/20119c119825/06518350401-e1/06518350401-e1.jpg?ts=1707295816730",
      rating: 4.5,
      orders: 154,
      price: 34.50,
      discountedPrice: 49.99,
      shipping: "Free shipping",
      description: "This versatile Rucksack Backpack Jeans combines the rugged durability of denim with the convenience of a backpack. Perfect for daily use, it features multiple compartments for easy organization and adjustable straps for a comfortable fit. Whether you're heading to work, school, or a weekend adventure, this backpack is a stylish and practical choice.",
      category: "jacket"
    },
    {
      title: "Winter Jacket for Men and Women",
      image: "https://i0.shbdn.com/photos/29/52/11/x5_1151295211odb.jpg",
      rating: 4.5,
      orders: 154,
      price: 140,
      discountedPrice: 190,
      shipping: "Free shipping",
      description: "Stay warm and stylish with our Winter Jacket for Men and Women. This jacket features a high-quality insulation that keeps you cozy in the coldest weather. The waterproof outer layer ensures you stay dry, while the modern design makes it a perfect addition to any winter wardrobe. Available in various sizes and colors.",
      category: "jacket"
    },
    {
      title: "Men's Lightweight Jacket",
      image: "https://004406.cdn.akinoncloud.com/products/2023/11/02/664966/638b79ff-a44f-422e-a620-1f7a15382b29_size350x525_quality90_cropCenter.jpg",
      rating: 4.2,
      orders: 98,
      price: 89.99,
      discountedPrice: 109.99,
      shipping: "Paid shipping",
      description: "Our Men's Lightweight Jacket is designed for those who need a stylish yet functional outer layer. It's perfect for spring and fall, offering protection from light rain and wind without the bulk of a heavy coat. The sleek design and neutral colors make it a versatile piece that can be dressed up or down.",
      category: "jacket"
    },
    {
      title: "Women's Parka Jacket",
      image: "https://floimages.mncdn.com/media/catalog/product/24-03/20/200866926-1-1710933552.jpg",
      rating: 4.7,
      orders: 209,
      price: 199.99,
      shipping: "Free shipping",
      description: "Our Women's Parka Jacket is the ultimate in cold-weather protection. Featuring a faux fur-lined hood, this parka provides warmth and style. The multiple pockets and adjustable waist make it as practical as it is fashionable. Perfect for city living or outdoor adventures, this jacket is a must-have for winter.",
      category: "jacket"
    },
    {
      title: "Men's Waterproof Ski Jacket",
      image: "https://static.zara.net/photos///2023/I/0/3/p/5854/557/800/2/w/750/5854557800_6_1_1.jpg?ts=1691059072436",
      rating: 4.3,
      orders: 120,
      price: 179.50,
      discountedPrice: 199.99,
      shipping: "Paid shipping",
      description: "Conquer the slopes with our Men's Waterproof Ski Jacket. Engineered for performance, this jacket features waterproof fabric, a breathable lining, and plenty of pockets for your essentials. The detachable hood and adjustable cuffs ensure a perfect fit, while the vibrant color options make sure you're visible on the mountain.",
      category: "jacket"
    }
  ];

  necklaces = [
    {
      title: "925 Ayar Zincirli Gemi Çapası Erkek Kolye - Silver",
      image: "https://percdn.com/f/343609/cG96WmFtNG0vcUp3ZUdFOVU1NG5hQT09/images/urunler/925-ayar-zincirli-gemi-capasi-erkek-kolye-silver-316669.webp",
      rating: 4.5,
      orders: 89,
      price: 79.99,
      discountedPrice: 99.99,
      shipping: "Free shipping",
      description: "Enhance your style with the 925 Sterling Silver Ship Anchor Pendant Necklace for Men. Crafted with attention to detail, this necklace features a durable link chain and a stylish ship anchor pendant. Perfect for casual or formal wear, it adds a touch of maritime charm to any outfit.",
      category: "necklace"
    },
    {
      title: "Silver Cross Pendant Necklace",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHaO_52jLnilXXcUZLRBXiAEeRF4Ghs_iDpg&s",
      rating: 4.8,
      orders: 105,
      price: 59.99,
      shipping: "Free shipping",
      description: "Express your faith with the Silver Cross Pendant Necklace. This necklace features a classic cross design crafted from high-quality sterling silver. It's perfect for everyday wear or as a meaningful gift for loved ones. Available in a sleek and timeless design.",
      category: "necklace"
    },
    {
      title: "Men's Stainless Steel Cuban Link Chain Necklace",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqWz64vQLzqnfytTb_FhM0rAglDPiqpvTnQ&s",
      rating: 4.6,
      orders: 78,
      price: 69.99,
      discountedPrice: 89.99,
      shipping: "Free shipping",
      description: "Add a bold statement to your look with the Men's Stainless Steel Cuban Link Chain Necklace. Crafted from durable stainless steel, this necklace features a chunky cuban link chain that's both stylish and masculine. Perfect for day or night, it complements any outfit effortlessly.",
      category: "necklace"
    },
    {
      title: "Yellow and White Color Men's Stainless Steel King Chain Necklace",
      image: "https://www.takidukkani.com/uploads/urunler/sari-beyaz-renk-erkek-celik-kral-zincir-kolye-ck11-22877.jpg",
      rating: 4.3,
      orders: 64,
      price: 49.99,
      shipping: "Free shipping",
      description: "Elevate your accessory collection with the Yellow and White Color Men's Stainless Steel King Chain Necklace. This necklace features a unique king chain design in yellow and white tones, crafted from high-quality stainless steel for durability and style. Perfect for adding a touch of sophistication to your ensemble.",
      category: "necklace"
    },
    {
      title: "Men's Silver Lion Head Pendant Necklace",
      image: "https://ideacdn.net/idea/dm/99/myassets/products/710/gumus-erkek-kolye-aslan-kafasi-gms-02.jpg?revision=1697143329",
      rating: 4.7,
      orders: 92,
      price: 89.99,
      shipping: "Free shipping",
      description: "Make a bold statement with the Men's Silver Lion Head Pendant Necklace. This necklace features a striking lion head pendant crafted from sterling silver, symbolizing strength and courage. It's perfect for men who appreciate unique and powerful accessories.",
      category: "necklace"
    }
  ];

  shoes = [
    {
      title: "Galaxy 6 Shoes - Black",
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/63c77c04dc6448548ccbae880189e107_9366/Galaxy_6_Shoes_Black_GW3848_01_standard.jpg",
      rating: 4.5,
      orders: 154,
      price: 89.99,
      discountedPrice: 109.99,
      shipping: "Free shipping",
      description: "Step up your running game with the Galaxy 6 Shoes. These shoes feature a lightweight mesh upper that provides breathability and support. The Cloudfoam midsole offers responsive cushioning, making them perfect for daily runs or gym workouts. Available in classic black color.",
      category: "shoe"
    },
    {
      title: "Nike Revolution 7 Road Running Shoes",
      image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/30d7afaa-343b-4439-b65d-bb544c65420e/revolution-7-road-running-shoes-dC34tK.png",
      rating: 4.7,
      orders: 209,
      price: 120,
      shipping: "Free shipping",
      description: "Hit the pavement with the Nike Revolution 7 Road Running Shoes. Designed for comfort and durability, these shoes feature a breathable mesh upper and a responsive foam midsole that cushions each step. Perfect for runners of all levels, from beginners to seasoned athletes.",
      category: "shoe"
    },
    {
      title: "Men's Jogflow 5001 Running Shoes - White/Blue/Red",
      image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/5153201/1.jpg?5028",
      rating: 4.2,
      orders: 98,
      price: 64.99,
      discountedPrice: 79.99,
      shipping: "Free shipping",
      description: "Run in style with the Men's Jogflow 5001 Running Shoes. These shoes feature a lightweight and breathable upper with a supportive heel counter for stability. The EVA midsole provides cushioning and comfort, while the rubber outsole offers traction on various surfaces. Available in white with blue and red accents.",
      category: "shoe"
    },
    {
      title: "Decathlon Kiprun Flow Men's Running Shoes - White/Blue/Red",
      image: "https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=452x452",
      rating: 4.6,
      orders: 120,
      price: 49.99,
      shipping: "Free shipping",
      description: "Discover the comfort and performance of the Decathlon Kiprun Flow Men's Running Shoes. These shoes are designed for regular runners looking for flexible and cushioned shoes for all distances. They feature K-Ring cushioning and an exclusive Kalensole foam for enhanced comfort and shock absorption.",
      category: "shoe"
    },
    {
      title: "New Balance Men's Fresh Foam 1080 V11 Running Shoes",
      image: "https://cdn.thewirecutter.com/wp-content/media/2024/05/runningshoesforyou-2048px-2251.jpg",
      rating: 4.8,
      orders: 185,
      price: 169.99,
      shipping: "Free shipping",
      description: "Enhance your running experience with the New Balance Men's Fresh Foam 1080 V11 Running Shoes. These shoes feature a breathable mesh upper and a Fresh Foam midsole that provides plush cushioning and support. The blown rubber outsole delivers durability and traction on various surfaces.",
      category: "shoe"
    }
  ];


  getHats() {
    return this.hats;
  }

  getShoes() {
    return this.shoes;
  }

  getHandbags() {
    return this.handbags;
  }

  getJackets() {
    return this.jackets;
  }

  getNecklaces() {
    return this.necklaces;
  }



  getBoxList() {
    return this.boxList;
  }


  addBoxList(item: any) {
    let check = false;

    for (let i = 0; i < this.boxList.length; i++) {
      if (this.boxList[i].title === item.title) {
        check = true;
        this.boxList.splice(i, 1);
        break;
      }
    }

    if (!check) {
      this.boxList.push({
        title: item.title,
        image: item.image,
        price: item.price,
        category: item.category
      });
    }
    this.itemCount = this.boxList.length;
    this.itemCountSubject.next(this.itemCount);
  }

  getItemCount(): Observable<number> {
    return this.itemCount$;
  }

  filterListWithQuery(query: string) {
    const filteredList: any[] = [];

    const categories = [
      { name: 'shoes', items: this.shoes },
      { name: 'necklaces', items: this.necklaces },
      { name: 'hats', items: this.hats },
      { name: 'handbags', items: this.handbags },
      { name: 'jackets', items: this.jackets }
    ];

    categories.forEach(category => {
      category.items.forEach(item => {
        if (item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase())) {
          filteredList.push(item);
        }
      });
    });

    this.filteredListSubject.next(filteredList); // BehaviorSubject'e yeni değeri iletiliyor
  }

  getFilteredList(): Observable<any[]> {
    return this.filteredList$;
  }





}
